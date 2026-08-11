# DESIGN.md: Chang Orthodontics

The shared design contract for `concept-a/`. Every page copies the header, footer, mobile sticky
bar, and container rules from `index.html` verbatim. Change them here first, then propagate.

Brief: `../CLIENT-BRIEF.md` · Structure: Dr. Ty's homepage blueprint · Voice: **Dr. Yang** ·
Visual system: derived from the supplied design primitive (2026-08-11).

**This replaces the previous "clinical instrument" contract entirely.** Nothing from the earlier
Archivo Black / Hanken Grotesk system carries forward. `site.css` was deleted with it; this concept
is a single self-contained HTML file.

## The four authorities

| Decides | Source |
|---|---|
| Structure, section order, counts | **the live kit at orthoboost-website-kit.vercel.app** — the 5 sample homepages are the source of truth, above the written specs |
| Facts, brand, palette, photos | `../CLIENT-BRIEF.md` |
| Look and feel | the supplied primitive |
| Copy register | Dr. Yang persona |

Where they disagree: brand values come from the client brief, counts come from the blueprint,
everything visual comes from the primitive, and every sentence is checked against Yang.

## Palette

| Token | Hex | Use |
|---|---|---|
| `--brand` | `#005DAA` | primary: links, icon glyphs, hover state on solid buttons, mobile Book segment |
| `--brand-ink` | `#003B6E` | solid buttons, dark bands, footer ground |
| `--brand-tint` | `#EEF6F8` | tinted section bands, icon chips, stat tiles |
| `--surface` | `#F9FAFA` | page ground |
| `--surface-step` | `#DCEAF2` | photo frames, the step between tint and white |
| `--accent` | `#3E90CE` | reserved; large text and UI only, never body |
| `--ink` | `#1b1c1c` | headings and body |
| `--ink-muted` | `#434653` | secondary body |

`#8FC3E8` is the on-dark accent (icon glyphs and links on `--brand-ink`). The page sits on a
`#96A3AC` neutral so the white sheet reads as a card. **The navy is the client's, not the
primitive's teal.** Do not reintroduce `#14657a`.

Contrast, measured: `--ink` on `--surface` 15.9:1 · `--ink-muted` on `--surface` 9.1:1 · white on
`--brand-ink` 11.6:1 · white on `--brand` 6.7:1. All pass at the size used.

## Type

- **Display** (`.font-display`): **Instrument Serif**, weight 400, `font-light` `tracking-tight`
  `leading-none`. Carries the H1, every H2 and H3, the stat figures, and the trust-bar terms.
  It is the whole personality of this direction, so it runs large and never bold.
- **Body**: **Inter** 400 to 700, in **three tiers, largest first**. Uniform body size across a
  long page reads flat, so the hierarchy is explicit:

  | Class | Size | Used on |
  |---|---|---|
  | `.lede-hero` | 23px (20px under 640) | the hero subheadline only, the largest body text on the page |
  | `.lede` | 20px (18px under 640) | section ledes under an H2 |
  | `.copy` | 18px | body paragraphs, zigzag copy, card copy. This is Dr. Ty's floor, never go under it |

  Never set body copy with a bare Tailwind size. Use one of the three classes so the tiers stay
  consistent when pages are copied.
- **Labels**: Inter 600, uppercase, `tracking-[0.18em]`, 12px.
- Scale: H1 `text-5xl`/`sm:text-6xl`/`lg:text-7xl` · H2 `text-4xl`/`sm:text-5xl`/`lg:text-6xl` ·
  H3 `text-3xl` · body 18px · small 14px.

**No eyebrow labels.** The headline leads every section. The primitive used solid navy pills above
each heading; they were removed because Dr. Ty's blueprint carries a standing OrthoBoost rule that
overrides any design default here. Do not reintroduce them.

## The H1

Two lines, deliberately. Line one is the service and the city at full size; line two is the
differentiator at `text-[0.64em]` on its own `block` with `leading-[1.08]`, which lands around 46px
against a 72px first line. The em unit means it tracks the H1 clamp at every breakpoint. Keeping the
clause on its own smaller line stops a three-line headline reading as one long run-on and lets the
city hold the largest type.

## The accent system

`.hl` sets `--brand` on an inline span. It marks **names, places, and value words** and nothing
else: the city in a headline, the doctor's name, a proof number, a credential. Never a full
sentence, never a verb phrase, and never more than two marks in one heading. Pair it with
`font-semibold` inside body copy so the colour is not carrying the emphasis alone.

Currently marked: "San Carlos" and "UCSF clinical professor" in the H1, "Dr. Michael Chang" and
"10,000 patients" in the hero lede, "Michael Chang" in the doctor heading, "UCSF" and "San Carlos"
in his bio, "San Carlos" in the reviews and locations headings, "100 five-star reviews", and
"children, teens, and adults" in the services heading.

