# nextgenergy.ai

Astro source for https://nextgenergy.ai. Deployed by **Cloudflare Workers Builds**: every push to `main` runs `npx wrangler deploy`, which uploads the committed `./dist` as static assets (Worker name `nextgenergy-ai`, custom domains nextgenergy.ai and www). **Run `npm run build` before every push** so `dist/` matches the source.

## Where things live
- `src/pages/` one file per URL · `src/data/` copy and numbers (site.ts, sections.ts, claims.ts, leakPoints.ts) · `src/content/insights/` articles (Markdown, imported from Substack) · `src/components/`, `src/layouts/`, `src/styles/`
- `public/` copied verbatim: `_headers` (security headers), `_redirects`, `robots.txt`, `.well-known/security.txt`, `ads.txt`, `google-analytics.js|css` (consent-gated GA4), brand, fonts, team photos
- `scripts/import-substack.mjs` pull new Substack posts · `scripts/audit-mobile.mjs` responsive/CSP audit

## Local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npx wrangler deploy --dry-run   # validate config + build without deploying
```
Node 22.19 (see `.node-version`).
