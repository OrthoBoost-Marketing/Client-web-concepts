# Homepage Design Brief — Claude Design input

Paste this into Claude Design alongside two files:
1. **`CLIENT-BRIEF.md`** (from `/orthoboost-web:new-site`) — the facts and the brand
2. **The chosen persona `design.md`** — the look and feel

---

## Precedence — read this first

Three inputs, three jobs, and they do not overlap.

| Input | Decides |
|---|---|
| **This brief** | Structure. Which sections exist, what each must contain, how many of a thing may appear, what is factually claimable, accessibility. |
| **`CLIENT-BRIEF.md`** | Facts and brand. Palette, logo, typefaces, photography paths, nav tree, service list, proof numbers, appointment type, and the link to the client's brand assets folder. |
| **Persona `design.md`** | Look and feel. Character, density, tone, imagery mood, motion, copy register, what to avoid. |

Resolving conflicts:

- **Brand values always come from `CLIENT-BRIEF.md`.** If the persona implies a color or a typeface and the client brief names one, the client brief wins without exception. The persona is archetype-level and covers several practices; the brief is this practice.
- **Counts and section rules always come from this brief.** The persona never decides how many services, cards, cells, or rows appear.
- **Everything about how it looks comes from the persona**, within those two constraints.

Where this brief describes a look (for example "dark contrast band"), it is reporting what the kit's own samples happen to do. Treat it as one valid option, never a requirement, and defer to the persona.

---

## What you are building

**One file: `index.html`.** The complete homepage for a practice website.

This page is not just the first page. Thirteen or so sibling pages are built afterward by automated agents that copy this file's header, footer, mobile drawer, sticky bar, and base CSS **verbatim** and are explicitly instructed not to improvise. This file is the reference implementation for the whole site.

### Output constraints (hard)

- **Single HTML file.** One `<style>` block. The only permitted external resource is a Google Fonts `<link>`.
- No CSS frameworks, no external stylesheets, no icon fonts, no JS libraries.
- **Icons are inline SVG with `fill="currentColor"`.** Never emoji, never dingbat characters (they render as broken glyphs cross-platform).
- **Every color, font, space, and radius value must come from CSS custom properties** declared in one `:root` block. This is not a style preference. Thirteen agents copy this file's CSS and extend it; if values are hardcoded per element, each agent re-derives them and the site visibly drifts page to page with nothing able to catch it. A page with zero `var()` references cannot be built on.
- **Layout law:** backgrounds run full-bleed edge to edge, content sits in a centered container capped at `max-width: 1200px`. Never let a grid or text column touch the viewport edge. Verify at 2560px, not just 1440.
- `lang="en"`, viewport meta, unique `<title>` and `<meta name="description">`.
- **One `<h1>` on the page**, in the hero. Every section heading is `<h2>`.
- **No `noindex` on this page.**
- **No form on the homepage.** Forms live on the appointment and service pages. Do not add one.

### Mobile is its own design, not a breakpoint afterthought

- Hamburger drawer that **mirrors the desktop nav exactly**: same items, same dropdowns as accordions, primary CTA pinned at the drawer bottom.
- **Sticky bottom action bar: Call · Book · Directions.** Book is the widest center segment in the brand accent. The bar hides when a form is in view or the keyboard is open. (Roughly 70% of booking intent is after-hours and mobile.)
- **44px minimum touch targets, 8px minimum gaps**, on every nav item, drawer link, and bar segment.
- Top bar collapses to logo + phone icon + hamburger in one row, around 60px.
- `document.documentElement.scrollWidth` must equal exactly 390 at a 390px viewport. No horizontal scroll.

---

## Required token block

Declare these in a single `:root` block. Values are yours; **the names are not.** The agents that build the rest of the site read this block and extend it, so a renamed or missing token means thirteen pages improvise their own.

```css
:root {
  /* brand */
  --brand:          /* primary brand color, the CTA color */
  --brand-ink:      /* darker brand tone, for text on light and dark bands */
  --brand-tint:     /* pale brand wash, for alternating section backgrounds */
  --accent:         /* single accent, used sparingly */

  /* ink */
  --ink:            /* body text */
  --ink-muted:      /* secondary text, labels, captions */
  --ink-inverse:    /* text on dark surfaces */

  /* surface */
  --surface:        /* page background */
  --surface-alt:    /* tinted band background */
  --surface-dark:   /* contrast band background */
  --line:           /* borders and rules */

  /* type */
  --font-display:   /* headings */
  --font-body:      /* body */

  /* type scale, fluid via clamp() */
  --step-h1:  --step-h2:  --step-h3:
  --step-body:  --step-small:
  --leading-tight:  /* headings */
  --leading-body:   /* body */

  /* space ramp */
  --space-1: --space-2: --space-3: --space-4: --space-5: --space-6:
  --section-y:      /* vertical padding between sections, the page's rhythm */

  /* geometry */
  --radius:         /* one value, or -sm and -lg if the direction needs two */
  --container: 1200px;
  --gutter:         /* container side padding at mobile */
  --focus-ring:     /* visible keyboard focus treatment */
}
```

