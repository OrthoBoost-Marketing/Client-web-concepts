# DESIGN.md — Romans Orthodontics, concept C

The client picked concept C on 2026-08-11. **`index.html` in this folder is the
design authority.** This file describes what it already does so that sibling
pages match it; where this file and the built homepage disagree, **the homepage
wins** and this file is wrong and should be corrected.

Facts, copy claims, assets and proof come from `../CLIENT-BRIEF.md`. Structure
and cardinality come from the kit specs in the `build-site` plugin. This file
covers only the third thing: the look, and the chrome contract.

---

## Do not touch

- **Never edit `index.html`.** It is client-approved. It is the sibling every
  page copies chrome from, not a page to revise.
- **Never run `../concept-c-src/build.mjs`.** It exits 0 and silently reverts
  two audit fixes that live only in the built output — the async font loading
  in `index.html` and the `.psp-linkarrow:after` 46px tap-target in
  `design-system.css`. Flatten is one-way. This folder is the source of truth.
- **Never touch `../concept-a/` or `../concept-b/`.** Losing concepts, frozen.

---

## Tokens — read them, do not retype them

All design tokens live in `design-system.css`, which every page links. **Take
values from that file.** The brief's prose has been wrong about them before.

| Token | Value | Note |
|---|---|---|
| `--brand` | `#a05c39` | copper. **Not `#A6613C`** — that failed WCAG AA on every CTA |
| `--brand-ink` | `#6e3d21` | link hover |
| `--brand-tint` | `#efe6da` | |
| `--accent` / `--ink` / `--surface-dark` | `#264653` | slate |
| `--ink-muted` | `#264653d9` | 0.85 alpha. 0.72 failed AA on body copy |
| `--surface` | `#faf6f1` | paper |
| `--surface-alt` | `#efe6da` | |
| `--radius` | `0` | **brand-invariant. No rounded corners anywhere.** |
| `--container` | `1200px` | |
| `--tap` | `46px` | minimum touch target |

**No shadows. No gradients. No border radius.** These are identity, not taste,
and the flatten brand-lock exits 2 on override.

**Type:** Fraunces (display, weight 400) · Archivo (body) · IBM Plex Mono
(eyebrows, ordinals, captions, `letter-spacing: .1em`, uppercase). Loaded via
the async Google Fonts block in `index.html`'s `<head>` — **copy that block
verbatim**, including the `preload`, the `media="print" onload` swap and the
`<noscript>` fallback. It is a deliberate LCP fix.

---

## Chrome contract — copy verbatim from `index.html`

Copy these byte-for-byte. They are what makes 19 pages read as one site.

1. **`<head>`** — the async font block, `design-system.css` link, favicon set
   (`../assets/romans-orthodontics-favicon-48.png`, `-icon.svg`,
   `-apple-touch-icon-180.png`). Change only `<title>`, `<meta description>`,
   and the JSON-LD.
2. **The inline `<style>` block** (~26KB, the `roc-` component layer). Copy
   whole. Add page-specific CSS *after* it, never edit inside it.
3. **`<header>`** — logo lockup, desktop nav, `.psp-drawer__trigger` mobile
   drawer. Mark the current page's nav item `aria-current="page"`.
4. **`<footer>`** — three columns (Treatments / Practice / Visit), NAP, legal
   row. **One documented change, see below.**
5. **The sticky bar** — `.psp-stickybar.roc-sticky`, three cells: Call ·
   Book a consultation · Directions.
6. **Both inline scripts** — the drawer toggle, and the reveal observer.

### Two things in the reveal script that must survive

Carried over from `concept-c-src/README.md`, both learned the hard way:

- **The observer fails open.** Content is visible by default; the hidden state
  is armed only once the script runs, and everything is forced visible after
  1.2s if `IntersectionObserver` never reports.
- **The clip-path goes on `.roc-wipe`'s child, never on `.roc-wipe` itself.**
  Chrome clips an observer target's intersection rect by its own `clip-path`,
  so a self-clipped element reports ratio 0 forever and never reveals. Shipped
  that way once and all five media blocks were permanently invisible — and the
  fail-open timeout does not catch it, because the plain `.roc-anim` elements
  do fire, so the fired count is never 0.

