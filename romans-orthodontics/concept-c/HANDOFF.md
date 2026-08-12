# Romans Orthodontics · concept C — build handoff

Phase 5 built 2026-08-11. 18 sibling pages added to the client-approved
homepage. `index.html` was **not** modified.

Nothing here is deployed. Nothing is wired. This lists what is true, what is
assumed, and what must be answered before launch.

---

## 1 · Waiting on Jules — three edits to the approved `index.html`

These are the only changes needed to the client-approved homepage, and I have
**not** made them. Each is small and each fixes a real defect.

**1.1 · Footer is two links short.** Every one of the 18 sibling pages carries
an extended footer; the homepage does not, so it is now the only file in the
folder without them. Two lines:

```html
<!-- in the Practice column, after "Our Team" -->
<a class="roc-footer-link" href="reviews.html">Reviews</a>
<!-- in the legal row, after "Terms" -->
<a class="roc-legal-link" href="refund-policy.html">Refund Policy</a>
```

Without this, `reviews.html` and `refund-policy.html` are orphaned from the
homepage.

**1.2 · The nav omits a service.** The Services dropdown lists five treatments.
There are **six**, and `airway-tmj.html` exists and is in the footer. As built,
that page is reachable from the footer but not the nav, and no nav item can
carry `aria-current` on it. Add a sixth dropdown item.

**1.3 · `#locations` stays as-is on the homepage.** No change needed — noted so
nobody "fixes" it. The section lives on the homepage, so the bare anchor is
correct there. All 18 siblings use `index.html#locations`.

---

## 2 · Launch blockers — client must answer

**2.1 · Office hours.** Unknown. Ships as a visible `[CONFIRM: office hours]`
on every page via the footer, and again on `contact.html` and `free-consult.html`.
`openingHours` is omitted from every JSON-LD rather than guessed. **This is now
the third build cycle carrying this item.** It is most conspicuous on the
contact page. Escalate directly to the client.

**2.2 · GoHighLevel webhook URL.** All 8 forms carry the identical placeholder
`action="TODO-GHL-WEBHOOK-URL"` — normalized deliberately so Phase 7 is a
single find-and-replace. Needs the URL from the AM, then
`orthoboost-ghl-forms` + `orthoboost-leads-connect` (every site gets both).

**2.3 · `hello@romansorthodontics.com` is unverified.** It came from OrthoBoost
notes, not from `CLIENT-BRIEF.md`, and is now published on `contact.html` three
times (address block, `mailto:`, JSON-LD). **Confirm the mailbox exists and is
monitored, or pull it.**

**2.4 · Google rating and review count.** Never read off the live profile, so
**no rating and no count appear anywhere on 19 pages** — verified by grep: zero
`AggregateRating`, zero `ratingValue`, zero `reviewCount`, zero rating claims.
Either read the real numbers before launch or keep shipping without them.

**2.5 · Revised launch date.** The Notion "Expected Launch Date" of 2026-08-06
has passed.

**2.6 · Community-service list.** Give Kids A Smile · Missions of Mercy ·
Dentures for Veterans · Arizona Humane Society. Single-source, from the live
about-us page on 2026-07-30. Re-checked 2026-08-11: the section still exists but
the site is Wix and renders it client-side, so the names could **not** be
re-confirmed from raw HTML. They are claims about what a real person volunteers
for. Confirm in a browser or with the practice.

---

## 3 · Claims needing Dr. Romans's sign-off

Published under his name, standard and defensible, but **not in the brief** —
they are general orthodontic norms the builders supplied:

- typical treatment length 1–2 years
- 6–8 week adjustment intervals
- 2–3 days of soreness after placement
- ~22 hours per day aligner wear
- AAO first-check-by-age-7 recommendation (attributed to the AAO, which is correct)

Also editorial, derived from the practice's positioning rather than quoted:

- "ceramic brackets are on the table from the first conversation" (braces-for-adults)
- "adults who were told as teenagers that their window had closed are a routine
  case here" (braces-for-adults)
- "we file the claim for you" (financial) — supported only indirectly, by the
  Isabelle McGhee review
- in-house financing "with Romans Orthodontics, not with an outside lender"
  (financial) — **wrong if the practice actually routes anyone to CareCredit or
  similar**
- after-hours phone handling description (contact)
- "south side of the street" (contact) — inferred from the map, not confirmed
- review category chips on `reviews.html` are the builder's taxonomy

---

## 4 · What the build deliberately refused

Recorded so nobody "fixes" these later:

- **No fabricated bio.** `dr-romans.html` ships three visible `[CONFIRM: 60
  words…]` placeholders for the origin story, the formative experience, and
  life outside the office, and says out loud that they stay empty until Dr.
  Romans fills them in. The spec's most load-bearing beats had no source.
