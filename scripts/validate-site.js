#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const EXPECTED_PAGES = 60;
const EXPECTED_HREFLANGS = 13;

function fail(message) {
  throw new Error(message);
}

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.name === "index.html") {
      files.push(fullPath);
    }
  }
}

function count(text, pattern) {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function htmlPathForHref(href) {
  if (!href.startsWith("/") || href.startsWith("/assets/")) return null;
  if (href.includes("#")) href = href.split("#")[0];
  if (!href.endsWith("/")) return null;
  return path.join(ROOT, href, "index.html");
}

function validateHtml(filePath, allPages) {
  const rel = path.relative(ROOT, filePath);
  const html = fs.readFileSync(filePath, "utf8");

  if (count(html, /<h1\b/g) !== 1) fail(`${rel}: expected exactly one h1`);
  if (count(html, /rel="canonical"/g) !== 1) fail(`${rel}: expected exactly one canonical`);
  if (count(html, /rel="alternate" hreflang=/g) !== EXPECTED_HREFLANGS) fail(`${rel}: expected ${EXPECTED_HREFLANGS} hreflang links`);
  if (!/<html lang="[^"]+"/.test(html)) fail(`${rel}: missing html lang`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${rel}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) fail(`${rel}: missing meta description`);

  const scripts = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) || [];
  if (scripts.length !== 1) fail(`${rel}: expected exactly one JSON-LD script`);
  const json = scripts[0].replace(/^<script type="application\/ld\+json">/, "").replace(/<\/script>$/, "");
  const parsed = JSON.parse(json);
  if (!parsed["@context"] || !Array.isArray(parsed["@graph"])) fail(`${rel}: invalid JSON-LD graph`);

  const hrefs = Array.from(html.matchAll(/href="([^"]+)"/g)).map((match) => match[1]);
  for (const href of hrefs) {
    const target = htmlPathForHref(href);
    if (target && !allPages.has(target)) fail(`${rel}: missing internal target ${href}`);
  }
}

function validateSitemap() {
  const sitemapPath = path.join(ROOT, "sitemap.xml");
  const xml = fs.readFileSync(sitemapPath, "utf8");
  if (count(xml, /<url>/g) !== EXPECTED_PAGES) fail(`sitemap.xml: expected ${EXPECTED_PAGES} url entries`);
  if (count(xml, /<xhtml:link /g) !== EXPECTED_PAGES * EXPECTED_HREFLANGS) {
    fail("sitemap.xml: expected complete hreflang alternates");
  }
}

function main() {
  const pages = [];
  walk(ROOT, pages);
  pages.sort();
  if (pages.length !== EXPECTED_PAGES) fail(`expected ${EXPECTED_PAGES} HTML pages, found ${pages.length}`);
  const allPages = new Set(pages);
  for (const filePath of pages) validateHtml(filePath, allPages);
  validateSitemap();
  console.log(`Validated ${pages.length} pages, JSON-LD, canonical tags, hreflang links, and sitemap.`);
}

main();
