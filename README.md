# martinpour.cz

Web pro nezávislého energetického poradce Martina Poura. Next.js 15, Tailwind CSS v4, statický one-page site.

## Lokální vývoj

```bash
# 1. Nainstalujte závislosti
npm install

# 2. Zkopírujte env soubor a doplňte hodnoty
cp .env.local.example .env.local

# 3. Spusťte dev server
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000).

## Env proměnné

| Proměnná | Popis |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | Produkční URL (bez lomítka), např. `https://martinpour.cz` |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID formuláře z [formspree.io](https://formspree.io) |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID ve formátu `G-XXXXXXXXXX` |

## Formspree (kontaktní formulář)

1. Zaregistrujte se na [formspree.io](https://formspree.io)
2. Vytvořte nový formulář
3. Zkopírujte ID (část URL za `/f/`) do `NEXT_PUBLIC_FORMSPREE_ID`

## Deploy na Vercel

```bash
# Přihlaste se
vercel login

# První deploy (nastaví projekt)
vercel

# Produkční deploy
vercel --prod
```

Na Vercelu pak v nastavení projektu přidejte env proměnné (`Settings → Environment Variables`).

Nebo propojte GitHub repo a Vercel bude deployovat automaticky při každém push na `main`.

## Struktura

Každá sekce je samostatná komponenta v `components/sections/`. Pořadí sekcí se mění v `app/page.tsx`.

Design tokeny (barvy, font) jsou v `app/globals.css` v bloku `@theme`.

## Checklist před spuštěním

- [ ] Doplnit telefon, e-mail, LinkedIn URL v `components/sections/Contact.tsx`
- [ ] Doplnit IČO v `components/Footer.tsx`
- [ ] Nastavit env proměnné na Vercelu
- [ ] Vytvořit `public/og-image.png` (1200 × 630 px)
- [ ] Přidat GDPR stránku (`app/gdpr/page.tsx`)
- [ ] Otestovat formulář přes Formspree
- [ ] Nastavit vlastní doménu v Vercel dashboard
