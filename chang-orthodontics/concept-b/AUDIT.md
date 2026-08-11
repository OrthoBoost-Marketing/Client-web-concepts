# Chang Orthodontics · Concept B · Audit Record

Date: 2026-08-11 · Page audited: `concept-b/index.html` (homepage only)
Standard: the Gate 4 tier table in `practice-site-primitives/WORKFLOW.md`
Mechanical half: `scripts/audit-site.mjs --dir concept-b --brief ../CLIENT-BRIEF.md`
Browser half: Playwright/Chromium at 1440x1000 and 390x844

> The reference audit record is a Claude Design artifact that cannot be opened from this machine:
> WebFetch is intercepted by the context-mode hook, the Chrome extension is disconnected, and the
> in-app browser is not signed in to claude.ai. Its source file is not on disk or in any repo either.
> This record is therefore written against the **Gate 4 tier table in `WORKFLOW.md`**, which is the
> same standard, including its `Blocks` / `Before handoff` status vocabulary. Reshape the presentation
> if the artifact differs; the checks themselves are against the authoritative table.

---

## Gate 4 result

**Tiers 1 to 4 clear. Gate 4 passes.**

| Tier | Covers | Status | Result |
|---|---|---|---|
| 1 | Truth and legal | Blocks | **clear** |
| 2 | Structure and cardinality | Blocks | **clear** |
| 3 | SEO plumbing | Blocks | **clear** (1 expected finding, see below) |
| 4 | Accessibility and mobile | Blocks | **clear** |
| 5 | Consistency and craft | Before handoff | **1 real finding, fixed** + 46 expected |

`WORKFLOW.md` Phase 3 names two findings that are correct rather than defects on any concept page,
and both are present here: **the deliberate `noindex`** that stops a preview competing with the
client's live domain, and **the dead links** to sibling pages that do not exist yet. Neither is
counted against the gate.

---

## Tier 1 · Truth and legal — clear · Blocks

- **Invented numbers: none.** Every numeral rendered as visible text was checked against
  `CLIENT-BRIEF.md`: `10,000`, `100`, `15`, `2018`, `2026`, and the NAP digits. Nothing else appears.
- **Fabricated reviews: none.** Three cards ship as visibly marked `[REVIEW QUOTE NEEDED]`
  placeholders. No quote was written, paraphrased or illustrated.
- **Review schema: absent by design.** No `aggregateRating`, no `Review` markup on Google-sourced
  reviews.
- **Unheld credentials: none.** Board certification, Platinum Plus tier, UCSF clinical professorship
  and the published 3-D airway research are all on the client record. No star rating is printed,
  because the record counts five-star reviews and does not state an average.
- **Real photography: yes.** All ten images are the practice's own. No stock, no AI, no synthetic
  patients. The hero is the doctor **with** a patient per Dr. Ty's standing rule.
- **PHI in forms: n/a.** No form on the homepage.
- **Legal disclaimers:** privacy, HIPAA, terms and accessibility all linked in the footer.

Stripped from the supplied primitive because it was fabricated: a 4.9 rating, "9k+ smiles", a
14-month average plan, an "88% arrive through a family referral" statistic, "0% financing", four
invented testimonials, "Dr. Evelyn Chang", a named treatment coordinator, a Pasadena NAP, and
Unsplash stock humans.

Voice bans verified by searching the file, not by intention: no em-dashes, no "free exam", no
Medicaid, no down payment, no 0% interest, no urgency or discount language.

## Tier 2 · Structure and cardinality — clear · Blocks

| Rule | Required | Built | |
|---|---|---|---|
| Service cards | 3 / 6 / 9 | **6** | pass |
| Reviews | 3 / 6 / 9 | **3** | pass |
| Trust (proof) band | 3 to 5 | **3** | pass |
| USP zigzag | 2 to 4 | **3** | pass |
| Authority strip | 4 to 7 | **4** | pass |
| CTA band | 5 lines, one button | logo + headline + **1** button | pass |
| One H1 | 1 | **1** | pass |
| Carousels | none | **none** | pass |

Section order follows the kit's five sample homepages, which outrank the written specs where they
disagree: hero (proof band inside it) → meet the doctor → USP zigzag → mid-page CTA → authority strip
→ reviews → service cards → locations → footer. Reviews precede service cards (5/5 samples) and there
is no closing CTA (4/5 samples).

## Tier 3 · SEO plumbing — clear · Blocks

- **`noindex` placement:** present, and **expected** per Phase 3. This is a public GitHub Pages
  preview that must not compete with the canonical `changortho.com`. Carries a build note; comes off
  at launch on the real domain.