- **No team roster.** `team.html` has no names, no headshots, no "Bio Coming
  Soon", no stock humans. "Kazja" stays inside the quoted review rather than
  becoming a staff card — a first name from a patient review is not a roster
  entry and carries no consent.
- **No prices.** Zero dollar figures on 19 pages, verified by grep. `financial.html`
  substitutes the free-consult promise for the spec's 7× price anchor and
  argues the absence rather than hiding it.
- **No medical overreach on `airway-tmj.html`.** No apnea diagnosis or treatment
  claim; the page states that a physician diagnoses it, usually via a sleep
  study. No cure claims for TMJ. Nothing about ADHD, bedwetting, migraines,
  posture or behavior.
- **No Invisalign provider tier**, no awards, no "voted best".
- **Peer review labelled.** Dr. Jacob Shelley is identified as a fellow
  orthodontist, never as patient testimony, on every page he appears.
- **Legal pages are marked sample text** requiring the practice's counsel, with
  a `role="note"` callout. `privacy.html` explicitly refuses to draft a HIPAA
  Notice of Privacy Practices. `refund-policy.html` is a deliberate stub.

---

## 5 · Known deviations from the kit specs

Each was a spec-vs-client conflict resolved toward the client:

| Spec | Says | We shipped | Why |
|---|---|---|---|
| FINANCIAL | monthly price anchor ×7 | free-consult promise ×7 | practice publishes no figures |
| REQUEST-FORM | First + Last name | single Name | DESIGN.md, and it keeps forms at 4 fields |
| REQUEST-FORM | sticky bar hides when form in view | does not hide | needs JS the approved chrome lacks |
| REVIEWS-PAGE | 9 rendered + load-more | 6 rendered, no load-more | only 6 reviews exist; padding would mean inventing |
| APPOINTMENT | `Dentist` schema | `WebPage` only | avoids duplicate business entities |
| WHY / service | hero proof-count line | credential line | no verified counts |

**Hero pattern is not uniform.** `retainers`, `early-treatment` and `why-romans`
use a split hero instead of the homepage's full-bleed photographic one. All
three builders chose this independently for the same reason: the `svc-*.webp`
service images are **720×540** and upscale roughly 3.5× on a 2560px band. This
is an asset problem showing up as a design inconsistency. Re-export the service
images larger and it can be made uniform.

---

## 6 · Verified at build time

- **19/19 pages**, zero dead file links, zero dead anchors (full crawl).
- **Shared CSS layer byte-identical** on all 18 siblings against `index.html`.
- **One `<style>` block per page** (normalized; two pages had drifted to two).
- **One H1 per page**, `noindex` on all 19.
- **NAP character-identical** across all pages. The two apparent variants are
  correct: `+1-623-320-1222` is the JSON-LD `telephone` format, and `Suite D-120`
  appears only in alt text describing the door decal — both match the homepage.
- **Zero em dashes** in body copy sitewide.
- Each page measured `scrollWidth === 390` in a real 390px iframe, and contained
  at 2560px.

**One real layout bug was found and fixed:** the peer-review `<figure>` on
`reviews.html` inherited the UA default `margin: 1em 40px`, pushing mobile
`scrollWidth` to 410px.

**Known measurement false positive:** the 390px harness reports `.psp-linkarrow`
text links at 30px on every page **including the approved homepage**. Their real
hit area is 46px via the `:after` expander in `design-system.css`. Do not "fix"
this — that expander is a Phase 3 audit fix that exists only in the built output.

---

## 7 · Do not do these

- **Never run `../concept-c-src/build.mjs`.** Verified 2026-08-11: it exits 0
  with no warning and silently reverts two Phase 3 audit fixes — the async font
  loading in `index.html` and the `.psp-linkarrow:after` 46px tap-target in
  `design-system.css`. Flatten is one-way. **`concept-c/` is the source of truth.**
- Never edit `../concept-a/` or `../concept-b/`. Losing concepts, frozen.
- Never re-run a page-builder against a page that already exists — they
  overwrite whole files.

---

## 8 · Next

1. Jules approves the three `index.html` edits in §1.
2. Client answers §2 and §3.
3. `site-launch-audit` — the full Phase 6 pass with the checks that only mean
   something now siblings exist.
4. Phase 7: `orthoboost-ghl-forms` → `orthoboost-leads-connect` →
   `static-site-deploy` → `vercel-domain-connect`.
5. Strip the preview `noindex` from the 13 pages that should be indexable.
   **Keep it permanently on** thank-you, privacy, terms, accessibility, contact,
   refund-policy.
6. Canonical URLs are currently guesses (`romansorthodontics.com/<slug>`,
   extensionless); the four legal pages have none. Settle the real URL scheme
   with the 301 map for the 15 legacy paths in `CLIENT-BRIEF.md`.
