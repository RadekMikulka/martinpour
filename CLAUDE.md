# martinpour.cz — Projekt přehled

One-page web pro nezávislého energetického poradce Martina Poura.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config v `app/globals.css`)
- Framer Motion (scroll animace přes `components/ui/FadeIn.tsx`)
- Formspree (kontaktní formulář)
- Google Analytics 4 + Consent Mode v2

## Struktura
```
app/
  layout.tsx        — Inter font, metadata, GA4
  page.tsx          — sestavuje všechny sekce
  globals.css       — Tailwind + design tokeny (@theme)
  sitemap.ts        — SEO sitemap
  robots.ts         — robots.txt
components/
  Header.tsx        — fixed navigace s mobile hamburgerem
  Footer.tsx        — IČO, GDPR, copyright
  Analytics.tsx     — GA4 + Consent Mode v2
  sections/
    Hero.tsx        — headline, CTA, Martinova fotka
    Problem.tsx     — tmavý pruh s empatickým textem
    Services.tsx    — 4 karty "Co pro vás udělám"
    HowItWorks.tsx  — 3 kroky procesu
    WhyMartin.tsx   — bullety + citát s fotkou
    Pricing.tsx     — transparentní ceník
    FAQ.tsx         — 6 otázek, accordion
    Contact.tsx     — formulář + kontaktní info
  ui/
    FadeIn.tsx      — reusable scroll animation wrapper
public/
  images/
    martin-pour-transparent.png  — hlavní foto (hero)
    martin-pour-circle.png       — avatar (WhyMartin citát)
    martin-pour-hero.jpg         — záložní foto
```

## Paleta
| Token | Hex | Použití |
|-------|-----|---------|
| Primary | `#1E3A5F` | Nadpisy, navigace, akcenty |
| Accent | `#F59E0B` | CTA tlačítka, ikony, zvýraznění |
| Background | `#FAFAF7` | Stránkové pozadí |
| Surface | `#FFFFFF` | Karty, formuláře |
| Muted | `#6B7280` | Tělo textu, popisky |
| Border | `#E5E5E0` | Orámování karet |

## Tone of voice
- Vykání, ale lidské. Ne "Vážený zákazníku".
- Krátké věty. Aktivní slovesa.
- Žádné superlativy, žádné korporátní fráze.
- Konkrétní čísla a příklady.
- Příklady: "Ukážu vám, kolik reálně platíte", "Bez podpisů na koleni"

## Proměnné prostředí
Viz `.env.local.example` — před deploym je potřeba nastavit:
- `NEXT_PUBLIC_SITE_URL` — produkční URL
- `NEXT_PUBLIC_FORMSPREE_ID` — ID formuláře na formspree.io
- `NEXT_PUBLIC_GA_ID` — Google Analytics Measurement ID (G-XXXXXXXXXX)

## Co je potřeba doplnit (TODO)
- [ ] Opravit telefon a e-mail v `Contact.tsx`
- [ ] Opravit LinkedIn URL v `Contact.tsx`
- [ ] Doplnit IČO do `Footer.tsx`
- [ ] Nastavit `.env.local` (Formspree ID, GA4 ID)
- [ ] Vytvořit `public/og-image.png` (1200×630 px) pro sdílení na sítích
- [ ] Vytvořit stránku `/gdpr` nebo přidat GDPR text jako modal
- [ ] Zvážit cookie consent banner (propojit s `grantConsent()`/`denyConsent()` z `Analytics.tsx`)
