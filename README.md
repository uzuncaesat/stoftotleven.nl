# Stof tot Leven — by Hatish

Volledig opnieuw opgebouwde website voor **Stof tot Leven**, het maatwerk­atelier van
Hatice "Hatish" Göktaş Uzunca op de Kleiweg in Rotterdam: raamdecoratie, stofferen,
kussens op maat en maritieme bekleding.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens als CSS custom properties in `app/globals.css`)
- **Framer Motion** — hero-reveal, scroll-reveals, gestaffelde grids, mobiel overlay-menu, preloader
- **react-hook-form** — contactformulier met validatie + success-animatie
- **lucide-react** — iconen
- Lettertypes via `next/font`: Cormorant Garamond (display), DM Sans (body), Pinyon Script (handtekening)
- Google Maps embed op de contactpagina

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
npm run start    # productie-server
```

## Pagina's

| Route | Inhoud |
|---|---|
| `/` | Animatie-hero · Over Hatish · Onze diensten · Referenties (stat-tellers + testimonials) · Contact |
| `/raamdecoratie` | Gordijnen, vitrages, vouwgordijnen, inbetweens, rolluiken · galerij · CTA |
| `/stofferen` | Wat kan gestoffeerd worden · 4-staps proces-timeline · voor/na-galerij · CTA |
| `/kussens-op-maat` | Categorieën · personaliseren (stof/maat/vulling) · galerij · CTA |
| `/maritieme-bekleding` | Voor wie · eigenschappen (waterdicht/uv/duurzaam) · projectgalerij · CTA |
| `/zakelijke-partners` | Voordelen · samenwerking in 4 stappen · partnertypes · directe contactkaart |
| `/contact` | Formulier · contactgegevens · openingstijden · Google Maps · slotcitaat |

Plus `not-found.tsx` (404).

## Mappenstructuur

```
app/                 routes + layout + globals.css
components/layout/    Navbar (scroll-glass + mobiel overlay), Footer, Preloader
components/home/      HeroSection, AboutHatish, ServicesSection, ReferencesSection, ContactSection
components/shared/    PageHero, ContactForm, ServiceCard, AnimatedSection, MediaPanel,
                     SectionHeading, FeatureGrid, ProcessTimeline, Gallery, SplitBlock, CTABanner
components/ui/        Button, ScrollReveal (+ Stagger/StaggerItem), Logo
lib/site.ts          navigatie, diensten, contactgegevens, formulieropties
```

## Beeldmateriaal

Alle beeldplekken zijn gevuld met **mock-foto's** (gecureerde Unsplash-afbeeldingen),
gedefinieerd in [`lib/images.ts`](lib/images.ts) en getoond via `next/image` (geoptimaliseerd,
lazy-loaded, met editorial overlay + bijschrift). De domeinen staan in
[`next.config.mjs`](next.config.mjs) (`images.remotePatterns`).

Vervang de URL's in `lib/images.ts` door lokale bestanden in `/public/images/...` zodra het
echte fotomateriaal er is — verder hoeft er niets te veranderen. `MediaPanel` valt automatisch
terug op een gestyled "stofstaal"-placeholder als er geen `src` wordt meegegeven.

## Kleuren

Warm linnen ondergrond · houtskool-inkt · terracotta accent · natuurlijk strogeel.
Alle waardes staan als RGB-kanalen in `:root` in `app/globals.css` en zijn als Tailwind-
kleuren beschikbaar (`linen`, `linen-deep`, `linen-dark`, `charcoal`, `ink`, `terracotta`,
`terracotta-soft`, `straw`, `taupe`, `line`). Pas ze op één plek aan om de hele site mee te
laten verkleuren — bv. om ze één-op-één gelijk te trekken met de oude site.

## Contactformulier

Het formulier in `components/shared/ContactForm.tsx` valideert client-side en simuleert het
versturen. Koppel `onSubmit` aan een Next.js Route Handler (`app/api/contact/route.ts`) of een
e-maildienst (Resend, Postmark, …) om berichten echt te bezorgen.

---

*Stof tot Leven — by Hatish · Kleiweg 124A, 3051 GX Rotterdam · info@stoftotleven.nl · KvK 96116358*
