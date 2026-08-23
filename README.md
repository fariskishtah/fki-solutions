# FK Solutions

Premium, dark-first company website for FK Solutions—an AI and software product company building practical systems for real-world business problems.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

The production build is a static export written to `out/`.

## Data-driven content

The site has no CMS or database. Its typed data modules are the single source of truth:

- `data/products.ts` creates product cards, status filters, metadata, sitemap entries, search results, related items, and `/products/[slug]` pages.
- `data/work.ts` creates the selected-work catalogue, category filters, search results, related items, and `/work/[slug]` pages.
- `data/labs.ts` creates Labs cards, category filters, search results, related items, and `/labs/[slug]` pages.
- `data/services.ts` drives the services page and service search results.
- `data/site.ts` holds navigation, homepage sections, contact information, social links, founder details, experience, and CTA copy.
- `data/case-studies.ts` is an intentionally empty typed collection ready for future verified case studies.

Add one valid object to the appropriate array to create the corresponding card and statically generated detail page. The homepage automatically selects records whose `featured` field is `true`; filter categories are derived from categories actually present in the data.

Each product supports a status, industry, summary, detailed problem and solution, capabilities, technologies, workflow, roadmap, current-status copy, CTA, visual accent, screenshots, captioned video, architecture media, demo, GitHub, live product, case-study URLs, and optional metrics. Empty optional sections do not render.

Verified engineering work and experimental projects stay separate from commercial products. Private repository links only render when both a URL exists and `githubVisible` is `true`.

Local site-wide search is generated from the same data modules and runs entirely in the browser. Related Work is calculated at build time from shared category and technology tags.

## Contact and social links

Verified contact information and optional social accounts are centralized in `data/site.ts`. Only non-null social URLs render across the site. A public phone number is disabled by default.

## Contact form

The V1 contact form is intentionally frontend-only. Its submit handler in `components/ContactForm.tsx` is the documented integration point for a future form or email service; it never claims a message was delivered.

## Hosting

The primary build uses the Next.js App Router with `output: "export"` for Cloudflare Pages. No database, storage bucket, server runtime, authentication layer, or backend API is required.

Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`
- Production branch: `main`

Set `NEXT_PUBLIC_SITE_URL` to the final `https://<project>.pages.dev` URL or custom domain so sitemap, robots, canonical metadata, and social-preview URLs use the public Cloudflare origin. Node.js is pinned through `.node-version`.

`NEXT_PUBLIC_SITE_URL` is optional for local builds because `data/site.ts` provides the current public-site fallback. Set it in Cloudflare when the final Pages hostname or custom domain is known.

The legacy vinext scripts remain available as `npm run dev:sites` and `npm run build:sites`; they are not used by Cloudflare Pages.