Add tokens freely if the direction needs them. Do not rename or drop these.

Two rules that follow from this:
- **No literal color, font, or spacing values in section CSS.** If a value appears once, it is still a token.
- **`--container` is 1200px** and every content wrapper uses it. Bands are full-bleed, contents are not.

---

## Section order

Header → Hero → Trust bar → Meet the doctor → USP zigzag → CTA band → Authority logos → Reviews → Services grid → Locations → Footer.

The order is the kit standard. Sections may be omitted per the conditions noted below, and the USP zigzag can absorb the meet-the-doctor block when the page runs long, but do not reorder arbitrarily.

---

## 01 · Header

**Fixed**
- Logo top-left, clickable to home. (Center-logo is an approved premium variant, never the default. CTA stays top-right regardless.)
- **Max ~5 nav items.** Typical tree: Services ▾ · Why [Practice] ▾ · Resources ▾ · Locations ▾ (or "Our Address" when single-office). The exact tree is in `CLIENT-BRIEF.md` under Nav; use it verbatim so the sibling pages don't diverge.
- Services dropdown holds the money pages only, the ones ads point at.
- Why dropdown must include **Meet the Doctor**. That is the second most-visited page on a dental site.
- Resources dropdown is patient utility, not acquisition: forms, insurance, FAQ, blog, payments.
- **Clickable `tel:` phone, exactly once** in the desktop header. Utility strip or main bar, never both.
- **One primary CTA, top-right.** Only one. Under-CTA links are reserved for forced patient-service items.
- Main bar (or at minimum the CTA) sticks on scroll. A utility strip never sticks.
- NAP in the header must match the footer and the JSON-LD character for character.

**Banned**
Social icons in the header, no exceptions (they are exit doors placed before the CTA; footer only) · search bar · anything auto-rotating · more than one primary CTA.

**Yours**
Palette, type, logo treatment, CTA wording, phone prominence, whether a utility strip runs at all and what it says, nav label wording, and every visual detail.

---

## 02 · Hero

**The four-questions test (pass or fail).** A stranger must answer all four above the fold in about three seconds: who we are · what we do · why choose us · what to do next. A hero that fails this is wrong no matter how it looks.

**Fixed**
- **H1 formula: Service + City + USP.** Single location puts the city in the H1. **Multi-location uses a brand or metro H1 instead** ("The East Valley's Affordable Orthodontist") because the city H1s belong to the location pages and duplicating them cannibalizes those pages. Check the brief for which case applies.
  - Premium exception: an emotive H1 is allowed when a small-caps kicker carries service and geo and the title tag and H2s carry the keywords.
- **Subhead says something only this practice can say.** One or two sentences: price, tenure, volume, method, or logistics. If a competitor could paste it verbatim, it is wrong.
- **One solid primary CTA**, message-matched to the header CTA. The secondary is visually quieter, phone by default.
- **Proof sits near the CTA or in the trust bar directly beneath.** One of the two, always. Real numbers only.
- **Real photography.** Priority: doctor with patient demonstrating the service, then doctor portrait, then patient after-state, then staff with patient. Subject's gaze angled toward the headline.
- Mobile stacking order: H1 → sub → CTA and proof → photo. CTA visible without scrolling. Hero no taller than about 100vh.
- The hero image is the LCP element: WebP or optimized JPG, 200KB or less at display size, never lazy-loaded, preloaded.

**Banned**
Carousels or sliders · stock humans · AI-generated "patients" · headline over busy imagery with no scrim · two competing solid CTAs · autoplay with sound · vague headlines ("Welcome to our practice") · any badge claiming a number the practice cannot prove.

**Yours**
Two-column, full-bleed video, and editorial-split are all approved patterns and the choice is yours. Composition, type scale, how proof is presented, everything visual.

*If you choose video:* ambiance only, never carrying the message. Muted, looped, no controls, poster set, 4MB max, 10 to 20 seconds, **static poster only on mobile**, scrim behind text, AA contrast on every word.

---

## 03 · Trust bar

**This section is conditional.** Pick the variant from what the brief actually supports:

| Practice situation | Variant |
|---|---|
| Established, real numbers | Stat bar (volume, reviews, tenure, locations) |
| Method or philosophy-led | USP descriptor bar (bold title + one line each) |
| Brand new, no numbers yet | **Credential bar** (board cert, training, provider tier, memberships) |
| Nothing distinctive | Skip it entirely, but the proof must appear somewhere else on the page |

