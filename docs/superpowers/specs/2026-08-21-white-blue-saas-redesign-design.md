# White + electric blue SaaS-clean redesign (`demo-3`, v3)

Date: 2026-08-21
Branch: `demo-3`
Scope: full restart. All prior palettes/devices from this branch's history (terracotta/oxblood, bone/amber) are superseded. Copy, routes, forms, data (`hero.ts`, `gallery.ts`) unchanged.

## Goal

Clean modern white base with a single confident electric-blue accent, SaaS-product-site feel: generous white space, thin 1px borders, subtle soft shadows, rounded-but-not-bubbly cards (~0.5rem radius), blue reserved for CTAs/links/active states/numerals — not painted across sections. No glass/blur, no woven texture, no stitch-line, no stripe pattern, no dotted map — those were prior-branch devices, this is a clean restart.

## Palette

| Token | Hex | Job |
|---|---|---|
| `--white` | `#FFFFFF` | Page/card background |
| `--offwhite` | `#F7F8FA` | Alternating section background |
| `--border` | `#E4E7EC` | Hairline borders |
| `--blue` | `#2563EB` | Primary accent — CTAs, links, numerals, active state |
| `--blue-dark` | `#1D4ED8` | Hover/pressed state |
| `--ink` | `#0F172A` | Headlines, body text |
| `--muted` | `#64748B` | Secondary text, labels |

Reuse existing CSS variable names in `src/app/globals.css` (`--cream`, `--sand`, `--taupe`, `--champagne`, `--accent2`, `--stone`, `--ink`) repointed to this table so existing component classNames keep resolving — no mass classname rename across ~15 files.

## Typography

Drop the serif/display-font experiment from prior passes. Stay on Geist Sans throughout (headlines and body) — clean geometric sans fits SaaS-clean mood best. Headline weight: 600-700 (not the lighter default). Small-caps eyebrow labels: blue, regular weight, wide tracking — no italic serif.

## Devices (all new, replacing every prior-branch device)

1. **Card**: white surface, 1px `--border`, `0.5rem` radius, soft shadow on hover only (`0 4px 16px -8px rgba(15,23,42,0.08)`). Utility class `.card`.
2. **Section rule**: plain 1px `--border` divider — no stitch/stripe pattern.
3. **Stat block**: simple numeral (blue, bold) + label (muted) in a `.card` — no corner-tab, no solid-fill block.
4. **Global presence map**: keep it simple — a lightweight dotted/pin map is fine (reuse `DottedMap.tsx` if present and functional) recolored blue/ink on white, OR fall back to a plain region-list/tab layout if the map component adds complexity — pick whichever keeps the page light and fast.
5. **Marquee/ticker**: not reintroduced. If homepage needs a scanning element, a simple logo/stat strip on `--offwhite` is enough — no swatch chips.

## Section notes (homepage)

- Navbar: white bg, thin bottom border, text nav links with blue underline on hover/active, one solid blue "Enquire" button.
- Hero: white bg, generous padding, ink headline, muted subhead, one solid blue primary CTA + one ghost secondary link, stat row as 4 `.card` blocks.
- Capabilities: 4 `.card` stat blocks on offwhite section band.
- GlobalPresence: region tabs (blue active pill, muted inactive) + description; map or list per device #4.
- FAQ: accordion, plain divider, blue "+" toggle.
- Contact: white `.card` form, thin border, rounded inputs, one solid blue submit button.
- Footer: offwhite or white band (NOT dark — this palette has no dark-anchor requirement), muted text, thin top border.

## Subpages

Same token/component pass across About/Products/CSR/Gallery/Career — restyle only, no IA changes, reuse existing section structure per component (`PageHero`, `PageIntro`, `Filmstrip`, `PhotoMosaic`, `StatGrid`, etc.).

## Process note

This implementation will be done directly (not delegated to an unsupervised background agent) after a prior background-agent run on this branch went out of scope repeatedly and fabricated instructions that were never given. Work proceeds file-by-file, verifiable at each step.

## Out of scope

No new copy/photos/routes. No dark-mode/dark-band treatment. No 3D/glass/texture effects. No new heavy dependencies. No merge to main unless asked.

## Test

- No leftover hex from prior passes (terracotta `#C1502E`/`#7A2A1E`, amber `#D98E1E`/`#8A5A0F`) anywhere in `src/`.
- No `backdrop-filter`/`blur(`, no `.woven-panel`/`.stitch-divider`/`.stripe-` classes remain.
- `npm run build` passes clean.
- Blue reads as accent (not a full wash) on every route.
