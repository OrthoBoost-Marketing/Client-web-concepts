# Chang Orthodontics · Concept A · Audit Record

Date: 2026-08-11 · Page audited: `concept-a/index.html` (homepage only)
Standard: the Gate 4 tier table in `practice-site-primitives/WORKFLOW.md`
Mechanical half: `scripts/audit-site.mjs --dir concept-a --brief ../CLIENT-BRIEF.md`
Browser half: Playwright/Chromium at 1440x1000 and 390x844

> Concept A is the 2026-08-10 "clinical instrument" build. This record captures the audit **as
> first run**, then the fixes applied on 2026-08-11 at Jules's instruction. The re-run result is at
> the top; the original findings are kept below so the reasoning survives.

## Re-run result, 2026-08-11 after fixes

**Tiers 1 to 4 clear. Gate 4 passes.** The only remaining finding is the deliberate preview
`noindex`, which Phase 3 names as correct rather than a defect. `scrollWidth` is 390 both before and
after scrolling. Zero tap targets under 44px. Authority strip at 4 items, reviews a 3-card grid,
container 1200px, hero is the doctor with a patient, CTAs sentence case, and content parity with
concept B verified by script: **no mismatched facts**. Fix detail is in `DESIGN.md`.

---

## Gate 4 result

**FAILS. Tier 4 blocks.**

| Tier | Covers | Status | Result |
|---|---|---|---|
| 1 | Truth and legal | Blocks | **clear** |
| 2 | Structure and cardinality | Blocks | **2 findings** |
| 3 | SEO plumbing | Blocks | **clear** (1 expected + 1 minor) |
| 4 | Accessibility and mobile | Blocks | **FAIL, 2 findings** |
| 5 | Consistency and craft | Before handoff | 1 finding + 76 expected |

Plus one standing-rule violation outside the tier table: **the hero image is not the doctor with a
patient.**

Work top down. `WORKFLOW.md`: "Never trade a Tier 1 failure for three Tier 4 fixes." Tier 1 is clean
here, so the work is Tier 2 and Tier 4.

---

## Tier 1 · Truth and legal — clear · Blocks

This build is genuinely disciplined on truth, and it is the strongest part of it.

- **Invented numbers: none.** Every numeral rendered as visible text checks out against
  `CLIENT-BRIEF.md`: `10,000`, `100`, `15`, `2018`, `2026`, and the NAP digits. Nothing else appears.
- **Fabricated reviews: none.** The reviews section is a marked "Review quotes pending" block that
  states it is waiting on three to six verbatim quotes with first name and last initial, and that
  "Nothing here will be written on the patients' behalf." Exactly right.
- **Review schema: clean.** `aggregateRating` appears twice in the file, both times inside HTML
  comments instructing future builders **not** to add it. The `Dentist` JSON-LD contains no
  `aggregateRating` and no `Review` objects. (A regex sweep of the rendered DOM flags this as present;
  it is matching the comment text. Confirm against the parsed JSON-LD before recording it as a
  violation.)
- **Unheld credentials: none.** ABO board certification, Invisalign Platinum Plus, and UCSF School of
  Dentistry faculty are all on the client record.
- **Real photography: yes.** All 8 images are the practice's own. No stock, no AI, no synthetic
  patients.
- **PHI in forms: n/a.** No forms on the page.
- **Legal:** privacy, terms, accessibility and HIPAA all linked in the footer.

## Tier 2 · Structure and cardinality — 2 findings · Blocks

| Rule | Required | Built | |
|---|---|---|---|
| Service cards | 3 / 6 / 9 | 6 | pass |
| Trust band cells | 3 to 5 | 4 | pass |
| USP zigzag | 2 to 4 | 3 | pass |
| CTA band | 5 lines, one button | 1 link, 0 buttons | pass |
| One H1 | 1 | 1 | pass |
| Carousels | none | none | pass |
| **Authority strip** | **4 to 7** | **3** | **FAIL** |
| **Reviews** | **3 / 6 / 9** | **0 cards** | **FAIL** |

**2.1 · Authority strip carries only 3 items.** ABO, Invisalign Platinum Plus, and UCSF School of
Dentistry Faculty. The rule is 4 to 7. A fourth verified line exists and is unused: the published
peer-reviewed 3-D airway research. Adding it clears the rule without inventing anything.

**2.2 · Reviews is a single pending block, not a grid.** The cardinality rule wants 3, 6 or 9 cards.
This ships one honest placeholder panel instead. The intent is right and Tier 1 is satisfied, but the
section does not yet have the shape the rule specifies, so the grid still has to be built before the
quotes land. For comparison, concept B ships three individually marked placeholder cards, which meets
the count while blocked.

