# Bunyane (بنيان) — public homepage

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · next-intl · Framer Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /ar
npm run lint && npm run typecheck && npm run build
```

- Locales: `/ar` (default, RTL), `/fr`, `/en`. Copy lives in `src/messages/*.json`.
- Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, sitemap and Open Graph.
- Fonts are self-hosted through `@fontsource` (IBM Plex Sans Arabic, Inter).

## Placeholders to replace before launch
- `public/images/hero.svg` and `public/images/about.svg` are custom illustrations.
  Replace with licensed architectural photography (e.g. `hero.jpg`), update `src/lib/site.ts`,
  and remove the `unoptimized` prop on the two `<Image>` tags so Next.js optimizes them.
- Footer contact details and social links are marked placeholders (no invented data).
- Privacy / Terms / Risk pages (`/[locale]/legal/*`) hold placeholder text pending approved legal copy.
- Login page is an informational "coming soon" page (no auth in this phase).