### RATIFIED 2026-08-11 — the `#locations` anchor

The homepage nav and drawer link "Our Address" to `href="#locations"`. That
section exists **only on the homepage**, so on any sibling page it is a dead
anchor — two of them, nav and drawer.

**The rule: on every sibling page, rewrite both occurrences to
`href="index.html#locations"`.** Two page-builders hit this independently and
both chose this fix; it is now the standard, not a per-page judgement call.
The homepage itself keeps the bare `#locations`.

### KNOWN GAP — the nav omits a service

The approved nav's Services dropdown lists **five** treatments and omits
**Airway & TMJ**, which is the sixth service and has its own page. So
`airway-tmj.html` is reachable from the footer but not the nav, and no nav item
can carry `aria-current="page"` on it. Sibling pages put `aria-current` on the
footer link instead.

Fixing the nav means editing the approved homepage, so it is **pending Jules's
approval** alongside the footer patch below. Do not fix it unilaterally.

### Build artifacts do not ship

Verification screenshots and harness files (`*.png`, `harness-*.html`) must not
be left in `concept-c/`. Write them to the scratchpad, or delete them before
reporting. Use a page-unique prefix if you do write them here — two builders
collided on `v1440.png` already.

### The one deliberate divergence from the homepage footer

The homepage footer predates two pages. Sibling pages ship an **extended**
footer:

- Add `<a class="roc-footer-link" href="reviews.html">Reviews</a>` to the
  **Practice** column, after "Our Team".
- Add `<a class="roc-legal-link" href="refund-policy.html">Refund Policy</a>`
  to the legal row, after "Terms".

Everything else identical. The homepage needs the same two lines to match —
that patch is **pending Jules's approval** and is tracked in the handoff.

---

## Voice

Plain, specific, unhurried. Concrete beats aspirational. The homepage's own
headings are the register to match:

> "One orthodontist, start to finish." · "Every age, one office" · "Your
> insurance, checked while you sit there" · "Ground level, parking at the
> door" · "Ready to come & say hello?" · "Six treatments, one practice."

Short declaratives. Ampersands in headings. A named, checkable detail rather
than a virtue claim — "ground level, parking at the door" instead of
"convenient location". No exclamation marks. No "state-of-the-art", "passionate
about smiles", "your journey", "we're excited to". Sentence case throughout;
this is not a Dr. Joe all-caps persona.

**Em dashes:** the homepage body copy has none, deliberately. Keep it that way.

---

## Assets — real paths only

`assets/web/` (referenced as `../assets/web/…`) is the processed set. **It is
richer than the brief's table**, which lists only 8 files and is out of date:

| File | Use |
|---|---|
| `hero-dr-romans-office-wide.webp` / `-tall.webp` | homepage hero pair, already in use |
| `dr-romans-with-patient.webp` | **doctor-with-patient — the required hero shot** for `dr-romans.html`, `why-romans.html` |
| `hero-dr-romans-reception.webp` | secondary hero |
| `office-reception.webp`, `office-treatment-bay.webp`, `office-suite-entrance.webp` | zigzag rows, contact |
| `svc-braces-for-kids.webp`, `svc-braces-for-adults.webp`, `svc-invisalign.webp`, `svc-early-treatment.webp`, `svc-retainers.webp`, `svc-airway-tmj.webp` | one per service page hero — matches the six services exactly |

Also: `../assets/affiliations/` has `abo-board-certified-seal.png`,
`aao-member.png`, `invisalign.png` — the only three authority logos that exist.
The kit wants 4–7; **ship 3 rather than inventing a fourth.**

`../assets/services/*.jpg` is the stock set, permitted **only** in the services
grid.

**Rules:** real photography everywhere except the services grid. Never a stock
human elsewhere. Every image needs explicit `width`/`height` and descriptive
`alt`. No image appears twice on one page. If a layout slot has no real photo,
**drop the slot** — do not substitute stock and do not ship a broken `src`.

---

## Proof — the hard limits