**Fixed**
- **3 to 5 cells, maximum.** One line of hierarchy per cell.
- Only claims a competitor could not run verbatim. Every number true, verifiable, client-confirmed. Review counts must match the live Google profile exactly.
- **Typography only, no icons.** An icon grid above stats is the single most recognizable generic-AI tell. The numbers are the visual.
- Mobile: 4 cells become 2×2, 3 cells stack. Never a horizontal scroller. Band no more than about 40% of the viewport.
- No `aggregateRating` schema on these numbers. Display them, do not mark them up.

**Banned**
Generic virtues ("compassionate care", "state-of-the-art") · icon grids · invented or padded numbers · more than 5 cells · count-up animations that delay readability.

**Yours**
The band treatment, type, and hierarchy. The kit samples use a contrast band as the break after the hero; that is one option, not a rule.

---

## 04 · Meet the doctor

Teaser only, not the bio. It feeds the doctor page.

**Fixed**
- **H2, never H1.** Benefit-led or name-as-headline.
- Two to three sentences in human language. The doctor's thesis or story, written like a friend introducing them. No CV-speak.
- Three to six scannable, checkable credentials. Pair acronyms with plain language.
- **Exactly one CTA, ghost or outline style.** Never a second solid booking button; the page's primary CTA stays unique.
- **Numbers here must match the trust bar verbatim.** If credentials already ran in a credential-style trust bar, do not repeat them; let this section carry warmth instead.
- Doctor's full name appears in the heading or kicker **and** in the image alt.
- Layout follows the available asset: strong portrait → split section · talking video → single column, centered, nothing beside it · 2 to 3 doctors → cards with **one shared CTA**, never per-card buttons · 7+ doctors → skip individuals entirely.

**Banned**
Full CV dump · degree soup with no human line · no photo, stock photo, or clip-art team graphic · second solid CTA · sound-on autoplay · uncaptioned video.

---

## 05 · USP zigzag

The middle-of-page tour of what only this practice can claim.

**Fixed**
- **2 to 4 rows.** Two-column, alternating sides is the default because it keeps a long page scannable.
- Row anatomy: H2 claim → two to three sentences **or** up to three bullets → contextual CTA, usually a single line of linked text rather than a button.
- **Every row passes the competitor paste test.** If another office could run the same H2, sharpen it.
- **Row CTAs deep-link to the proof page** and are the homepage's internal link structure: pricing row → the financial page, reviews row → reviews, locations row → locations, service row → that service page. Descriptive anchor text.
- **Never "Book now" on a zigzag row.** Booking lives in the header, hero, and CTA band.
- Affordability-positioned practices get a mandatory pricing row.
- **Real office photos only, and vary the subject per row** so the rows together read as a walk through the practice. One stock image poisons the premise.

**Banned**
Stock photography · generic claims · icon decorations on rows · more than 4 rows · paragraph walls · same-side image on every row with no reason.

**Yours**
Whether to zigzag at all, band tinting, image treatment, row rhythm.

---

## 06 · CTA band

The mid-page re-ask. **Nothing new is introduced here.**

**Fixed**
Five lines, nothing more:
1. Optional logo, only if legible on the background
2. Headline restating the page's core promise, as a question or a plain imperative
3. Logistics sub, one to two lines: offer plus city. Nothing else.
4. **One solid button**, same action and destination as the header and hero CTA
5. Stop

**Banned**
Two buttons (even a phone secondary sits out; the mobile sticky bar covers calling) · any offer or claim that did not already appear above · photos, icons, decoration · forms · **illegible** logo lockups on dark backgrounds.

> The logo is line 1 of the anatomy, not decoration. "Photos, icons, decoration" means decorative elements *other than* the mark. The only logo constraint is legibility: a dark mark on a dark band becomes a typographic wordmark or is dropped, and a light or reversed mark on a dark or brand band is explicitly approved.

**Yours**
Full-bleed band or floating card, both approved. Color, type, register. The floating card exists precisely for when the brand's logo deserves the spotlight.

May repeat once near the page bottom above the footer. Twice per page maximum.

---

## 07 · Authority logos

Optional but strongly recommended when real credentials exist. If the practice has genuine media features, it is a must.

**Fixed**
- **4 to 7 logos, one line**, with a small quiet label.
- **Only genuinely held, current credentials.** Provider tiers must match reality. "As seen in" requires an actual feature. Expired memberships come down. One fake poisons all of them.
- **Official logo files only, untouched.** No redrawing, stretching, or recoloring beyond a uniform grayscale mute.
- Do not run this adjacent to a credential-style trust bar. One or the other carries authority.
- Mobile: wraps to two rows, logos at least 28px tall. Never a scroller or marquee.

