# DESIGN.md — Romans Orthodontics, concept-b

Layer 1 brand authorship for the `concept-b/` build. Direction: **hometown warm
(family)**. Read this before touching a page. Every page links
`assets/site.css` and `assets/site.js`; do not restyle chrome per page.

Companion file: `PAGE-KIT.md` holds the exact header/footer/mobile-bar markup to
paste. Copy it verbatim so all 18 pages match.

---

## Why this direction

The practice is eight weeks old, solo, all-ages, and the approved tagline is
"live a little, smile a lot." That is not a luxury brand and not a discount
brand. It is the hometown specialist who knows your kid's name.

The real office photos settled it: navy reception desk, warm wood slat walls,
tan leather sofa, brass pendants, burnt-orange treatment chairs. The space is
already warm and grounded, and its colors land almost exactly on the two
official logo colors. The site should feel like the room.

**Distinct from the sibling concepts** (a real requirement, not a preference):
concept-a is warm-editorial with mono index rails, hairline rules and Fraunces;
concept-c is plain Source Sans. So concept-b takes slab-serif headings, rounded
cards, soft warm shadows and sand-tinted bands. **No mono type, no "Sec. 01"
rails, no hairline editorial rules** anywhere in this build.

---

## Color

Both brand hues are lifted from the official logo SVG. They are fixed.

| Token | Hex | Role |
|---|---|---|
| `--copper` | `#A6613C` | brand primary, buttons, links, accents |
| `--copper-deep` | `#7E4526` | hover, pressed, dark copper text on cream |
| `--copper-tint` | `#F7E9DF` | soft accent wash, pills, active nav |
| `--slate` | `#264653` | brand secondary, dark bands |
| `--slate-deep` | `#1B333D` | deepest band, footer |
| `--ink` | `#22333B` | body text |
| `--ink-soft` | `#5A6B73` | secondary text, captions |
| `--cream` | `#FDF9F4` | default page background |
| `--sand` | `#F5EADC` | alternating band tint |
| `--sand-edge` | `#E9DAC5` | card borders, dividers |
| `--white` | `#FFFFFF` | cards on tinted bands |

**Band rhythm:** `cream → white → sand → white → slate` down a page. Never two
identical adjacent bands. Bands are full-bleed; content stays in `.wrap`.

**Contrast:** body `--ink` on `--cream` is 11.5:1. Copper on cream is 4.7:1, so
copper is for large text (20px+), buttons and borders, never small body copy.
On slate bands use `--cream` text and `--copper-tint` for accents.

**Color budget:** two hues plus neutrals. Do not add a third hue.

## Type

- **Display: Zilla Slab** 600/700. Warm slab with a main-street sturdiness.
  All h1/h2/h3, buttons, eyebrows.
- **Text: Karla** 400/500/700. Friendly grotesque, slightly quirky, not corporate.
  Body, nav, labels, form fields.
- No third family. No monospace in this build.

Scale (fluid, set in `site.css`):

| Element | Size |
|---|---|
| h1 | `clamp(2.35rem, 5.1vw, 3.85rem)` / 1.05 / `-0.021em` |
| h2 | `clamp(1.8rem, 3.3vw, 2.6rem)` / 1.12 / `-0.016em` |
| h3 | `clamp(1.25rem, 1.7vw, 1.45rem)` / 1.2 |
| body | `1.0625rem` (17px), 1.65; lead `1.1875rem` (19px), 1.6 |
| eyebrow | `0.8125rem`, 700, uppercase, `0.13em` tracking, copper |

Measure caps at `62ch` body, `26ch` display. Headline sentences end in a period:
it reads spoken, which fits the voice.

## Craft

- **Radius:** 16px cards and images, 10px buttons and inputs, 999px pills.
- **Shadow** (warm, never neutral grey):
  `--sh-1: 0 1px 2px rgba(34,51,59,.05), 0 10px 24px -14px rgba(34,51,59,.16)`
  `--sh-2: 0 2px 4px rgba(34,51,59,.06), 0 20px 44px -18px rgba(34,51,59,.20)`
- **Container:** `.wrap` = `max-width 1200px`, padding `0 clamp(20px, 4vw, 40px)`.
  Verify at 2560px: bands bleed, content never touches the edge.
- **Section padding:** `clamp(64px, 8vw, 108px)` top and bottom.
- **Buttons:** primary solid copper, white text, 10px radius, `--sh-1`, lifts 1px
  on hover to `--copper-deep`. Secondary outline slate, transparent fill.
  Minimum 46px tall, 44px on the mobile bar.
- **Focus:** `outline: 3px solid var(--copper); outline-offset: 2px`. Never removed.
- **Motion:** 160ms ease on color and 1px transforms only. No scroll animation,
  no count-ups, no parallax, nothing that delays readability.
