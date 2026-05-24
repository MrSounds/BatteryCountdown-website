# BatteryCountdown Website

Static website for BatteryCountdown, built for Hostinger GitHub deploy.

## Pages

- `/` - landing page
- `/faq/` - FAQ and SEO/AIO answer page
- `/support/` - support/contact page

## Before Production Deploy

Replace the `__SITE_URL__` placeholder everywhere with the final production origin, for example:

```text
https://batterycountdown.app
```

Files that intentionally use the placeholder:

- `index.html`
- `faq/index.html`
- `support/index.html`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

## Local Preview

Run a static server from the repository root:

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
- Structured data is included as JSON-LD and should be validated after the final domain is deployed.
- `llms.txt` is included as an experimental AI-readable summary. It is not a guaranteed ranking signal.
