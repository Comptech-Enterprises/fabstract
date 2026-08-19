# Atelier glass redesign (`demmo-1`)

Date: 2026-08-19  
Branch: `demmo-1`  
Scope: full visual rewrite of every public route. Same copy, routes, and data sources.

## Goal

Replace the current olive/bone corporate look with a **light atelier** site: cream surfaces, sharp grids, **glassmorphism**, still photography, and **medium** motion. Remove client tickers and the home hero video.

Success: a visitor on `/` never sees a scrolling brand ticker or looping hero MP4; every route (`/`, `/about`, `/products`, `/gallery`, `/csr`, `/career`) uses the same glass shell and photo language.

## Visual system

| Token | Value | Use |
|-------|--------|-----|
| Bone | `#F5F0EB` | Page background |
| Floral white | `#FFFFFF` | Glass mix, text on dark |
| Smoky black | `#1A1A1A` | Body text |
| Olive drab | `#8B5E3C` | Accent, links, active |
| Olive dark | `#6B4226` | Hover on solid buttons |

**Glass:** `backdrop-filter: blur` (16–24px), fill `white` at 35–50% opacity, 1px border `smoky-black/10`, optional inner highlight. Do not use opaque white cards as the default surface.

**Typography:** keep Geist. Headings tight tracking; section labels uppercase + wide tracking in olive.

**Nav:** frosted, floating over content. After 40px scroll, increase blur and border contrast. Mobile menu is a glass sheet, not a flat bone block.

**Footer:** dark (`smoky-black`) with a thin glass row or photo strip behind; same link set as today.

## Motion (medium)

- Scroll: `whileInView` fade + short `y` (once). Shared `SectionReveal`.
- Photos: small parallax (`translateY` vs scroll), capped so layout does not jump.
- Glass cards: hover lift (`y: -4`) + shadow. No infinite marquee.
- Nav: blur intensity tied to scroll.
- `prefers-reduced-motion: reduce`: disable parallax and hover lift; keep opacity fades.

Use existing `framer-motion`. No new animation library.

## Data and assets

- Photos: `src/data/gallery.ts` (`GALLERY_FILES` on R2). Reuse for home hero, mosaics, page heroes. Cycle files so the same nine images cover all showcases.
- Do **not** play `HERO_VIDEOS` / `HeroVideos` on the home page. After video is removed, delete unused `HeroVideos` and `src/data/hero.ts` if nothing else imports them.
- Copy, stats, client names, FAQs, product lines, CSR areas, career pillars, contact details: keep existing strings. Rearrange layout only.
- Globe: keep `Globe` client-only dynamic import.
- WhatsApp: keep floating button and career form `wa.me` submit.
- Forms: still `preventDefault` on home enquiry; no new backend.

Image failure: broken R2 URL shows a bone-colored placeholder, not a broken-image icon stack.

## Shared components

| Component | Role |
|-----------|------|
| `GlassPanel` | Blur + border + optional hover lift |
| `PageHero` | Full-bleed still, parallax, glass title block |
| `PhotoMosaic` | 3–4 gallery images, uneven grid |
| `SectionReveal` | Viewport fade/slide once |
| `Navbar` / `Footer` | Restyled; same `NAV_LINKS` |

Kill on home: `HeroVideos`, `BrandCarousel`, both `animate-scroll` client tickers (`BrandCarousel` and the ticker inside `Clients`).

Clients section remains as **static glass cards** (name + country), not a marquee.

## Page layouts

**Home:** photo hero (2–3 stills, glass copy + CTA); stats as glass chips; capabilities 2×2 glass grid; photo mosaic; static client cards; global presence + globe + testimonials (no ticker); FAQ glass accordion; contact glass form + map.

**About:** `PageHero` + glass title; story split text/photo; team as four glass cards (photo placeholders stay until real headshots exist).

**Products:** `PageHero`; three product lines as large glass panels with a still beside each; material tags as glass pills.

**Gallery:** same R2 files and lightbox open/close behavior; new masonry, glass hover, larger gaps.

**CSR:** `PageHero`; four area cards glass; mid-page `PhotoMosaic`.

**Career:** `PageHero`; pillars glass; apply form in `GlassPanel`; WhatsApp submit unchanged.

## Architecture

- Next.js App Router pages stay `"use client"` where they already are (motion, globe, forms).
- Glass utilities live in `globals.css` (`@layer`) plus small React wrappers. Do not duplicate blur/border strings on every card.
- Routes and `NAV_LINKS` unchanged. No new pages.

## Out of scope

- CMS, real enquiry API, new photography beyond R2 gallery files
- SEO copy rewrite, new fonts, dark-mode toggle
- Changing Globe data or map embeds

## Test plan

1. All six routes render; no horizontal overflow on mobile.
2. Home: no brand ticker, no `<video>` in hero.
3. Nav glass strengthens on scroll; mobile menu works.
4. Gallery lightbox still opens and closes.
5. Career form still opens WhatsApp with encoded fields.
6. With reduced-motion enabled, parallax and card lift are off.
7. `next build` succeeds.

## Risks

- Large stills: reuse `gallerySrc` and the gallery page’s existing `<img>` + aspect-ratio pattern; set dimensions/aspect so layout does not shift.
- Globe + blur: keep globe in its own panel; do not put `backdrop-filter` on the WebGL canvas parent if it tanks FPS — blur the adjacent glass column only.