- **Images:** 16px radius, `object-fit: cover`, explicit `width`/`height` to stop
  CLS. Hero image is eager and preloaded; everything below is `loading="lazy"`.

## Voice

Warm, plain, specific. Short declaratives. Second person. The practice's own
signage voice: "live a little, smile a lot" and "confidence changes everything."

- Say the concrete thing: "You see Dr. Romans at every visit" beats "patient-centered care."
- **Banned:** state-of-the-art, cutting-edge, compassionate care, world-class,
  passionate about smiles, journey, family-like atmosphere.
- **Never an em-dash.** House rule, no exceptions. Restructure the sentence, or
  use a comma, colon, or full stop.
- Every claim traces to `CLIENT-BRIEF.md`. If it is not in the brief, it does not
  ship. No invented numbers, reviews, ratings, or awards.

---

## Photography

**Eight real photos, and that is the whole library.** Real photography everywhere
except the services grid. Never repeat the same photo twice on one page.

| File | What it actually shows | Use on |
|---|---|---|
| `lifestyle-patient-care-02.webp` | Dr. Romans standing with a young patient in braces holding a Romans goody bag, treatment room | **homepage hero**, braces-for-kids |
| `lifestyle-patient-care-01.webp` | Dr. Romans in loupes working chairside, panoramic x-ray on the monitor | doctor bio, why page, invisalign |
| `team-headshot-dr-romans-03.webp` | Dr. Romans at the reception desk, tighter crop, brand wall behind | meet-the-doctor teaser, dr-romans hero |
| `team-headshot-dr-romans-01.webp` | Same scene, full length, portrait | dr-romans story beat, team |
| `office-reception-02.webp` | Waiting room: wood slat wall, leather sofa, navy desk, brass pendants | why page, financial, contact |
| `office-treatment-02.webp` | Open treatment bay, orange chairs in a row, big windows | services pages, early-treatment |
| `office-signage-01.webp` | Suite D-120 entry, door lockup, tagline on the glass, sidewalk A-frame | contact, locations card, thank-you |
| `office-exterior-01.webp` | Building exterior with monument sign, desert landscaping | contact, location band |

Alt text names the practice and what is happening. Do not describe a reception
photo as a treatment room; the alts are checked at audit.

**Services grid is the one stock exception**, per the brief and the kit. Files in
`assets/services/`, fixed mapping:

| Card | Image |
|---|---|
| Braces for Kids | `svc-kid-visit.jpg` |
| Braces for Adults | `svc-senior-smile.jpg` |
| Invisalign & Clear Aligners | `svc-aligner-adult.jpg` |
| Early Treatment | `svc-early-kid.jpg` |
| Retainers | `svc-retainer.jpg` |
| Airway & TMJ | `svc-sleep.jpg` |

These are kit placeholders and none of them show braces. They are a stopgap:
replace with real Romans patient photos when a shoot happens.

---

## Hard rules carried from the kit

- One `<h1>` per page. Every section gets an `<h2>`.
- Services grid is exactly **6** cards. Reviews, when they exist, 3/6/9.
- Trust bar is the **credential** variant: 4 cells, typography only, **no icons**.
- USP zigzag: 3 rows, alternating sides, real photos, one text-link CTA per row.
- CTA band: 5 lines, **one** button, no photo, no icon, nothing new introduced.
- Forms: 4 fields plus at most one select. **Zero PHI.** Hidden UTM set on every
  form. The only textarea on the site is the contact page's general inquiry.
- Every booking CTA goes to `free-consult.html`. Service pages also keep their own
  `#request` form.
- `noindex, nofollow` on thank-you, privacy, terms, refund-policy, accessibility,
  contact.
- OrthoSync link appears **only** as the secondary option on `free-consult.html`.
- No carousels. No stock humans outside the services grid. No `aggregateRating`
  or `Review` schema.

## Deliberately not built, and why

- **Reviews section and reviews page.** Zero Google reviews exist. A community
  and credentials band stands in on the homepage. Swap in the kit review grid at
  5+ real reviews; the marker comment is in `index.html`.
- **Authority logo bar.** Real credentials exist (ABO board certification, the
  schools, the fellowship) but no official logo files do, and redrawing a
  trademark is banned. The credential trust bar carries top-of-page authority
  instead, which the kit says is the correct either/or. Revisit when official
  assets arrive.
- **The "5,000+ patients" figure.** Withheld, matching the prior build, which
  never published it. A practice open eight weeks cannot claim it at this
  location.
- **Office hours.** Still unconfirmed by the client. Rendered as a visible
  `[CONFIRM]` placeholder, never invented, and never inside JSON-LD.
