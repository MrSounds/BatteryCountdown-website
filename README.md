# BatteryCountdown Website

Static multilingual website for BatteryCountdown, built for Hostinger GitHub deploy.

## Pages

The site is generated into static HTML for 12 locales:

- English: root paths such as `/`, `/faq/`, `/support/`
- Localized folders: `/de/`, `/es/`, `/fr/`, `/hi/`, `/it/`, `/ja/`, `/ko/`, `/nb/`, `/pt-br/`, `/ru/`, `/zh-hans/`

Each locale includes:

- Home
- FAQ
- Support
- Guide: low battery warning percentage on Mac

## Generate

```bash
npm run generate
```

This rebuilds all localized HTML pages, `sitemap.xml`, `robots.txt`, and `llms.txt`.

## Before Production Deploy

Replace the `__SITE_URL__` placeholder everywhere with the final production origin, for example:

```text
https://batterycountdown.app
```

Files intentionally use the placeholder in generated canonical URLs, hreflang links, sitemap entries, Open Graph metadata, and JSON-LD.

## Local Preview

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Notes

- No analytics or tracking scripts are included in v1.
- Important SEO content is visible HTML text, not JavaScript-rendered text.
- Every localized page has reciprocal hreflang links.
- `llms.txt` is included as an experimental AI-readable summary. It is not a guaranteed ranking signal.
