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

> **DR. TY'S CALL, 2026-08-12: the site launches WITH the placeholders.** The
> visible `[CONFIRM: …]` flags are no longer launch blockers. They are open
> content items that can land after go-live. Notion is the source of truth for
> anything it records.
>
> **One narrow thing to settle before go-live anyway:** `[CONFIRM: office hours]`
> is internal notation. On a preview it reads as a flag; on a live site real
> patients read it as broken. If the hours genuinely will not land in time,
> swap that one string for patient-facing wording — "Call for current hours" —
> which is equally honest and does not look unfinished. Every other placeholder
> sits on a `noindex` legal page or in a spot patients will not parse as an
> error, so they can ship as-is.

### Tier 1 items open in Notion — these DO block launch

From the project record, Gate 4. Tier 1 is truth and legal, and it blocks
regardless of the placeholder decision above.

- **The AAO "Member" mark asserts a membership nobody has confirmed in
  writing.** Present on `index.html`, `dr-romans.html`, `early-treatment.html`.
  One client reply closes it; until then it is an unverified credential on the
  client-approved homepage.
- **Review stars are asserted at 5.** 30 glyphs on `index.html`, 25 on
  `reviews.html`, 5 on `braces-for-adults.html`. The source review list carried
  no ratings. Either get the real ratings or the glyphs come off — and if they
  come off, they come off the homepage too, not just the siblings.
- **Three operational claims carrying concept C — raise, do not rewrite:** a
  written treatment plan before anything starts, the patient reads it first,
  and PPO plans checked during the visit.

### Conflict to resolve: does a team page exist?

Notion lists **"a team page (solo)"** under *deliberately absent, do not "fix."*
`team.html` was built anyway, and the approved homepage links to it three times
(nav, drawer, footer). Its builder independently judged that it barely earns its
place. Either the page is removed and those three homepage links go with it, or
Notion's line is stale. **Check with Dr. Ty before acting either way.**

### Verified clean

- The personal **(620)** number that Notion warns must never be published
  appears nowhere on the site. The only "620" on any page is inside the Google
  Maps CID.
- Medicaid is mentioned nowhere.

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

### Service-page hero images — investigated 2026-08-11

**Hero pattern is not uniform.** Full-bleed on `braces-for-kids`,
`braces-for-adults`, `invisalign`, `airway-tmj`; split figure on `retainers`
and `early-treatment`. (`why-romans` is also split, but it uses a real
900×1125 photo and is not affected.)

This is an **asset problem wearing a design problem's clothes.** All six
`svc-*.webp` are **720×540 and 10–29KB**, and all six are preloaded as the
page's LCP element with `fetchpriority="high"`. The four full-bleed pages
stretch a 720px file across a 2560px band, roughly 3.5×. The two split pages
are three builders independently declining to do that, and they were right.

**There is no larger source.** Checked: `assets/services/*.jpg`, the apparent
originals, are **800×600** — and `svc-senior-smile.jpg` is **652×450**,
smaller than the webp. These are low-resolution stock comps. Upscaling adds
pixels but no detail and blows the kit's 200KB hero budget, so it is not a fix.

Only two real options: re-license these stock images at full resolution, or
shoot real photography. Both are client asks.

### Stock humans on service heroes — FLAGGED, decision made 2026-08-11

The `svc-*` set are stock models. `svc-invisalign.webp` is a woman in scrubs
in an operatory holding an aligner; `svc-braces-for-kids.webp` is a clinician
in scrubs with a child patient in a treatment chair. As **page heroes** they
read as Romans staff treating Romans patients.

The kit's rule is *"Real photography everywhere except the services grid
(stock/AI permitted there only). Never stock humans on a healthcare site."* As
service-page heroes, these sit outside the one slot where stock is allowed.
It matters more than usual here because `team.html` openly states the practice
cannot show its team yet, while six service pages open with people who look
like that team.

**Jules's decision, 2026-08-11: keep the stock images and leave the homepage
services grid untouched.** Recorded, not re-argued. Revisit if a photo shoot
happens, since one shoot resolves this, the resolution problem, the team
roster and the doctor-bio gaps together.

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
