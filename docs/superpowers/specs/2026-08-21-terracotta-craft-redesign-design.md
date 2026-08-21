# Terracotta craft redesign (`demo-3`)

Date: 2026-08-21
Branch: `demo-3`
Scope: full visual redesign — color system, typography, signature visual devices, and every section on every route. Copy/content, routes, forms, data (`hero.ts`, `gallery.ts`), and business logic stay unless a component's structure must change to fit a new visual device.

## Goal

Replace the current cream / champagne-pink / sage palette and glass-morphism visual language with a **warm, tactile terracotta-red and beige "craft/textile" system**. This must read as unmistakably different from the site's current and prior iterations (mono, glass/pastel, soft-luxury-cream) — no leftover sage/teal/champagne, no glass blur, no 3D globe, no marquee ticker.

Success: a visitor sees warm beige/parchment surfaces with terracotta-red and oxblood used deliberately as accent (buttons, numerals, dividers, dark sections) — never as a full-bleed pastel wash and never diluted into an "earthy sage/olive" look. Visual devices feel tactile and textile-craft (woven texture, stitch-line dividers, fabric swatches, dotted map) rather than techy/glassy.

## Visual system

| Token | Hex | Job |
|---|---|---|
| `--parchment` | `#F3E6D3` | Page background (replaces `--cream`) |
| `--paper` | `#FAF3E7` | Card/panel surfaces (replaces `--sand`-as-bg use) |
| `--terracotta` | `#C1502E` | Primary accent — buttons, links, numerals, active states |
| `--oxblood` | `#7A2A1E` | Deep accent — footer bg, dark sections, hover-fill |
| `--rust-line` | `#B5673F` | Dividers, borders, stitch-lines (replaces `--sand`-as-border use) |
| `--ink` | `#2B1B12` | Body text, headlines |
| `--sand-dim` | `#D9C4A3` | Muted secondary borders/labels |

Map these onto the existing Tailwind `@theme inline` names in `globals.css` (`--color-cream`, `--color-sand`, `--color-taupe`, `--color-champagne`, `--color-accent2`, `--color-stone`, `--color-ink`) so existing component class names (`bg-cream`, `text-taupe`, `border-sand`, `text-champagne`) resolve to the new palette without a full find/replace of every className. No leftover sage/teal/pink hex values may remain in `globals.css`.

**Usage rule:** terracotta/oxblood are accent-only — used on 10-20% of any given section (numerals, one button, one rule, one dark band), never as full-section background wash except the footer and any explicit "dark band" callouts.

## Typography

- **Headlines (`.font-display`):** a warm serif/slab display font loaded via `next/font/google` (Fraunces or Source Serif 4), replacing the current Geist-Sans-as-display usage. Applies to all `h1`/`h2` and the `font-display` utility class.
- **Body/UI:** Geist Sans stays for paragraph copy, nav links, labels, form fields — keeps implementation scope down and body text readable.
- **Eyebrow labels (`.font-script`):** currently bold-sans uppercase in champagne. Restyle to small-caps *italic* serif (same new display font, italic) in terracotta — a distinct new signature look, not a recolor of the old style.

## New visual devices (replace glass / globe / marquee)

Fabstract is a textile export house — devices lean into fabric/craft motifs instead of the current tech/glass language:

1. **Woven-texture panels** — subtle repeating diagonal-weave CSS/SVG pattern as a card background utility (`.woven-panel`), replacing `.glass` / `.glass-strong` / `.glass-min` / `.glass-dark`. No `backdrop-filter: blur` anywhere in the new system.
2. **Stitch-line dividers** — dashed "running stitch" SVG/CSS rule (`.stitch-divider`) replacing plain `border-t border-sand` section separators.
3. **Fabric-swatch strip** — a horizontal auto-scrolling row of color/texture swatch chips, replacing `Marquee.tsx`'s ticker use on the homepage (client marquee text, if still needed anywhere, restyles but the swatch strip is the new signature device).
4. **Dotted terracotta world map** — a static (non-3D, no Three.js/WebGL) dotted map replacing `Globe.tsx` in the Global Presence section. `Globe.tsx` and its dynamic import are removed from `page.tsx`; component file deleted if unused elsewhere (confirm via grep before delete).
5. **Rounded stat cards with corner-tab accent** — replaces bare-numeral grid cells (`Capabilities`, `StatGrid.tsx`) with a paper-surface card, rounded corners, small terracotta corner-tab.

