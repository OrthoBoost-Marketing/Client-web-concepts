# DESIGN.md: Chang Orthodontics

The shared design contract for `concept-a/`. Every page copies the header, footer, mobile drawer, sticky bottom bar, and container rules from `index.html` verbatim. Change them here first, then propagate.

Brief: `../CLIENT-BRIEF.md` · Visual shell: this folder, extracted from the original concept-1 "clinical instrument" pitch · Structure and voice: kit avatar **Marlowe**.

## Palette

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#005DAA` | primary: buttons, links, rules, accents |
| `--navy-bright` | `#3E90CE` | hover state on primary |
| `--navy-deep` | `#003B6E` | active state, deepest band |
| `--clay-soft` | `#EEF6F8` | tinted section bands |
| `--surface` | `#F5F8FE` | page background |
| `--c-ink` | `#1b1c1c` | headings, body |
| `--c-ink-2` | `#434653` | secondary body |
| `--c-mute` | `#74747c` | labels, captions |
| `--c-line-2` | `rgba(11,28,60,.14)` | hairlines, card borders |

Contrast: navy on white is 7.0:1, white on navy 7.0:1, `--c-ink-2` on surface 8.6:1. All pass AA. Never set body text in `--c-mute` below 14px.

## Type

- **Display** (`--display`): Archivo Black. H1 and the CTA-band headline only. Tight tracking `-.03em`, line-height `.98`.
- **Headline**: Hanken Grotesk 800. All H2 and H3.
- **Body**: Hanken Grotesk 400, 16px/24px, `--c-ink-2`.
- **Label**: Hanken Grotesk 700, 10 to 12px, uppercase, tracking `.1em` to `.18em`. Eyebrows, buttons, nav, stat labels.

Scale: H1 `clamp(36px,4.6vw,62px)` · H2 `clamp(28px,5vw,46px)` · H3 26 to 38px · body 16px · label 10 to 12px.

## Layout

- Container `max-width: 1320px`, padding `1.25rem` mobile / `4rem` at `md`. **Content is contained; bands are full-bleed.** Verify at 2560px.
- Section rhythm: `7rem` top and bottom (`py-section-padding`), `4rem` on mobile.
- Radius: pills `999px` for buttons and nav, `22px` cards, `14px` photos.
- Photos carry a `1px` hairline border and a hard offset shadow (`5px 6px 0 #1b1c1c`) in the hero, softer elsewhere. This is the signature of the original Concept A shell; keep it.

## Spacing and units

4-point scale, tokens `--space-1` (4px) through `--space-28` (112px). Every new page uses tokens, not literals. The homepage predates the scale and keeps its literals; do not retrofit it.

## Breakpoints

`640px` · `768px` · `900px` · `1024px` · `1100px`. Five, and no more. `1100px` is the nav switch: below it the pill nav becomes the drawer and the sticky bottom bar appears. Do not invent a sixth breakpoint for one stubborn section.

## Elevation

| Token | Use |
|---|---|
| `--shadow-hard` | hero photo, the signature offset |
| `--shadow-hard-sm` | split-section media |
| `--shadow-1` | resting pill CTA |
| `--shadow-2` | cards at rest |
| `--shadow-3` | dropdowns, drawer, anything overlaying content |

Z-index is a closed set: `--z-grain` 0, `--z-content` 5, `--z-nav` 50, `--z-bar` 55. Nothing else gets a z-index.

## Motion

Easing is always `--ease-out`. Durations are `--dur-fast` .2s (color and background), `--dur-base` .25s (transforms, menus), `--dur-slow` .7s (scroll reveals). Reveals are opacity plus a 30px translate, once, never looping. `prefers-reduced-motion: reduce` disables every transition and forces revealed elements visible. That block is non-negotiable, carry it to every page.

## Iconography