- **H1 city rule:** single office, so the city is in the H1. Correct.
- **NAP character-identical** across the locations card, the footer and the JSON-LD. Verified.
- **Schema from brief facts only:** `Dentist` JSON-LD with name, url, telephone, address and
  `openingHoursSpecification`. `geo` and `areaServed` are **omitted** because the brief has none.

## Tier 4 · Accessibility and mobile — clear · Blocks

- **390px:** `document.documentElement.scrollWidth === 390`. No horizontal scroll.
- **Tap targets:** header nav, buttons, in-copy CTAs and the mobile bar all clear 44px. The only
  sub-44px control is the skip link, 1x1 until focused, by design. Footer link lists run ~32px,
  matching the kit's own footer (13.5px/4px padding); the 44px rule names nav items, drawer links and
  bar segments.
- **Sticky bar:** Call · Book · Directions, Book the wide centre segment, hidden on soft-keyboard
  open via a `visualViewport` listener.
- **Labels and focus:** every icon `aria-hidden`, `aria-label` on the logo link and the proof band,
  visible focus rings on all interactive elements, skip link first in the DOM.
- **Anchors:** every in-page `#anchor` resolves.
- **Reveals fail open:** hidden state only exists once JS arms it, plus a 2s force-reveal timer.
  `prefers-reduced-motion` disables all motion and forces content visible.
- Contrast measured: ink on surface 15.9:1, muted ink 9.1:1, white on `--brand-ink` 11.6:1, white on
  `--brand` 6.7:1.
- 19 images, 0 broken. All 24 inline icons render.

## Tier 5 · Consistency and craft — Before handoff

**1 real finding, fixed during this audit:**

- **Container was 1280px, not 1200px.** The build used Tailwind's `max-w-7xl`, which is 80rem =
  1280px, while Tier 5 names 1200px explicitly. Corrected to `max-w-[1200px]` in all ten places.
  Worth flagging as a trap: `max-w-7xl` looks like the right token and reads as a pass until the
  number is actually checked.

**Clear:**
- **href resolution:** all real links resolve; the only dead ones are the 24 unbuilt sibling pages,
  which Phase 3 names as expected.
- **LCP hero:** hero image is preloaded with a matching `imagesrcset`, `fetchpriority="high"`, never
  lazy.
- **No generic virtue claims:** nothing on the page could be pasted onto a competitor's site
  unchanged. Differentiators are the UCSF professorship, the published airway research, the Platinum
  Plus tier and single-doctor continuity.

**46 expected findings:** links to the 24 pages in `BUILD-QUEUE.md` that do not exist yet.

---

## Judgment half — no script can do these

`WORKFLOW.md`: "No script can tell a real patient photo from a stock one, a verbatim quote from a
paraphrase, or a claim that passes the competitor paste test. Read the pages."

**Photography — pass, with a caveat.** Every image is a genuine Chang Orthodontics photo. The hero is
the doctor with a patient. Caveat: only ten approved photos exist, so two are reused between the
service cards and other sections. Stock is permitted in the services grid only and would resolve it.

**Verbatim quotes — FAIL. The build's one hard blocker.** Zero verbatim quotes exist anywhere. Three
disclosed placeholders ship in their place.

**Competitor paste test — pass.** See Tier 5 above.

**Credential marks — partial.** Invisalign and the University of California, San Francisco are real
public-domain SVGs, muted to grayscale and restored on hover. The American Board of Orthodontics mark
is not obtainable as an official file anywhere public, so that slot stays typographic; it was not
redrawn. The **UCSF Medical Center** wordmark was rejected as a different legal entity from the
university where Dr. Chang holds his appointment.

---

## Open before launch

1. **Pull 3 to 5 verbatim Google review quotes** with first name and last initial. Hard blocker.
2. **UCSF logo sign-off.** The file is public domain, but universities restrict third-party use and a
   logo can read as institutional endorsement rather than a faculty appointment. Fallback ready: the
   words "UCSF Faculty, Orthodontics". See `assets/logos/SOURCES.txt`.
3. **ABO official logo file** from the client or abortho.org.
4. **Remove `noindex`** on the real domain.
5. **Compile the CDN stack.** Tailwind, Iconify, GSAP and Lenis load from CDNs, which Dr. Ty's output
   spec forbids: one `<style>` block, Google Fonts as the only external resource.
6. Self-host both typefaces; currently render-blocking from Google Fonts.
7. No OG image (needs 1200x630) and no favicon set.
8. Service-card imagery: supply service-specific shots, or approve stock for that section.
9. Founding year unknown, so no tenure claim and a single-year copyright.
10. GHL webhook URL for the appointment page.
