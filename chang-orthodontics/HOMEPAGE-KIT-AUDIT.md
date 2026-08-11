# Chang Orthodontics — homepage audit vs. the OrthoBoost Website Kit section library

Audited 2026-08-11 · concepts A, B, C · homepage only (inner pages out of scope)
Source of truth: https://orthoboost-website-kit.vercel.app/ sections 01–11
Measured, not eyeballed: desktop **1440×900** and mobile **390×780**, live DOM via the local
preview on :8018. Sections 12–15 (Service Hero, Service Zigzag, Request Form, FAQ) are
service-page sections and are excluded.

---

## Verdict

| | A | B | C |
|---|---|---|---|
| Sections passing clean | 7 / 11 | 8 / 11 | 6 / 11 |
| Blocking failures | 1 | 2 | 3 |
| Kit section order | flexible-but-legal | **exact** | **exact** |

**B is closest to the kit.** C has the most failures, including the only outright *banned*
pattern on the page (two buttons in the mid-page CTA band). A's structure is sound; its
weakness is the H1 and an authority bar carrying no actual logos.

---

## Correction to the earlier (2026-08-11) audit

My previous pass flagged **"the proof band is four cells, spec says exactly three"** on all
three concepts. **That was wrong**, and it came from `homepage-conversion-blueprint` — the
skill that has since been deleted as outdated.

The kit's Section 03 rule 2 reads **"3–5 cells, one line of hierarchy each."**
Four cells is compliant. All three concepts **pass** on cell count. No change needed, and the
note I wrote into `CLIENT-BRIEF.md` about dropping to three should be disregarded.

Where the kit *does* bite on the trust bar is mobile layout and band height — see 03 below.

---

## 01 · Headers

Spec: logo top-left · ≤5 nav items · Services = money pages · Meet-the-Doctor inside Why-Us ·
clickable phone · one primary CTA top-right · single location → "Our Address" · sticky main bar.
Banned: social icons, search, >1 primary CTA, 10+ nav items.

**All three pass the eight non-negotiables.** 4 nav items (Treatments ▾ / Practice ▾ /
Resources ▾ / Our Address), Services dropdown = the six money pages, Reviews + Meet-the-Doctor
inside the Practice group, one `tel:` link, exactly one CTA and it is rightmost, sticky bar,
no social icons, no search, no address strip.

"The Practice" (A, C) is correct, not a miss — Marlowe is Chang's kit avatar and uses that label.

| | Finding | Fix |
|---|---|---|
| **B** | **Mobile top bar carries 4 controls** — logo, phone, a "Free consultation" CTA, hamburger. Spec is logo + phone + hamburger. The CTA duplicates the bottom bar's centre segment → **two primary CTAs on mobile**, explicitly banned. | Remove the CTA from the mobile top bar; the sticky bottom bar already carries it. |
| **A** | **Mobile controls left-clustered.** Hamburger ends at x=222 with **168px dead space** to the right. B and C right-align correctly (20px / 24px inset). | Push `.nav-actions` to the right edge on mobile. |
| **B** | Top bar **85px** vs the spec's one-row ~60px. (A = 64 ✓, C = 77.) | Trim vertical padding. |
| **C** | Logo link is **40px tall**, under the 44px touch-target floor. Its phone and hamburger are correct at 44×44. | Raise the logo anchor to 44px min-height. |
| **B** | Bottom-bar centre segment reads "Free consultation"; spec and siblings say **"Book"**. | Rename. |

Bottom bars otherwise correct on all three: Call · Book · Directions, Book widest and centred,
60–64px tall, gaps ≥8px.

---

## 02 · Heroes

Spec: four-questions test · two-column default · **H1 = Service + City + USP** · a sub only they
can say · CTA message-matches header · proof near the CTA · real photography (doctor with a
patient) · mobile stacks H1 → sub → CTA → photo with CTA above the fold.

**Mobile order and CTA-above-fold verified correct on all three** (measured: H1 → sub → CTA →
photo, CTA fully above 780px).