Inline SVG only, `viewBox="0 0 24 24"`, `fill:currentColor`, drawn on a 24px box so it pairs with the type scale. Rendered at 15 to 19px. Outlined-solid hybrid, matching the existing set. Every icon is decorative and carries `aria-hidden="true"`; the adjacent text is the accessible name. If an icon ever has to stand alone, it needs an `aria-label` on the control, not on the SVG. Icons never appear in a grid above the stats band, and never as a substitute for a photograph.

## Semantic colors

`--c-focus` (focus ring, currently navy), `--c-error` / `--c-error-bg`, `--c-success` / `--c-success-bg`, `--c-disabled` / `--c-disabled-bg`. These exist for the appointment and contact forms. All four foregrounds clear 4.5:1 on their paired background and on white.

## Voice

Premium, plain, unhurried. Marlowe register: state the fact, stop. The client is a boutique practice making its first real marketing spend and is skeptical of hype, so:

- No urgency, no discounts, no exclamation marks, no "state-of-the-art" or "compassionate care".
- Credentials are stated flatly and are all verifiable. Never round a number up.
- **No em-dashes anywhere.** Use commas, colons, or a full stop.
- Never advertise in Spanish. Never mention Medicaid. Never reference a down payment.
- Say "free consultation", never "free exam" or an invented offer name.

## Component rules carried from the kit

- Every booking CTA routes to `appointment.html`. Only the contact page gets a message box; no form on the homepage.
- One H1 per page. H2 per section.
- Trust-bar numbers must match the meet-the-doctor section and the footer verbatim.
- No carousels, no auto-rotating anything, no icon grids above stats.
- Real photography everywhere except the services grid.
- NAP is identical in header, footer, locations card, and JSON-LD, character for character.

## Assets

`assets/` holds the 11 approved originals; `assets/web/` holds responsive WebP at 480/768/1200/1800 plus `manifest.json` (`ratio` = width ÷ height). Always ship `srcset` + `sizes` + explicit `width`/`height`.

Ratios: `0.75` → 1200×1600 · `1.3333` → 1200×900 · `0.6654` → 1200×1803.

## Known gaps this design works around

- **No review quotes exist.** The reviews section ships as a marked placeholder. Never write a quote.
- **No official credential logo files.** The authority strip uses muted typographic wordmarks until real files arrive.
- **No service photography.** The services grid uses schematic cards rather than stock or AI imagery.
- **No exterior photo.** The locations section leans on the map.
- **No staff names or headshots.** Team stays at the minimal tier.
- **No founding year.** The footer copyright is a single year, not a range.

## Explicit non-goals

- **No dark mode.** Light only, deliberately. There is no `prefers-color-scheme` block and no dark palette. Do not add one page by page.
- **No component library.** This is a static site, not a product. Components live in the page markup and are copied verbatim per `DESIGN.md`, not imported.
- **No icon font, no icon sprite.** Inline SVG only.

## Open pre-launch items

- **Fonts load from the Google Fonts CDN and are render-blocking.** `display=swap` and `preconnect` are set, so there is no invisible-text flash, but there is a swap reflow. Self-host both families before launch, see the static-site-deploy skill.
- **No OG image.** Needs a 1200x630 asset.
- **No favicon set.** Currently reusing the logo SVG; needs a 32px ICO and a 180px apple-touch-icon.
- **Below 360px the page still overflows by about 18px.** At 320px the pill nav, the trust cells, and the sticky bar each exceed the viewport. 390px is the gate this design is measured against and it is clean there, verified. If a 320px floor is ever required, the fix is in the trust-cell padding and the nav pill padding, not in another `minmax` patch.

## Layout traps already paid for

Do not undo these, and repeat them on every new page:

- **Grid tracks that hold text use `minmax(0,1fr)`, never a bare `1fr`.** A bare `fr` track floors at min-content, so a single long uppercase word such as "DIRECTIONS" silently widens the whole grid. This is what pushed the sticky bar to 410px on a 390px phone.
- **`body { overflow-x: hidden }` does not clip `position: fixed` children.** The sticky bar and the pill nav escape it. Never rely on that rule to hide an overflow; fix the element.