Scroll reveal behavior (`TextReveal`, `SectionReveal`, `framer-motion` + `EASE`) stays as-is — it's a motion pattern, not a visual chrome device, and works fine under the new palette. `prefers-reduced-motion` handling stays.

## Section-by-section

### Shared chrome
- **Navbar** (`navbar.tsx`): parchment background, serif logo/wordmark, pill-shaped nav links, terracotta underline on hover/active. Mobile sheet: parchment, not the current styling.
- **Footer** (`footer.tsx`): oxblood background, parchment text, stitch-line top border. This becomes the site's dark anchor (currently light/unclear).
- **WhatsAppButton**: restyle fill to terracotta (was teal/accent2).

### Homepage (`src/app/page.tsx`)
- **Hero**: keep split layout (video right, copy left) and `HeroVideos` component/data untouched. Left panel: parchment bg (was cream), oxblood headline text on parchment or reverse — confirm contrast in implementation. Stat row: rounded terracotta-tab cards replacing plain 2-col/4-col text stack.
- **Capabilities**: woven-texture cards on paper surface, terracotta numerals, stitch-line separators (was `border-sand` plain rule).
- **GlobalPresence**: dotted terracotta world map (device #4) + swatch-style pill buttons for region switcher (replace the `linear-gradient(champagne, accent2)` active-pill style with solid terracotta).
- **FAQ**: accordion restyled — paper card rows, terracotta "+" toggle, stitch-line rule between items (was `border-sand`).
- **Contact**: paper card form, rust-line left border (was `border-color: var(--champagne)`), rounded pill inputs, oxblood submit button (`.btn-crimson` restyled, not renamed — keep class name to avoid churn, redefine its colors).

### Subpages (About, Products, CSR, Gallery, Career)
Same token/component system applied to existing structures — **no new page layouts or information architecture**, per the "replace devices, keep information" scope:
- `PageHero.tsx`, `PageIntro.tsx`: restyle to parchment/paper/terracotta tokens.
- `Filmstrip.tsx`, `PhotoMosaic.tsx`, `StatGrid.tsx`: restyle surfaces/borders/numerals to new tokens; `StatGrid` picks up the corner-tab card style from device #5.
- `DottedMap.tsx`: if this is a separate/existing dotted-map component, evaluate reusing it for device #4 rather than building a new one — check before writing new code.
- `Still.tsx`, `LineMask.tsx`, `ScrollProgress.tsx`, `EnquireTab.tsx`, `GlassPanel.tsx`: restyle colors; `GlassPanel.tsx` specifically loses its blur/glass treatment in favor of `.woven-panel` (rename or repurpose — decide in planning).
- Gallery lightbox and `gallery.ts` data/behavior: unchanged, restyle chrome only.

## Architecture

- Tokens live in `src/app/globals.css` (`:root` + `@theme inline`) — replace hex values, add new utility classes (`.woven-panel`, `.stitch-divider`), remove `.glass*` utilities once nothing references them.
- New font loaded in `src/app/layout.tsx` alongside existing Geist font setup.
- Component-by-component restyle order for implementation: `globals.css` tokens/utilities → `navbar.tsx` / `footer.tsx` → homepage sections (`page.tsx`) → shared components (`PageHero`, `StatGrid`, etc.) → subpages.
- `Globe.tsx` removed from homepage; new static dotted-map component added (or `DottedMap.tsx` reused).
- `Marquee.tsx` usage on homepage replaced by new swatch-strip component; evaluate whether `Marquee.tsx` is reused elsewhere before deleting.

No new backend, no new data dependencies, no new heavy libraries (map/texture work done in CSS/SVG, not a new charting/3D library).

## Out of scope

- New copy, new photos/videos, new routes.
- Changing information architecture of subpages (section order, data shown).
- Removing the hero video or gallery lightbox behavior.
- Merging to `main` unless asked.

## Test

- No hex from the old palette (`#f7ede2`, `#f5cac3`, `#9c8a80`, `#f28482`, `#84a59d`, `#f6bd60`) remains in `globals.css` or component inline styles.
- No `backdrop-filter: blur` remains anywhere in the codebase.
- `Globe.tsx` no longer imported by `page.tsx`.
- Every route (`/`, `/about`, `/products`, `/csr`, `/gallery`, `/career`) renders with parchment/paper/terracotta/oxblood tokens only.
- Terracotta/oxblood read as accent (not a full pastel wash) on every page — spot check each route.
- Mobile: nav sheet, stat cards, and form all remain usable at small viewport widths.
