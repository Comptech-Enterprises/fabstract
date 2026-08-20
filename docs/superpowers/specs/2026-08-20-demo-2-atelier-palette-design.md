# Soft luxury atelier restyle (`demo-2`)

Date: 2026-08-20  
Branch: `demo-2`  
Scope: new color system + home/nav chrome. Inner page **layouts stay**. Copy, routes, R2, globe, WhatsApp, forms stay.

## Goal

Restyle Fabstract on `demo-2` as a **soft luxury atelier**: cream field, sand surfaces, almost no charcoal. Dark palette colors are accent only.

Success: a visitor sees mostly `#F5ECDC` / `#D7C9B2`. `#1F1D20` appears on headlines and one primary button, not as page wash. Home hero video stays, framed like a lookbook plate (not cinema-black full bleed). Inner routes keep their current section structure.

## Visual system

| Token | Hex | Share | Job |
|-------|-----|--------|-----|
| cream | `#F5ECDC` | most | page background, letterbox around hero |
| sand | `#D7C9B2` | second | cards, nav hairline, section bands, mats |
| taupe | `#7B7369` | low | small-caps labels, borders, mute |
| stone | `#4D4845` | rare | body copy |
| ink | `#1F1D20` | least | display headlines, one solid CTA |

Map Tailwind theme in `globals.css` so existing class names (`navy`, `teal`, `beige`, `white`, `sky`) point at this set. Do not leave leftover olive/navy hex.

**Usage rule:** if a block is currently `bg-navy` + white type, restyle it to **sand or cream** + stone/ink type. Do not keep checkerboard black cells. Ink fill is allowed only on the primary button (and matching WhatsApp if needed).

**Typography:** keep Geist + Syne (`font-display`). Labels: uppercase, wide tracking, taupe, ~11px. Headlines: Syne, ink, tight tracking. Body: stone, relaxed line-height.

**Selection:** sand background, ink text.

**Buttons:** `.btn-crimson` becomes ink fill + cream type; hover cream fill + ink outline. Ghost links: taupe, no fill.

## Motion

Keep existing `framer-motion` and `EASE`. No new library. No new marquee/ticker behavior. `prefers-reduced-motion: reduce` already respected where present; do not add heavy parallax.

## Data and assets

- Hero: keep `HeroVideos` + `src/data/hero.ts`. Do not delete the video.
- Gallery: keep `src/data/gallery.ts` and lightbox behavior.
- Copy, stats, regions, FAQs, product lines, CSR, careers, contact: **same strings**.
- Globe: keep client-only dynamic import.
- WhatsApp: keep; restyle to sand/ink, not teal.

## Nav and footer

- Nav: cream field, wide horizontal padding, sand hairline bottom. Logo left (drop `brightness-0` if it fights cream; keep mark readable on cream). Links small-caps taupe; active = stone, not ink fill. Mobile sheet cream, not black.
- Footer: sand band, taupe links, ink only for the wordmark line if needed.

## Home (layout change allowed)

Cream canvas.

1. **Hero plate:** video inset with fat cream (or sand) margins — not `absolute inset-0` cinema. Soft gradient only if type fails contrast; prefer type **beside/below** the plate in ink/stone on cream, not white-on-black overlay. Label taupe `Est. 1991 — Noida & Delhi`. One ink CTA. Stats as four **sand** cards with taupe labels and ink numbers (2×2 on small screens, 4 across desktop).
2. **Capabilities / network / clients / FAQ / contact:** same section order and components. Swap dark fills to cream/sand. Borders taupe/sand, not heavy ink rules. Contact fields: stone text on cream, taupe underline.

## Inner pages (no layout change)

`/about`, `/products`, `/gallery`, `/csr`, `/career` keep current grids, sticky index, banners, team cards, masonry, forms.

Only:

- Page bg cream
- Cards/panels sand
- Labels taupe
- Body stone
- Titles ink
- Lightbox: cream wash, not 80% black
- Primary actions: one ink button where a solid button already exists

Do not invent new inner-page structures (no new about layout, no new product split, no new gallery system).

## Architecture

- Tokens live in `src/app/globals.css` (`:root` + `@theme inline`).
- Shared chrome: `navbar.tsx`, `footer.tsx`, `WhatsAppButton.tsx`, `layout.tsx`.
- Home structure: `src/app/page.tsx` + `HeroVideos.tsx` (inset wrapper).
- Inner pages: class/token pass only.

No new backend. No new dependencies.

## Out of scope

- New copy or fake team photos
- Removing hero video
- Merging to `main` unless asked
- Rewriting inner page information architecture

## Test

- Home: cream dominates; video is framed; one ink button
- Inner routes: same sections as before commit, new palette
- Contrast: stone/ink on cream readable; taupe labels readable
- Mobile: nav shorter than desktop; stats 2×2; no black full-bleed bars
