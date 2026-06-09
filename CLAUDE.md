# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build (runs type-check)
npm run start    # serve production build locally
```

No linter or test suite is configured. Type correctness is enforced by `next build`.

## Architecture

Single-page marketing site for energy consultant Martin Pour. One route (`/`), fully static output.

**Page composition** — `app/page.tsx` imports and renders sections in order:
`Header → Hero → Problem → Services → HowItWorks → WhyMartin → Pricing → FAQ → Contact → Footer`

To reorder, add, or remove a section, edit only `app/page.tsx`.

**Section components** live in `components/sections/`. Each is self-contained — its own copy of all hardcoded colors and text. There is no shared data layer or CMS; copy changes happen directly in the component file.

**Scroll animations** — wrap any element in `<FadeIn delay={n} direction="up|left|right|none">` from `components/ui/FadeIn.tsx`. It uses Framer Motion `useInView` with `once: true`, so animations fire once when the element enters the viewport. All section components are Client Components only when they need interactivity (FAQ accordion, Contact form, Header scroll state); otherwise they are Server Components.

**Styling** — Tailwind CSS v4 with CSS-based configuration (no `tailwind.config.ts`). Design tokens are defined in `app/globals.css` inside `@theme {}`. All colors are hardcoded as hex literals in components (not as Tailwind utility aliases) because the v4 `@theme` tokens aren't reliably available as arbitrary-value classes across all contexts.

**Fonts:**
- `Conthrax` — display font for all `h1/h2/h3` (set globally in `globals.css`), loaded from `public/fonts/*.woff2`. Also applied inline via `style={{ fontFamily: "Conthrax, Montserrat, sans-serif" }}` on specific non-heading elements (stats, logo, step numbers).
- `Montserrat` — body font, loaded via `next/font/google` in `app/layout.tsx`.

**Analytics** — `components/Analytics.tsx` initialises GA4 with Consent Mode v2 defaults (`analytics_storage: denied`). Call `grantConsent()` / `denyConsent()` (exported from the same file) from a cookie banner to update consent. GA ID is read from `NEXT_PUBLIC_GA_ID`; the component renders nothing if the var is unset.

**Contact form** — submits via Formspree (`https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_ID}`). No server route needed.

## Brand & design rules

Matches Aberg Energy visual identity (parent company).

| Role | Value |
|---|---|
| Primary navy | `#2F455C` |
| CTA blue | `#1032CF` / hover `#2A4EEF` |
| Cyan accent | `#00E8F5` |
| Background | `#F9F9F9` |
| Muted text | `#64748B` |
| Silver labels | `#94A3B8` |
| Border | `#E2E2E2` |

- Navigation links: `uppercase tracking-widest text-xs`
- Section labels (overlines): `uppercase tracking-widest text-xs text-[#00E8F5]`
- Primary CTA buttons: `border-2 border-[#00E8F5]` outline style, fills cyan on hover
- Czech quotation marks: `„ ... "` (not `" ... "`)
- No em dashes (`—`) in copy — use a period or comma instead

**Tone of voice:** informal Czech, second-person plural (vykání). Short sentences. No superlatives, no corporate jargon. No em dashes.

## Environment variables

Copy `.env.local.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (no trailing slash) |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (`G-…`) |

## Remaining TODOs

- LinkedIn URL in `Contact.tsx` (currently placeholder)
- IČO in `Footer.tsx`
- `public/og-image.png` — 1200×630 px for Open Graph
- `/gdpr` page or modal (linked from footer and contact form)
- Cookie consent banner wired to `grantConsent()` / `denyConsent()`
- Formspree ID and GA4 ID set in Vercel environment variables

## Deploy

GitHub → Vercel auto-deploy on push to `main`.
Repo: https://github.com/RadekMikulka/martinpour
Live: https://martinpour.vercel.app