| | H1 | Verdict |
|---|---|---|
| A | "PRECISION ORTHODONTICS IN SAN CARLOS." | ⚠ Service + City but **no USP**, and set in all caps. Weakest of the three. |
| B | "Braces and Invisalign in San Carlos planned by a UCSF clinical professor" | ✓ All three elements, and the USP is unpasteable by any competitor. |
| C | "Precision orthodontics in San Carlos from a Platinum Plus Invisalign provider" | ✓ All three elements. |

**Fix A:** adopt B's construction — lead with the UCSF professorship or the Platinum Plus tier.

**⚠ Open on all three — rule 7, real photography.** Every concept uses
`chang-community-01` as the hero, with alt text claiming "Dr. Michael Chang with a patient."
Per the 11-photo inventory that file is a **community shot**, while `chang-patient-01` and
`chang-doctor-scanner-01` — the actual doctor-with-patient and treatment frames — are used
further down the page. Spec rule 7 wants the doctor with a patient demonstrating the outcome.
**Needs a human eye.** If it is a booth/community photo, all three heroes fail rule 7 and the
alt text is inaccurate.

---

## 03 · Trust Bar

Spec: only claims nobody else can make · **3–5 cells** · no icons, no paragraphs · placement
flexible (under the hero, chips inside the hero, or mid-page) · **mobile: four cells → 2×2,
never a scroller, band under ~40% of the viewport**.

