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

## Product catalogue

Product content lives in `data/products.ts`. Add one object to the `products` array to create a catalogue card and a corresponding `/products/[slug]` detail page from the shared template.

Each product supports a status, industry, summary, detailed problem and solution, capabilities, technologies, workflow, roadmap, current-status copy, CTA, visual accent, screenshots, video, demo, GitHub, live product, and case-study URLs.

Verified engineering work and experimental projects live separately in `data/work.ts` and `data/labs.ts`, keeping the commercial product catalogue focused.

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

The legacy vinext scripts remain available as `npm run dev:sites` and `npm run build:sites`; they are not used by Cloudflare Pages.