## Geometry, elevation, motion

- **Container is `max-w-[1200px]`.** Dr. Ty's Tier 5 names 1200px explicitly; Tailwind's `max-w-7xl`
  is 1280px and reads as a pass until you check the number. Bands are full-bleed, content is
  contained. The page itself has no outer cap and no sheet shadow: it runs edge to edge on
  `--surface`, so there are no grey margins on wide screens.
- Radius: `2rem` on panels and bands, `1.5rem` on framed photos, `1.5rem`/`rounded-3xl` on cards,
  `0.75rem` on buttons, `full` on pills and the header CTA.
- Three shadows only: `--shadow-chip` (resting chips and small cards), `--shadow-card` (cards and
  panels), `--shadow-deep` (the page sheet, hero photo frame, dark feature cards).
- **The hero photo's shadow falls into the section below it.** Two things make that work and both
  are easy to undo by accident: the hero section must **not** carry `overflow-hidden`, which clips
  the shadow at the section edge, and the following section must carry **no background of its own**,
  or it paints over the shadow as a later sibling. Meet-the-doctor therefore has no `bg-*` class and
  inherits the page sheet. Any new section placed directly under a `--shadow-deep` element needs the
  same treatment.
- Motion is GSAP + Lenis: mask-reveal on every heading (`data-mask-reveal`), fade-and-rise on
  `data-reveal`, 3D tilt on `data-card`, magnetic pull on `data-magnetic`.
  `prefers-reduced-motion` disables all of it and forces content visible.

**Reveals fail open.** The hidden state lives under `html.js-armed`, which the page's own script
adds, and a 2s timer force-reveals anything still at `opacity:0`. Never write the hidden state as
an unconditional CSS rule: a context where ScrollTrigger does not fire would ship a blank page.

## Section order — taken from the kit's own sample homepages

**Where the written spec and the kit disagree, the kit wins.** Two conflicts were resolved by
reading all five samples (Marlowe, BrightWay, Maple Grove, Sage & Stone, Wild Smiles):

1. **Reviews come BEFORE service cards.** `SKILL.md` numbers services 8 and reviews 10; every one
   of the five samples runs reviews then services. The kit order is used here.
2. **There is no closing CTA.** Only BrightWay has one (`.final-cta`); the other four go straight
   from locations to the footer, which matches the spec calling it "good practice" rather than
   required. Omitted. Do not add one back without a stated reason.
3. **The authority strip is typographic.** Every sample runs one and it contains **zero images and
   zero SVGs** — Marlowe's is plain wordmarks. So the absence of official logo files is not a reason
   to skip it, and the earlier omission was wrong. It also runs directly alongside a
   credential-style trust bar in the samples, which the written spec discourages and the kit does
   anyway.

1. **Header** — logo · nav (4 groups, 3 as dropdowns) · phone rendered big · one primary CTA
2. **Hero** — authority image · headline · subheadline · one CTA (the second is phone only).
   **The hero image is always the doctor together with a patient.** Standing Dr. Ty rule; verify
   the photo by eye, because `CLIENT-BRIEF.md` mislabels `chang-patient-01` as "doctor with
   patient" when it is the patient alone. Chang's hero is `chang-community-01`.
3. **Proof band — lives inside the hero, not as a separate band below it.** Jules's call,
   2026-08-11: the strip sits in the hero column, so a second band underneath was redundant.
   It still satisfies spec 2A, which allows proof "near the CTA **or** in the trust bar directly
   beneath". Exactly three verified points, each an icon, a bold line, and a sub-line, divided by
   hairline rules. **Every line is `whitespace-nowrap`** — the spec requires text that never wraps,
   and the first attempt wrapped its sub-lines and read as ragged.
4. *(Locations map — multi-location only. Chang is a single office, so this step is skipped and
   location is answered at step 9.)*
5. **Meet the doctor**
6. **USP zigzag** — 3 alternating blocks, each a real office image, one differentiator, its own CTA
7. **Mid-page CTA band** — after the zigzag, before the service cards
8. **Authority strip** — real marks where they exist, muted to grayscale at 60% opacity and
   restored on hover. Invisalign and the University of California, San Francisco ship as
   public-domain SVGs in `assets/logos/`; the American Board of Orthodontics has no obtainable
   official file and stays typographic. Provenance and the open sign-off item are in
   `assets/logos/SOURCES.txt`. **Never redraw or approximate a mark.**
9. **Reviews** — grid, 3 across, with a Read more reviews link
10. **Service cards** — 6, each with an image, heading, one-line tease, and a Learn more link,
    ordered most-visited first (braces and Invisalign are the ad destinations)
11. **Locations** — address, map, hours, phone. The office photo trio lives here because it answers
    "where are you"; it is not a standalone gallery section
12. **Footer**, whose groups mirror the header nav exactly. No closing CTA, per the kit.