Section order itself is correct and matches the kit samples: hero → trust band → meet the doctor →
3 zigzag rows → CTA band → authority strip → reviews → services → locations → footer.

## Tier 3 · SEO plumbing — clear · Blocks

- **`noindex`:** present, and **expected** per Phase 3, which names the deliberate preview noindex as
  correct rather than a defect.
- **H1 city rule:** single office and the city is in the H1 ("PRECISION ORTHODONTICS IN SAN CARLOS.").
  Correct.
- **Schema from brief facts only:** `Dentist` JSON-LD, no invented properties.
- **Minor: one NAP variant.** The address renders as "10 El Camino Real, Ste. 201" in the visible copy
  and the JSON-LD, but the map iframe's `title` attribute says "Suite 201". Not visible text and not
  schema, so it does not block, but the rule is character-identical and this is the one place it
  drifts.

## Tier 4 · Accessibility and mobile — FAIL · Blocks

**4.1 · Horizontal overflow at 390px. `scrollWidth` is 410 against a 390 viewport.**
19 elements extend past the right edge, including `.eyebrow`, `.h2`, `.lede`, `.cred-list` and the
media block. The rule is that `scrollWidth` must equal exactly 390.

This one deserves attention because **the build's own `DESIGN.md` says it is fixed.** Line 132 claims
"390px is the gate this design is measured against and it is clean there, verified." Line 138
describes this precise bug as a trap already paid for: "This is what pushed the sticky bar to 410px on
a 390px phone." The measured number is still exactly 410. Either the fix regressed or it was recorded
before being verified. Treat the documented "verified" claims in that file as unconfirmed until
re-measured.

**4.2 · Tap targets under 44px, throughout.** Not an edge case. Measured at 390px: the section text
links ("Why families choose Chang", "See what your first visit involves", "Find us on El Camino Real",
"See every treatment we offer") are **21px**; all six service-card links ("Braces", "Invisalign",
"Early Orthodontics", "Kids & Teens", "Adult Orthodontics", "Airway & Expansion") are **29px**; and
the four footer legal links are under 44px. The mechanical half flags the footer set; the browser pass
finds the rest.

## Tier 5 · Consistency and craft — 1 finding + 76 expected · Before handoff

**5.1 · Container is 1320px, not 1200px.** Its own `DESIGN.md` line 50 states
`max-width: 1320px` as the contract. Tier 5 names 1200px. Same class of finding as concept B's
`max-w-7xl` (1280px), which was corrected during that audit.

**76 expected findings:** links to the 24 sibling pages in `BUILD-QUEUE.md` that do not exist yet.
Phase 3 names these as correct rather than defects.

Clear: no broken images (8 of 8 load), no marquee or carousel, LCP hero preloaded.

---

## Standing-rule violation, outside the tier table

**The hero image is the doctor alone with a scanner, not the doctor with a patient.**
It is `chang-doctor-scanner-01`, alt "Dr. Michael Chang using the digital scanner". Dr. Ty's standing
rule, stated 2026-08-11, is that a practice homepage hero always shows the doctor **and** a patient
together, and the blueprint ranks "doctor with patient demonstrating the service" first in its imagery
priority. A doctor alone reads as a portrait.

`chang-community-01` is the only approved photo that shows both and is what concept B uses. Note that
`CLIENT-BRIEF.md` mislabels `chang-patient-01` as "doctor with patient" when it is the patient on her
own, so the swap has to be made by looking at the images, not by reading the captions.

---

## Fix list, in tier order

1. **Tier 4 · kill the 20px overflow at 390px.** Find which of the 19 elements sets the floor. Per its
   own trap list the likely causes are a bare `1fr` grid track holding long uppercase text, and
   `position: fixed` children escaping `body { overflow-x: hidden }`.
2. **Tier 4 · raise every tap target to 44px**, especially the 21px section links and the 29px
   service-card links.
3. **Tier 2 · add a fourth authority item** (the published airway research).
4. **Tier 2 · build the reviews grid** at 3, 6 or 9 marked placeholder cards.
5. **Standing rule · swap the hero** to `chang-community-01`.
6. **Tier 5 · container 1320px → 1200px.**
7. **Tier 3 · align the iframe title** to "Ste. 201".
8. Correct the false "verified" claims in `concept-a/DESIGN.md` lines 132 and 138.

Unchanged and shared with concept B: review quotes are the hard blocker, `noindex` comes off at
launch, and there is no OG image or favicon set.