**Yours**
Muting approach and band treatment. Muting all marks to one tone is the kit default for cohesion, not a requirement.

---

## 08 · Reviews

**Fixed**
- **Grid, never carousel. 3, 6, or 9 cards.** Static. Sliders get about 1% interaction.
- **Verbatim real Google reviews.** Trim length with an ellipsis, never rewrite. Names as displayed on Google. If the brief has no quotes, ship a visible placeholder and flag it. Never write one.
- Card anatomy: stars → 30 to 70 words → name. Stock-photo avatars are banned; use initials or nothing.
- **Localized heading** ("What [City] families are saying"). City-specific proof converts markedly better.
- Mix the angles: six cards should do six different jobs (price story, anxious patient converted, emergency save, results, kindness, loyalty). Reviews that echo the page's USP claims make the page audit itself.
- A "read more reviews" door beneath. Include a count line **only if the count is impressive**; omit it when weak.
- **No `aggregateRating` or `Review` schema on Google-sourced reviews.** Marking up third-party reviews on your own site is self-serving and a manual-action risk.
- Mobile: single column, three to four cards then "show more".

---

## 09 · Services grid

**Fixed**
- **3, 6, or 9 cards only.** Never 4, 5, 7, or 8. Never more than 9. Orthodontists typically 3 to 6, holistic and general up to 9. The count is in the brief.
- Card = image + clickable H3 linking to that service page + two sentences. **Whole card clickable. No dead-end cards.**
- **Searchable service names as H3s** ("Invisalign®", "Emergency Dental Care"). The patient's word may lead with the clinical term in parentheses. No clever unsearchable names.
- Image shows the service concretely: kids' braces means a kid in braces, adult aligners means an adult holding one. Uniform aspect ratio.
- **This is the one and only section where stock or AI imagery is permitted.** Everywhere else on the page it is banned.
- One cell may become a mini-CTA card ("Not sure where to start?") at position 6 or 9 when services run short.

---

## 10 · Locations

The homepage NAP anchor and the target of the header's "Our Address" link.

**Fixed**
- **NAP identical** to the footer, the Google Business Profile, and the JSON-LD, character for character.
- **"Get directions" is the primary action**, a solid button to the Google Maps directions URL.
- Include a landmark line in the address, since that is how locals actually navigate.
- Real Google Maps embed, lazy-loaded.
- Pattern by count: **1 office** → info card plus map · **2 to 3** → one identical card per office, each with its own phone and hours, two doors per card (city page and directions) · **7+** → one regional map with pins plus a "find your nearest office" button.
- Localized heading.

---

## 11 · Footer

**Required on every client footer**
Logo · one-sentence brand blurb (service + city + doctor) · services links · NAP · office hours · contact link · socials (their one approved home) · legal bar with © year, Privacy Policy, Terms, and **Web Accessibility Statement**.

**Fixed**
- The `LocalBusiness` JSON-LD lives here in code. Build it **only from facts in the brief**. If the brief has no geo, no areaServed, or no hours, **omit those properties**. Never supply them from general knowledge; invented data inside structured markup is a factual claim submitted to Google.
- Multi-location gets one NAP block per office, each with its own phone.
- Use a founding-year range in the © ("© 2004–2026") when tenure impresses. It is a free tenure claim.
- Column count scales: small site three columns, full site four.
- Mobile stacks brand → next steps → services → legal.

---

## Truth rules that override everything

These apply to every element on the page and are not negotiable by design direction.

1. **Never invent a number.** Ratings, review counts, patients treated, years in practice, prices, credentials, awards. All of it comes from `CLIENT-BRIEF.md` and gets verified with the practice.
2. **If the brief lacks something a section requires, ship a visibly obvious placeholder** (`[REVIEW QUOTE NEEDED]`) and list it. A plausible-looking fake is far worse than a visible gap.
3. **Real photography everywhere except the services grid.** No stock humans on a healthcare site.
4. **Use only image paths the brief actually supplies.** If an asset is named but has no path, or the file is not on disk, leave the slot out and flag it. Never link a missing file, never silently substitute.
5. **No carousels anywhere on the page.**

---

## Before handing off

- Render at 2560 and 1440 and confirm content is contained and bands are full-bleed.
- Confirm `scrollWidth` equals 390 at a 390px viewport.
- Confirm every nav, drawer, and sticky-bar tap target is at least 44px.
- Confirm every in-page `#anchor` has a matching `id`.
- Confirm the `:root` token block exists and that section CSS references it rather than literal values.

That last one is what makes the rest of the site buildable.