The proof band's three points are **10,000 patients · 15+ years · UCSF clinical professor**.
Board certification and the Platinum Plus tier are carried by the authority strip instead, so
nothing is claimed twice. Meet-the-doctor restates credentials in its ledger; the proof band is the
canonical three and nothing may contradict it.

**Section headers are one pattern everywhere:** headline, then the lede directly beneath it, both
left-aligned and both capped around `max-w-2xl`. Reviews originally floated its lede to the right
while services put it underneath, and the inconsistency was visible. Do not reintroduce a
right-hand lede.

**The doctor section uses a hairline ledger, not cards.** Four rows of label-left / value-right
separated by `border-b border-black/10`. The earlier treatment was four boxed pills in a 2×2 and
read as clutter against a page that otherwise separates with rules and space.

## Voice (Dr. Yang)

Declarative, exact, unhurried. State the fact and stop. Short sentences, numerals over words.

- **No em-dashes anywhere.** Commas, colons, or a full stop.
- No urgency, no discounts, no exclamation marks, no "state-of-the-art" or "compassionate care".
- Say "free consultation", never "free exam" and never an invented offer name.
- Never advertise in Spanish. Never mention Medicaid. Never reference a down payment. Never claim
  0% interest.
- Never round a number up, and never print an overall star rating: the client record counts
  five-star reviews and does not state an average.

## Component rules

- Every booking CTA routes to `appointment.html`. **No form on the homepage.**
- One H1 per page, H2 per section.
- Services grid is **6**, whole-card links, searchable H3 names, each with an image.
- Body copy is **18px** and every lede is **20px** (`.lede`). That floor is Dr. Ty's, not a
  preference.
- Reviews are a **grid of 3**, never a carousel, and ship as visible placeholders until verbatim
  Google quotes are supplied. **Never write a quote.**
- No carousels or auto-rotating anything, anywhere. The primitive's insurance marquee was dropped.
- Real photography only. There is no stock on this page.
- Header nav, buttons, the mobile bar and in-copy CTAs clear **44px**. **Footer link lists do not**:
  they follow the kit at 15px with 5px vertical padding, about 32px per row. Forcing 44px there
  inflated the footer rhythm badly, and Dr. Ty's 44px rule names nav items, drawer links and bar
  segments, not footer lists. Verified at 390px, where `scrollWidth` is exactly 390.
- NAP is identical in the location card, the footer, and the JSON-LD, character for character.

## Assets

`assets/` holds the 11 approved originals; `assets/web/` holds 480/768/1200/1800 WebP plus
`manifest.json`. Ship `srcset` + `sizes` + explicit `width`/`height`. Ratios: `0.75` → 1200×1600 ·
`1.3333` → 1200×900 · `0.6654` → 1200×1803. The hero photo is the LCP element and carries
`fetchpriority="high"` with a matching `<link rel="preload">`.

**Crops are set per photo, not globally.** The doctor portrait is 1200x1803 in a landscape-ish box,
so it needs `object-cover object-[62%_22%]` at `h-[26rem] sm:h-[34rem]`; centre-cropping it puts the
ceiling in frame and cuts his head. Check any new portrait at 1440 and 390 before accepting the
default `object-center`.

## Known gaps this design works around

- **No review quotes exist.** Three marked placeholders ship. This is the build's hard blocker.
- **Credential logos: two of three obtained.** Invisalign and UCSF are real public-domain files.
  The ABO mark is not available anywhere public and must come from the client or abortho.org.
  The UCSF mark still needs sign-off: the file is public domain, but universities restrict
  third-party use and a logo can read as institutional endorsement rather than a faculty post.
- **No service-specific photography.** The blueprint names text-only service cards as the single
  most common miss, so all six cards carry a real practice photo. With only ten approved images,
  two are reused from elsewhere on the page (the patient photo on Braces, the community photo on
  Early orthodontics). Stock is permitted in this section only, and would fix the repetition.
- **No exterior photo**, so the location section leans on the map.
- **No staff names or headshots**, so no individual is named anywhere except Dr. Chang.
- **No founding year**, so the footer prints a single © year.

## Open pre-launch items

- **`noindex` is deliberate** on this public preview so it cannot compete with the client's live
  site at the canonical URL. `audit-site.mjs` flags it as a Tier 3 failure every run. That finding
  is expected here and must be resolved by removing the tag at launch on the real domain.
- **The CDN stack is preview-only.** Tailwind, Iconify, GSAP, Lenis all load from CDNs, which
  Dr. Ty's output spec forbids (one `<style>` block, Google Fonts as the only external resource).
  Before launch: compile Tailwind, inline the icons as SVG, and self-host or bundle the motion
  libraries.
- Google Fonts are render-blocking. Self-host both families before launch.
- No OG image (needs 1200×630) and no favicon set.