- **Six real Google reviews**, verbatim with attribution, in `../CLIENT-BRIEF.md`.
  Use those exact strings. Never write, trim to change meaning, or invent one.
- The sixth (Dr. Jacob Shelley) is a **peer review from a fellow orthodontist,
  not a patient.** Label it as such wherever it appears.
- **No rating, no review count, anywhere.** Neither has been read off the live
  profile. No `AggregateRating`, no `Review` schema — Tier 1 blocks it, and
  marking up third-party reviews on your own site is a manual-action risk.
- **Trust bar is credential-based**, not review-based. Match the homepage's.
- "5,000+ patients" is client-held and approved. Do not round it up.
- Credentials: **DMD, MSD, board-certified.** Not DDS.
- Years: "5 years in practice", and the approved verbatim quote *"more than 7
  years dedicated to orthodontics, including advanced specialty training."*
  Never headline the number — the 5 vs 7+ vs 5,000+ framing conflicts.

---

## Forms

≤5 fields, **zero PHI**. Name, email, phone, "who is this for", plus hidden
`utm_source` / `utm_medium` / `utm_campaign` / `gclid` / `fbclid`. No health
questions, no free-text "tell us about your smile". The **only** exception is
`contact.html`'s general-inquiry message box.

Every form posts to a **`TODO:` placeholder action** and redirects to
`thank-you.html`. The GoHighLevel webhook URL is not available yet; wiring is
Phase 7 via `orthoboost-ghl-forms` + `orthoboost-leads-connect`. Do not invent
an endpoint.

Every booking CTA routes to `free-consult.html`. The OrthoSync scheduler
(`https://app.orthosync.ai/online-scheduling/id/94119461-6e1b-4e48-93be-d20db6f346ad`)
appears **only** as a secondary link on `free-consult.html` — never in nav,
never on another page.

---

## Practice facts — character-identical everywhere

```
Romans Orthodontics
3618 W. Anthem Way, Suite D120, Anthem, AZ 85086
(623) 320-1222   tel:+16233201222
hello@romansorthodontics.com
```

**Hours are unknown.** Ship a visible `[CONFIRM: office hours]` placeholder and
**omit `openingHours` from JSON-LD entirely.** Never guess one.

Single office ⇒ **no location pages**, and the homepage is the location page.
Every page's H1 may use "Anthem" — never a metro or multi-city framing.

---

## SEO

- One H1 per page, H2 per section.
- `noindex` on: `thank-you`, `privacy`, `terms`, `accessibility`, `contact`,
  `refund-policy`. **Also on every page in this folder while it is a preview**
  — `index.html` already carries it, so a preview must not compete with the
  client's live domain. Removing it is a launch step, not a build step.
- JSON-LD per page type: `LocalBusiness` (homepage, contact), `AboutPage` →
  `Physician` (`dr-romans`), `FAQPage` where a FAQ section runs, `Dentist` only
  on `reviews.html`. Facts from the brief only, and no `openingHours`.
- The legacy site's URLs need 301s at launch: `/about-us` `/treatments`
  `/early-treatment` `/teen-treatment` `/adult-treatment` `/clear-aligners`
  `/clear-braces` `/metal-braces` `/how-to-get-started` `/contact-us` `/faq`
  `/terms-conditions` `/privacy-policy` `/refund-policy`
  `/accessibility-statement`. Tracked in the handoff, not built here.

---

## Page inventory — filenames are fixed by the homepage's own links

`index.html` already links 15 siblings. **These filenames are not negotiable**;
a rename creates a dead link on the approved homepage.

**Money:** `braces-for-kids` · `braces-for-adults` · `invisalign` ·
`early-treatment` · `retainers` · `airway-tmj` · `free-consult` · `why-romans`
**Trust:** `dr-romans` · `team` · `reviews`*
**Support:** `financial` · `contact` · `thank-you`* · `privacy` · `terms` ·
`refund-policy`* · `accessibility`

\* not linked from the approved homepage — see the footer divergence above.
`thank-you` is correctly unlinked (it is a redirect target).

**No standalone FAQ page.** FAQ runs as a six-question section on service
pages, per the brief's inventory and the homepage's nav.
