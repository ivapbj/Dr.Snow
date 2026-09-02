# Dr. Snow MA Website

Production Next.js website for [DrSnowMA.com](https://drsnowma.com), a residential snow removal and ice-control service serving Greater Springfield and Western Massachusetts.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify before deployment

```bash
npm run build
npm run lint
```

## Main pages

- `/` — Homepage, pricing reference, service areas, and Jotform request
- `/plans` — Seasonal and pay-per-storm pricing
- `/prepare-for-snow-removal` — Property preparation guide
- `/terms` — Snow and ice service terms
- `/service-areas/springfield-ma`
- `/service-areas/wilbraham-ma`
- `/service-areas/east-longmeadow-ma`
- `/service-areas/longmeadow-ma`
- `/service-areas/chicopee-ma`
- `/service-areas/west-springfield-ma`
- `/robots.txt` — Generated crawler instructions
- `/sitemap.xml` — Generated XML sitemap

## SEO configuration

The canonical production origin is `https://drsnowma.com`. Global metadata and LocalBusiness schema are in `app/layout.tsx`. Each primary page supplies its own title, description, Open Graph data, and self-referencing canonical URL.

When adding another indexable page:

1. Add unique page metadata.
2. Add a self-referencing canonical path.
3. Add the page to `app/sitemap.ts`.
4. Link to it naturally from an existing relevant page.
5. Avoid duplicating service-area copy.

Service-area content is stored in `app/service-area-data.ts` and rendered by `app/service-areas/[slug]/page.tsx`.

After deployment, verify the domain in Google Search Console and submit:

`https://drsnowma.com/sitemap.xml`

## Content and contact settings

Phone, email, service areas, and pricing are centralized in `app/site-config.ts`.

- Email: `info@drsnowma.com`
- Phone: `(413) 330-8573`

The embedded Jotform URL and fallback form link are in `app/driveway-form.tsx`. Jotform notification recipients must be configured inside the Jotform account; website code cannot change the recipient inbox for a form owned by another Jotform account.

## Brand assets

- Optimized website logo: `public/dr-snow-primary-logo.webp`
- Original logo source: `public/dr-snow-primary-logo.png`
- Optimized social-sharing image: `public/og.jpg`
- Browser icon: `public/favicon.svg`

## Deployment

Commit the extracted project to the connected GitHub repository and push to `main`. In Hostinger, confirm the deployment is connected to the same repository and branch. If automatic deployment is disabled, trigger a new deployment after the push.