Content passes everywhere: board certified · UCSF faculty since 2018 · 10,000 patients ·
100 five-star reviews. All verifiable, none rounded, **4 cells is inside the 3–5 range**, and
**no icons on any of the three** (B's were removed this session, which brought it into spec).

| | Desktop | Mobile cols | Band height | Verdict |
|---|---|---|---|---|
| A | 4 cells, 4 cols, 21% vp | **2** ✓ | 344px = **44%** | ⚠ marginally over the ~40% cap |
| B | 4 cells, 4 cols, 11% vp | **1** ✗ | 381px = **49%** | ✗ **fails both mobile rules** |
| C | 4 cells, inside hero (approved alternate), 7% vp | **2** ✓ | 246px = 32% | ✓ pass |

**Fix B — the one real trust-bar failure.** Its grid is `grid-cols-1 sm:grid-cols-2
lg:grid-cols-4`, so below the 640px breakpoint it collapses to a single column: four stacked
rows, 381px, half the phone screen. Change the base to `grid-cols-2` and it becomes 2×2 at
roughly 190px (~24%), which clears the cap with room to spare.

**Fix A:** trim cell padding to get under 40%.

---

## 04 · Meet the Doctor

Spec: directly under the trust bar · teaser not biography · kicker + heading + 2–3 sentences +
3–6 credentials + **one quiet CTA (outline/ghost — never a solid booking-style button)** ·
real photo · checkable credentials.

**All three pass.** Positioned directly after the trust bar, teaser length, 4 checkable
credentials each (board certification, UCSF, published research, Platinum Plus), real doctor
portrait.

CTA treatment, measured:
- **A** — `btn btn-outline`, "More about Dr. Chang" → ✓ textbook rule 4
- **B** — transparent background, 1px border, "Meet Dr. Chang" → ✓ textbook rule 4
- **C** — plain text link, "Read Dr. Chang's full story" → ✓ acceptable as a "quiet CTA"

⚠ **C only:** the kicker reads "Meet Dr. Michael Chang, DDS" directly above an H2 reading
"Meet Dr. Michael Chang" — a duplicate, and an eyebrow label, which OrthoBoost bans by
standing rule. Delete the kicker.

---

## 05 · USP Zigzag

Spec: 2–4 rows · alternating sides · one unique claim per row · H2 + 2–3 sentences +
**a contextual text-link CTA, not a button** · real office photos · vary the photo subject.

**All three pass cleanly — the strongest section across the board.**

| | Rows | Image sides | Row CTAs |
|---|---|---|---|
| A | 3 | RIGHT / LEFT / RIGHT ✓ | text links ✓ |
| B | 3 | LEFT / RIGHT / LEFT ✓ | text links ✓ |
| C | 3 | LEFT / RIGHT / LEFT ✓ | text links ✓ |

Photo subjects vary per row on all three (scanner → consult room → team/reception), which is
rule 6 working as intended. Claims are practice-specific and survive the competitor-paste test.

---

## 06 · CTA Band

Spec: one action restated · five-line anatomy (logo → headline → logistics → **one** button) ·
strongest colour moment · placed directly after the zigzag. **Banned: two buttons** — "the one
section where even the phone secondary sits out."

| | Buttons | Verdict |
|---|---|---|
| A | 1 — "Book your free consultation" | ✓ |
| B | 1 — "Request your free consultation" | ✓ |
| C | **2** — "Request a consultation" **+ the phone number** | ✗ **BANNED PATTERN** |

**Fix C — highest-priority failure in this audit.** Remove the phone from the mid-page band.
The sticky mobile bar already gives one-tap calling, which is the exact rationale the spec
cites for the ban.

A and B also carry the optional logo correctly, and all three sit directly after the zigzag ✓.

---

## 07 · Authority Logos

Spec: only genuinely-held credentials · **4–7 logos** · one quiet muted line · placement
flexible (after services, or before/after reviews) · official assets, uniform grayscale.

| | Marks | Real logo files | Verdict |
|---|---|---|---|
| A | 4 (ABO · Invisalign · UCSF · Published) | **0 — all typographic** | ⚠ count ✓, but it is a *logo* bar with no logos |
| B | 4 (UCSF · ABO · Published + Invisalign mark) | 1 | ⚠ only one real mark |
| C | 4 (Platinum Plus · UCSF · ABO · Published + Invisalign mark) | 1 | ⚠ only one real mark |

Every claim is genuinely held ✓. Placement is legal on all three (A after the services grid;
B and C between the CTA band and reviews — rule 4 explicitly permits both).

**The constraint is real, not laziness:** per the client record the **ABO mark is not obtainable
anywhere public** — that slot must stay typographic and must never be redrawn. Invisalign and
UCSF marks exist in `assets/logos/`.

⚠ **Launch blocker carried from the brief:** the **UCSF mark needs client sign-off**. The file
is public domain, but universities restrict third-party use and it can read as endorsement.
(The UCSF *Medical Center* wordmark was already rejected — different legal entity.)

---

## 08 · Reviews

Spec: **grid, never carousel** · 3, 6, or 9 cards · verbatim, real first names · localize the
heading · **a "read more" door** + count line when impressive.

**Static grids confirmed on all three — no carousels, no horizontal scrollers.** 3 cards each,
matching the 3/6/9 symmetry rule.

**All three correctly ship visible placeholders rather than invented quotes.** This is the
right call and the honest one: zero verbatim reviews have been transcribed from the GBP, and
builders are forbidden from writing them. The hard blocker stands.

| | Heading | Count line | "Read more" door |
|---|---|---|---|
| A | "What San Carlos families say." ✓ localized | ✓ "100 five-star reviews on Google" | ✓ |
| B | "What San Carlos families say" ✓ localized | ✓ on the Google profile | ✓ |
| C | "100 five-star reviews from Peninsula families" | ✓ in the heading | ✗ **MISSING** |

**Fix C:** add the "Read more reviews →" link (rule 5). Also consider leading with the city —
the spec's localize rule wants "What *[City]* families are saying," and "Peninsula" is a region,
not the city in the H1.

---

## 09 · Services Grid

Spec: 3/6/9 cards · image + clickable H3 + two sentences · searchable names · **uniform 4:3
ratio** · mobile single-column or tight 2-col. **Banned: icon-only cards, mixed ratios.**

All three run **6 cards** ✓ with searchable H3s (Braces, Invisalign®, Early Orthodontics,
Kids & Teens, Adult Orthodontics, Airway & Expansion) ✓, whole card clickable ✓, two-sentence
teases ✓, **single column on mobile** ✓.

| | Images | Ratio (measured) | Verdict |
|---|---|---|---|
| A | 6 photos | 278×209 = **1.33 (4:3)** uniform | ✓ (fixed this session — was 8 icon-only SVG diagrams, the *banned* pattern) |
| B | 6 photos | `aspect-[4/3]` uniform | ✓ |
| C | 6 photos | 342×456 = **0.75 (3:4 portrait)** uniform | ✗ **wrong ratio** |

**Fix C:** images are internally consistent (so the mixed-ratio ban is passed) but portrait, not
the specified 4:3. Swap to `aspect-[4/3]`.

⚠ **Open on all three — rule 4, "the image shows the service."** The spec's example is
"kids' braces → a kid wearing braces." Four of six cards don't: Kids & Teens is a community
booth, Adult Orthodontics an empty consult room, Airway an office interior. Chang's 11 approved
photos contain **no braces close-ups, no aligner shots, no treatment-in-progress frames**, so
real photography cannot satisfy this rule. Both the kit ("stock acceptable, AI if necessary —
the ONE section where that's allowed") and the Chang brief ("stock/AI permitted only in the
services grid") authorize filling those slots with stock. **Decision needed.**

---

## 10 · Locations

Spec: one office → info card + embedded map · NAP identical to footer/GBP/JSON-LD · card carries
address, landmark, hours, clickable phone, **Directions as a button** · real lazy-loaded embed ·
localized heading.

**All three pass.** Single-office pattern correct, "Our Address" nav link lands here, heading
localized ("Find us in San Carlos"), landmark line present ("right at the Belmont border"),
hours with the phones-covered-through-lunch note and **no lunch closure printed**, clickable
phone, real Google embed with `loading="lazy"`.

**Directions is a button on all three** ✓ (A `btn btn-primary`; B a 44px-min rounded button;
C a white rounded-full button) — rule 3 calls Directions the #1 action here.

Note: the map colour treatment was removed at your request this session; all three now render
the stock Google embed.

---

## 11 · Footer

Spec: brand blurb + logo · services links · NAP · hours · contact · **socials** · privacy ·
terms · accessibility statement · copyright.

| Item | A | B | C |
|---|---|---|---|
| Brand blurb (service + city + doctor) | ✓ | ✓ | ✓ |
| Services links (sitewide internal-link floor) | ✓ | ✓ | ✓ |
| NAP + hours | ✓ | ✓ | ✓ |
| Clickable phone | ✓ | ✓ | ✓ |
| Privacy · Terms · Accessibility | ✓ | ✓ | ✓ |
| HIPAA notice | ✓ | ✓ | ✓ |
| Copyright | ✓ | ✓ | ✓ |
| **Socials** | **0** | **0** | **0** |

**Question, not a failure:** rule 4 makes the footer the socials' one approved home (they are
banned from the header). No concept links any. The spec also says *"only link profiles that are
actually maintained"* — **does Chang have maintained social profiles?** If yes, all three
footers need them. If no, this is correct as-is.

The `© 2026` line with no founding range is also correct — the brief records the founding year
as unknown, and a range would be an invented tenure claim.

---

## Fix list, ranked

**Blocking**
1. **C** — remove the phone from the mid-page CTA band (§06). The only *banned* pattern present.
2. **B** — mobile trust bar to `grid-cols-2`; currently 1 column at 49% of the viewport (§03).
3. **B** — remove the CTA from the mobile top bar; two primary CTAs on mobile (§01).
4. **C** — add the "Read more reviews" door (§08).
5. **C** — service card images to 4:3; currently 3:4 portrait (§09).

**Should fix**
6. **A** — rewrite the H1 to carry a USP; drop the all-caps (§02).
7. **A** — right-align the mobile header controls; 168px dead space (§01).
8. **C** — delete the duplicated "Meet Dr. Michael Chang, DDS" kicker (§04).
9. **A** — trust bar under 40% of mobile viewport; currently 44% (§03).
10. **C** — logo link to 44px min touch target (§01).
11. **B** — top bar 85px → ~60px; bottom-bar label "Free consultation" → "Book" (§01).

**Decisions for Jules — not builder calls**
- **Hero photo** (§02): verify `chang-community-01` by eye. If it's a community shot, all three
  heroes fail rule 7 and the alt text is wrong.
- **Services grid imagery** (§09): approve stock for the four cards that don't show the service.
- **UCSF logo** (§07): client sign-off before launch.
- **Footer socials** (§11): does Chang maintain any profiles?
- **Review quotes** (§08): the standing blocker — say the word and the GBP quotes get pulled.

## Not audited
Inner pages (26 of the 27-page inventory) — homepage only, per scope.
Kit sections 12–15 are service-page sections and do not apply here.
`noindex` on all three is deliberate for the public preview and is not a finding.
