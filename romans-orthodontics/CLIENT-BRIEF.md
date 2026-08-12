# CLIENT BRIEF — Romans Orthodontics
Generated 2026-08-04 · status: **CONCEPT C SELECTED BY CLIENT 2026-08-11 — in
Phase 5 site build** (design blockers resolved 2026-08-05)

> **RETARGETED 2026-08-11.** The client reviewed all three concepts and picked
> **concept C**. Everything below that once pointed at concept-b now points at
> **`romans-orthodontics/concept-c/`**. Facts, assets, services, appointment
> economics and page inventory are unchanged and still validated — only the
> chosen concept, the visual direction and the output folder moved.
>
> Per `practice-site-primitives/WORKFLOW.md` Phase 5, the site build runs on
> the **chosen concept only**, with its flattened homepage as the sibling that
> every page-builder copies chrome and CSS from. Concepts A and B stay exactly
> as they are; nothing gets retrofitted onto them.
>
> **DO NOT RE-RUN `concept-c-src/build.mjs`.** Verified 2026-08-11: a rebuild
> exits 0 with no warning and silently reverts two Phase 3 audit fixes that
> were applied after flatten and never went back into source —
> (1) the async font loading in `concept-c/index.html` (preload +
> `media="print" onload` swap + `<noscript>` fallback), and (2) the
> `.psp-linkarrow:after` 46px tap-target expander in
> `concept-c/design-system.css` (Tier 4). Flatten is a one-way step by design.
> `concept-c-src/README.md` still says "edit the source, not the output" —
> that was true before Phase 3 and is now misleading. **`concept-c/` is the
> source of truth from here.**

> **Blocker resolutions, 2026-08-05** (Jules's decisions, recorded so the build
> does not re-ask):
> 1. **Office hours:** ship a visible `[CONFIRM: office hours]` placeholder in
>    footer and contact. **Omit `openingHours` from the schema entirely** rather
>    than guessing. Carried to the launch-blockers list.
> 2. **Patient-care photos:** consent **CONFIRMED** by the client. The three
>    `Pt Examples/` images are cleared for web use.
> 3. **Services grid:** resolves to **6** by adding Airway & TMJ (see Services).
> 4. ~~**Visual direction:** concept-b deliberately differs from concept A.
>    Hometown warm (family), persona `dr-m-rogers`.~~ **SUPERSEDED 2026-08-11
>    — the client chose concept C. `dr-m-rogers` / hometown-warm was the
>    concept-b slot and is now out of scope. See Brand below.**
> 5. **Assets:** build against the **local processed set** (see Assets). The
>    richer Drive set needs a manual download; it is an enhancement, not a
>    blocker.

> This brief now targets the **site build of the selected concept**, output to
> `romans-orthodontics/concept-c/`. Most content below was pulled from the
> earlier full build's validated content, its Notion client record
> (3a532d95-51dd-80bf), and its site README. That earlier 17-page `site/`
> build (commits `432a46f`, `327d49f`) is **deliberately not being reused** —
> decision 2026-08-11, all pages are written fresh from this brief against
> concept C's system. Two things changed on 2026-08-04 per direct client
> instruction:
> assets now source from the client's Drive folder (richer set than the
> local repo subset, and one credential correction it revealed), and the
> services grid uses stock photography while every other section uses real
> Drive photos. Both changes are called out inline below.

## Identity
practice: Romans Orthodontics | founded: 2026 (brand-new practice — ASSUMED
year only, exact month not recorded; "only open 8 weeks" at time of sale,
contract signed 2026-07-16) | domain: romansorthodontics.com | tagline: "live
a little, smile a lot" (APPROVED by client 2026-08-04)

## Avatar & voice
avatar: family-dental-adjacent solo ortho practice, general (kids + adult),
growth-stage ("more patients" is the stated sales expectation)
voice notes: warm, casual, energetic — matches the tagline; not clinical, not
luxury. Practice serves Anthem AZ and the North Phoenix/Anthem-Carefree-New
River corridor.

## Doctors
- Dr. Nicholas Romans, DMD, MSD — Board-Certified Orthodontist (credential
  corrected 2026-08-04 from office signage photo, `IMG_8902.jpg` in the
  client's Drive — prior draft of this brief had guessed "DDS", which is
  wrong) — solo owner — bio depth: full (story content already written) — 5
  years in practice, "more than 7 years dedicated to orthodontics, including
  advanced specialty training" (approved quote, use verbatim)
doctor hub page: no (solo doctor)

**Training chain — ADDED 2026-08-11, verified against the live site
(`romansorthodontics.com/about-us/`) the same day.** It was missing from this
brief, and a page-builder correctly refused to print a credential the brief did
not carry. Pages may now use it. Wording matters, so use these exact terms:

- **Bachelor of Science in Biology**, University of Kansas
- **Doctor of Dental Medicine** and **Certificate of Public Health**, A.T.
  Still University *(note: "Certificate of **Public Health**", and it is a
  certificate, not a degree or an MPH — do not upgrade it)*
- **Master of Science in Dentistry** and orthodontic specialty training, Saint
  Louis University, where **his research focused on Invisalign treatment
  outcomes**
- **Fellowship with Washington University's Craniofacial Cleft Lip and Palate
  Team at St. Louis Children's Hospital**, completed during residency,
  contributing to multidisciplinary care for children with complex craniofacial
  conditions

**Community service — ADDED 2026-08-11, provenance weaker than the training
chain above, so read this before publishing it.** Four organizations have been
carried in OrthoBoost's Romans notes and are already shipped on
`concept-a/index.html` and `concept-c/why-romans.html`:

- Give Kids A Smile
- Missions of Mercy
- Dentures for Veterans
- Arizona Humane Society

**Provenance:** taken from the practice's live `about-us` page on 2026-07-30.
Re-checked 2026-08-11 — the page still carries a "Beyond the Office / Giving
Back to the Community" section, but the site is Wix and renders that section's
body client-side, so the four names **could not be re-confirmed from the raw
HTML** this time. The section's existence is confirmed; the specific list is
one-source and 12 days old.

**Before launch:** confirm the four names with the practice, or view the
rendered page in a browser. They are low-risk claims, but they are claims about
what a real person volunteers for, and one stale entry is a correction the
client will notice.

The practice's own live-site framing of him, for voice reference: *"a
board-certified orthodontist dedicated to creating healthy, confident smiles
through precision, compassion, and evidence-based care."* Do not quote that
verbatim on the new site — it is the old site's marketing copy, not a claim to
re-publish. It is here to show register and to confirm the credentials.

## Locations
primary phone (sitewide default): (623) 320-1222
- Anthem, AZ: 3618 W. Anthem Way, Suite D120, Anthem, AZ 85086 · (623)
  320-1222 · hours: **`[CONFIRM: office hours]` — ship as a visible placeholder
  in footer and contact; OMIT `openingHours` from the JSON-LD rather than
  guessing (resolved 2026-08-05, still a launch blocker)** · landmark:
  ground-level office, reserved parking
  areaServed: omit (client has not confirmed a served-area list beyond
  Anthem; do not invent from general geographic knowledge)
  geo: omit (not supplied)
location pages: none (single office — homepage IS the location page, "Anthem"
in the H1)

## Nav
Services ▾ Braces for Kids · Braces for Adults · Invisalign & Clear Aligners ·
Early Treatment · Retainers | Why Romans ▾ | Financial ▾ | Our Address
financing in main nav: no (financial page covers PPO/FSA/HSA/in-house, but
nav stays simple per today's build)

## Assets
**Source of truth is the client's Drive Brand Assets folder, not the local
repo's `assets/` folder** (2026-08-04 client instruction). The local repo
folder is a narrower, already-processed subset (8 photos) — the Drive folder
has the full real upload set. Catalogued directly from Drive on 2026-08-04:

Client Drive root: `Share With OrthoBoost - Romans Orthodontics` (folder
`1hW5DpANljN0J5plVq-zexvbKJyaAiTe-`) → `All Uploads - Romans Orthodontics`
(`10OCPj2485FpgAN2IhJRSmKYlKGvHjkj5`), organized in subfolders:

| Drive file | What it is | Suggested use | Delivered? |
|---|---|---|---|
| Photos of Dr. Romans/IMG_8919.jpeg | Dr. Romans headshot | homepage hero, dr-romans bio | yes |
| Photos of Dr. Romans/IMG_8915.jpeg | Dr. Romans headshot (alt) | dr-romans bio | yes |
| Photos of Dr. Romans/IMG_8930.jpeg | Dr. Romans candid | dr-romans bio, why-romans | yes |
| Photos of Dr. Romans/IMG_8931.jpeg | Dr. Romans candid | dr-romans bio, why-romans | yes |
| Office Exterior/IMG_8902.jpg | storefront signage (readable: full lockup, "D-120", tagline, phone) | contact, homepage | yes |
| Office Exterior/IMG_7141.JPG | office exterior | contact, homepage | yes |
| Office Interior/IMG_8884.jpg | interior | homepage zigzag, why-romans | yes |
| Office Interior/IMG_8895.jpg | interior | homepage zigzag, service pages | yes |
| Office Interior/IMG_8885.jpg | interior | homepage zigzag, service pages | yes |
| Office Interior/IMG_8882.jpg | interior | homepage zigzag | yes |
| Office Interior/IMG_9261.jpeg | interior | homepage zigzag | yes |
| Office Interior/IMG_9260.jpeg | interior | homepage zigzag | yes |
| Office Interior/IMG_8896.jpeg | interior | homepage zigzag | yes |
| Pt Examples/IMG_9168.jpg | patient-care screenshot | why-romans (verify consent before use) | yes |
| Pt Examples/IMG_9162.jpeg | patient-care photo | why-romans (verify consent before use) | yes |
| Pt Examples/IMG_9049.jpg | patient-care photo | why-romans (verify consent before use) | yes |
| (Share With OrthoBoost)/Patient Exam Example.MOV | video, patient exam walkthrough | not for stills use; flag to AM for possible video embed | yes |

All of the above are phone photos (iPhone `IMG_####` filenames), not
professionally shot — expect to color-correct/crop at build time, not just
drop them in raw.

**RESOLVED 2026-08-05 — build against the local processed set.** The Drive
files cannot be fetched in this environment: the Drive connector's base64
download only handles files under roughly 100KB and these are multi-megabyte
iPhone photos. Getting the richer 16-photo set requires Jules to download it
by hand. That is an enhancement, not a blocker.

**Use these paths** (verified 2026-08-05: all valid WebP, all under the kit's
200KB hero budget, already kebab-named and converted):

| Path | What it is | Bytes |
|---|---|---|
| `assets/team-headshot-dr-romans-01.webp` | Dr. Romans headshot | 194,382 |
| `assets/team-headshot-dr-romans-03.webp` | Dr. Romans headshot (alt) | 95,036 |
| `assets/office-exterior-01.webp` | office exterior | 191,598 |
| `assets/office-signage-01.webp` | storefront signage | 184,604 |
| `assets/office-reception-02.webp` | reception interior | 125,766 |
| `assets/office-treatment-02.webp` | treatment area | 156,090 |
| `assets/lifestyle-patient-care-01.webp` | patient care | 181,512 |
| `assets/lifestyle-patient-care-02.webp` | patient care | 167,930 |

Eight real photos: 2 doctor, 2 exterior/signage, 2 interior, 2 patient-care.
Enough for a homepage. The zigzag wants a distinct subject per row, so with
only two interiors, vary rows using the exterior and signage rather than
repeating a frame.

**Still outstanding (enhancement):** Jules downloads the Drive set by hand to
gain 2 more doctor shots and 5 more interiors. Convert to WebP and follow the
same kebab convention.

**Logo:** the Drive `Logo/` subfolder only has two raster exports
("smaller logo.png", "medium logo.png") and one SVG that is actually a
*referral-folder print design*, not a clean standalone mark — these are raw
client uploads, not usable logo files as-is. The already-processed 9-file
logo suite in `romans-orthodontics/assets/` (icon, horizontal/stacked
lockups, reversed, one-color, color-palette.png) is the correct one to keep
using — it was derived from these raw files by the asset-intake pipeline.
Do not pull the logo from Drive directly; do not redesign the mark.

## Credentials — AAO
**CONFIRMED 2026-08-12 by Jules.** American Association of Orthodontists
membership is confirmed, closing the Notion Gate 4 Tier 1 item. The
`aao-member.png` mark may stay on `index.html`, `dr-romans.html` and
`early-treatment.html`.

## Reviews
**EXPANDED 2026-08-12 — the full Google Business Profile was supplied.** The
six quotes below are what currently ships. A further ~29 real reviews with
attribution are now available from the GBP and are listed at the end of this
section as an approved pool to draw from.

**STILL MISSING, and it is the one that matters: the star rating and the total
review count.** The supplied GBP export contains review *text* and reviewer
*names*, but no per-review star ratings and no aggregate. So the five-star
glyphs currently on `index.html` (30), `reviews.html` (25) and
`braces-for-adults.html` (5) still assert a rating nobody has verified — the
open Notion Tier 1 item. **Either supply the rating and count off the profile
header, or the glyphs come off every page, homepage included.**

**UPDATED 2026-08-11 — the "zero reviews" state is over.** Real Google reviews
came in and were built into all three concepts on 2026-08-06 (commit
`613eadb`). The reviews page that this brief previously ruled out is now **in
scope**, and the homepage already ships a six-card review section.

Google profile: `https://google.com/maps?cid=14947748045126209608`

Six verbatim quotes with attribution, as shipped in `concept-c/index.html` —
**this is the approved source set; do not paraphrase, re-write, or invent
additional ones:**

1. **Janice Fortier** — "I recently saw Dr. Romans for the first time and was
   very impressed with his warm personality and his ability to make me feel at
   ease. I've never been to an orthodontist before…" *(first-visit story —
   also the right quote for the free-consult page)*
2. **Mariel Schmitt** — "We had a great consultation with Dr Romans. He was
   thorough and kind. My daughter felt really comfortable and we thought his
   treatment plan was solid and fairly priced." *(first-visit + price →
   free-consult and financial pages)*
3. **Isabelle McGhee** — "I have nothing but good things to say about this
   office and team. They went above and beyond to resolve my insurance claim
   and talk me through the process. The space is professional and clean. Kazja
   and Dr Romans are amazing!" *(insurance → financial page. Note: names a
   team member, Kazja.)*
4. **Halle Herkelman** — "Very excited to get started with my treatment! I have
   a difficult case with a missing tooth and canine stuck high up, but Dr
   Romans coordinated everything with the periodontist and general dentist.
   Gorgeous office and well run." *(complex-case coordination → braces for
   adults, why-romans)*
5. **Bijan Shemirani** — "Dr. Romans has a way of explaining things clearly and
   honestly. You never feel rushed, and it's obvious he wants people to make
   informed decisions about their care." *(why-romans)*
6. **Dr. Jacob Shelley** — "As a fellow orthodontist, I had the privilege of
   working with Dr. Romans for over 2 years. Dr. Romans knows how to deliver a
   beautiful smile AND a healthy bite that will last a lifetime…" *(**peer
   review, not a patient** — label it as such, never present it as patient
   testimony)*

### Approved pool — further real GBP reviews, 2026-08-12

Verbatim, with attribution. Use these to strengthen pages where the current six
are a poor topical match. Several are truncated by Google with "… More"; only
quote the portion actually supplied.

- **LLCYOUNIQUE** — "Dr. Romans was incredibly knowledgeable and provided
  excellent council on my needs for new retainers. The office has been renovated
  thoughtfully and executed with precision." *(**retainers** — `retainers.html`
  currently borrows an unrelated quote, so this is a direct upgrade. Note the
  reviewer's own spelling, "council". Quote it verbatim or not at all.)*
- **Luke Wallace** — "I have a difficult schedule between work and kids, but
  this office extended hours to see me and make it work. Dr Romans is genuine
  and made it easy." *(**scheduling flexibility.** Useful precisely because the
  office hours are still unconfirmed — it is a patient's own account, not a
  practice promise.)*
- **Sam Hoy** — "I recently started treatment with Dr. Romans… he has been
  incredibly professional, knowledgeable, and attentive." *(adult treatment)*
- **Victor Vega** — "Very professional and kind. Genuinely gave us a great
  explanation with our consultation. Excellent experience and will be back in
  the future to proceed with our daughter's braces." *(**kids/parents** —
  fits `braces-for-kids.html`)*
- **Laurie Garcia** — "Dr Romans explained everything so both myself and my
  child understood the process… He answered all our questions (my kid had a
  few)." *(kids/parents)*
- **Mildea Mangaccat** — "Dr. Romans and his team are absolutely amazing! The
  office is modern, clean, and welcoming, and the customer service is
  top-notch." *(**independent practice** — fits `why-romans.html`)*
- **Grace Grace** — "I had an amazing experience at my consultation… The doctor
  is very knowledgeable, comforting and supportive." *(first visit →
  `free-consult.html`)*
- **Andrew Petersen** — "Dr. Romans (and team) will make you feel welcome and
  comfortable from the very first visit." *(first visit)*
- **Real SKW1** — "Dr. Roman was very transparent and forthright in potential
  treatment options." *(transparency)*
- **Lauren Prepchuk** — "Kind, thorough, and open to ideas. Great visit!"
- **Christian Grimes** — "Open and honest quick visit highly recommend."
- **Dillon Packard** — "Clean office and polite staff. My kids are excited to
  get started!"
- **Nick Roehll** — "I've known Dr. Romans for years… He is thoughtful, honest,
  and truly committed to doing things the right way." *(personal, not a patient
  — label it as such, same rule as the Shelley peer review.)*

Shorter ones also available: gabriella black · Latoya Alexander · Marshell
Broome · Ashley Mangione · Janete Ayala · Ethan Alexander · Phyllis Philemon ·
sergio rios · Taryn P · atlas keisha · Jessica Squires · azalea dookie ·
Artemi Barbashevsky · Kreative _Grace · Erin Males (no text).

**Do not use Johnsbarberworld's** — it says "Great Dentist", which is the wrong
profession for an orthodontist and would read as sloppy on the practice's own site.

**Two facts surfaced in the owner's replies, worth confirming before use:** a
**complimentary whitening kit** is given at the consultation (mentioned in the
reply to Grace Grace), and the practice describes its own process as "digital
scanning to customized treatment planning". Neither is in this brief elsewhere.
The whitening kit in particular is a real offer the site does not currently
mention anywhere.

**No aggregate rating and no star count anywhere, and no `AggregateRating` /
`Review` schema.** The exact rating and total review count have not been read
off the live profile, and Tier 1 blocks invented numbers and review schema.
The homepage's five-star card glyphs are per-quote and carry no numeric claim.
**Before launch:** read the real rating and count off the live profile, or keep
shipping without them.

## Appointment
type: free
name: "Free Consultation" (Notion: "Orthodontic Evaluations" includes Free
Consultation, digital scans/imaging, bite & jaw assessment, growth &
development evaluation, treatment planning, airway assessment, TMJ
evaluation)
exam fee: free
treatment pricing published on site: no (financial.html deliberately carries
no dollar figures — "the consult is free, the number you leave with is
exact")
template: short-free — form in hero, PHI-free 4-field form (name, email,
phone, "who" is this for, plus hidden utm_source/utm_medium/utm_campaign/
gclid/fbclid attribution fields, no other PHI)

## Brand
logo: assets/romans-orthodontics-lockup-horizontal.svg (full suite delivered,
reuse as-is — do not redesign the mark)
colors/fonts: copper/slate/paper palette, Fraunces/Archivo/IBM Plex Mono
direction for THIS build: **concept C as shipped and client-approved.** The
built homepage at `concept-c/index.html` is the design authority — its
section arrangement, hero pattern, imagery treatment, density, type scale and
copy register are what the client picked. Every sibling page inherits that
composition. Do not reinterpret the direction from a persona file; read the
homepage.

**CORRECTED 2026-08-05.** The earlier wording here told the build not to reuse
concept A's "signature moves" including radius 0 and the mono voice. That was
wrong: those are not concept A's moves, they are the practice's brand system.
Acting on it produced a homepage in Bitter and Nunito Sans with 12px rounded
buttons, which read as off-brand because it was.

**Brand-invariant — identical in every concept, never overridden:**
palette (copper `#A05C39` / slate `#264653` / paper `#FAF6F1` and their
variants) · typefaces (Fraunces display, Archivo body, IBM Plex Mono labels) ·
`--radius: 0` · no shadows · the logo suite.

**Copper corrected 2026-08-11.** This brief previously said `#A6613C`. That is
wrong and must not be restored: `practice-site-primitives` commit `1606f21`
darkened it to **`#A05C39`** because *"#A6613C failed WCAG AA on every CTA."*
The shipped concept C already carries `--brand:#a05c39`. Setting it back to
the old value reintroduces an AA failure on every button on every page.
Related: `--ink-muted` is `#264653d9` (0.85 alpha) per commit `39d4f01`, up
from 0.72 which failed AA on body copy. **Take token values from
`concept-c/design-system.css`, never from prose in this brief.**

**What a concept may vary:** section arrangement and order within the kit's
rules · hero pattern · imagery treatment and crop · density and rhythm
(`--section-y`, the space ramp) · type scale and leading · copy register and
voice · which optional sections run.

In other words, concepts differ in **composition**, not in **identity**. If two
concepts are hard to tell apart, vary the layout and rhythm harder — never the
palette, typefaces, or geometry.

**Design pattern reference (client instruction 2026-08-04, retargeted
2026-08-11):** build every section of **the concept-c sibling pages** against
its approved pattern in the OrthoBoost Website Kit —
https://orthoboost-website-kit.vercel.app/ — hero, trust/credential bar,
zigzag imagery blocks, funnel form placement, service grid, FAQ, footer, etc.
The kit constrains structure/cardinality/a11y/SEO per section; concept C's
shipped composition is the Layer 1 visual craft applied within those patterns,
not a departure from them.

**Scope limit (explicit), REWRITTEN 2026-08-11.** The earlier version of this
block said *"do not retrofit kit patterns onto `concept-a/`, `concept-c/`"* —
written when concept-b was the target. Now that the client has chosen C, that
sentence would forbid the build it is meant to authorise. The limit is now:

- **In scope:** the **new sibling pages** built into `concept-c/`.
- **Out of scope:** `concept-a/` and `concept-b/` stay exactly as they are —
  they are the losing concepts and nothing gets retrofitted onto them.
- **Out of scope:** `concept-c/index.html` itself. It is already built,
  audited and client-approved. The kit-pattern instruction governs the pages
  being **added**, and is not a licence to re-cut the approved homepage.
- The old 17-page `site/` build is not being reused at all (decision
  2026-08-11) — it is neither retrofitted nor referenced.

## Services (grid count: **6** — RESOLVED 2026-08-05)
1. Braces for Kids (money page: yes)
2. Braces for Adults (money page: yes)
3. Invisalign & Clear Aligners (money page: yes)
4. Early Treatment (money page: no)
5. Retainers & Retention (money page: no)
6. **Airway & TMJ (money page: no)** — added 2026-08-05 to reach a valid kit
   count. Already exists in the Notion service list with no page yet, so this
   promotes real capability rather than inventing one. Needs a service page
   added to the inventory below.
— Deferred (no dedicated page yet, awaiting SEO's Master Site Map per prior
decision): Airway/TMJ/Functional Orthodontics, sleep appliances, laser gum
recontouring, additional aligner brand variants (Invisalign First/Teen,
Limited, in-house aligners, Angel)

## Proof
**UPDATED 2026-08-11.** rating: **not yet read off the live profile — do not
print one** · reviews: **6 verbatim quotes in hand** (see Reviews; total count
unread, do not print a count either) · patients: "5,000+" (client-held
stat, HELD per 2026-08-04 decision despite new-practice status — do not
round up further) · years: 5 (7+ in orthodontics overall, per approved quote)
· awards: none recorded
trust bar: credential (no review-count or rating cell, since neither number
has been verified — use credentials/training instead). Concept C's shipped
trust bar is the pattern; match it rather than re-deriving one.

## Photography
available: 16 real client stills from Drive (4 doctor, 2 exterior, 7
interior, 3 patient-care) + 1 patient-exam video — see Assets table above.
Meaningfully more than the 8-photo subset used in the prior `site/` build.
**Services grid is the one exception:** per client instruction 2026-08-04,
use stock photography for the services section specifically (braces-for-kids,
braces-for-adults, invisalign, early-treatment, retainers cards/heroes) —
this is also the kit's own rule (real photography required everywhere
except the services grid). Every other section (homepage, why-romans,
dr-romans, contact, financial) uses the real Drive photos.
missing: before/after cases, professional (non-phone) photography, team
photos (n/a, solo)
shoot planned: not recorded — flag to AM/client, per media-pipeline notes
constraints this creates: **patient-care photo consent CONFIRMED by the client
2026-08-05** — `lifestyle-patient-care-01/02` are cleared for web use.
Phone-quality images still need color and crop work before they read as
edited. With only 8 local photos, no single frame should appear twice on the
homepage; the zigzag needs a distinct subject per row.

## Team
tier: minimal (solo doctor, one assistant part-time per sales notes — role
counts only, no staff bios/photos)
turnover risk: n/a / low (solo practice)

## Money story
fork: **insurance-led** (financial.html: "major PPO plans, checked on the
spot," FSA/HSA accepted, in-house financing offered — no dollar figures
published on site)
financial page: yes
financing in main nav: no

## Integrations
ghl webhook: **TBD — not yet wired.** Open launch to-do from prior build:
wire form POST to GoHighLevel + leads-platform backup. Get the actual webhook
URL from AM/Notion before this goes live.
booking link: OrthoSync scheduler — used only as a secondary link on the
free-consult page (never elsewhere in nav or other CTAs, per prior decision)
review link: none yet (no reviews to link to)
call tracking: not yet set up (Notion CTM field blank)

## Launch
domain: romansorthodontics.com · dns controlled by: OrthoBoost (registrar
field present in Notion, value omitted from this brief) · deadline: **Notion
"Expected Launch Date" was 2026-08-06, which has passed — the concept round
ran through 2026-08-11. Get a revised launch date from the AM; this brief no
longer carries a valid one.** · rebuild: yes (legacy site existed at
romansorthodontics.com with /about-us /treatments /early-treatment
/teen-treatment /adult-treatment /clear-aligners /clear-braces /metal-braces
/how-to-get-started /contact-us /faq /terms-conditions /privacy-policy
/refund-policy /accessibility-statement — 301 mapping needed at launch)

## Page inventory
**19 pages, output to `concept-c/`** (retargeted 2026-08-11): the prior 18
plus `reviews.html`, which is back in scope now that real reviews exist.

`index.html` is **already built, audited and client-approved** — it is Phase 5's
sibling, the file every page-builder copies header, footer, mobile drawer,
sticky bar and container CSS from. **Do not rebuild or overwrite it.**

- [x] index.html — DONE (approved concept C homepage; do not touch)
- [ ] braces-for-kids.html
- [ ] braces-for-adults.html
- [ ] invisalign.html
- [ ] early-treatment.html
- [ ] retainers.html
- [ ] airway-tmj.html
- [ ] free-consult.html
- [ ] why-romans.html
- [ ] dr-romans.html
- [ ] reviews.html — ADDED 2026-08-11 (real reviews now exist; see Reviews)
- [ ] team.html
- [ ] financial.html
- [ ] contact.html
- [ ] thank-you.html
- [ ] privacy.html
- [ ] terms.html
- [ ] refund-policy.html
- [ ] accessibility.html

## Open questions / assumptions

**Resolved 2026-08-05 (no longer blocking design):**
- ~~services grid count~~ → 6, adding Airway & TMJ
- ~~patient-care photo consent~~ → confirmed by client, cleared for web use
- ~~concept-b visual direction~~ → moot. **The client chose concept C on
  2026-08-11**; the concept round is closed and the direction is whatever
  `concept-c/index.html` already does.
- ~~Drive assets need local paths~~ → building against the 8 local processed
  WebP files; the Drive set needs a manual download and is an enhancement
- ~~office hours block the build~~ → visible placeholder, omitted from schema

**Still open — launch blockers (must clear before the site goes live):**
- **Office hours.** Placeholder ships; the real hours must land before launch.
  Third build cycle carrying this one. Worth escalating to the client directly.
- **GoHighLevel webhook URL** for form wiring. Also needs the leads-platform
  backup. **Corrected 2026-08-11:** these are **Phase 7**, not Phase 5, and
  they are no longer manual — Dr. Ty packaged all five handoff skills and they
  are installed (`orthoboost-ghl-forms`, `orthoboost-leads-connect`,
  `site-launch-audit`, `static-site-deploy`, `vercel-domain-connect`). Still
  blocked on the actual webhook URL from the AM.
- **Google rating and review count** unread from the live profile. Ship
  without numbers until verified — see Reviews.
- **Revised launch date** from the AM (the 2026-08-06 date has passed).

**Still open — content, not blocking the homepage:**
- 60 words from Dr. Romans on hobbies, family, or a Saturday routine for the
  "away from the office" section. Affects the doctor bio page only.
- Professional (non-phone) photo shoot: no answer on file. Every current image
  is an iPhone snapshot.
- ~~Whether concept-b targets the 2026-08-06 launch date or is a comparison
  track evaluated after launch.~~ → moot; the client chose C. The live
  question is now simply the revised launch date (see launch blockers).

**Assumptions standing:**
- Founding year 2026, exact month unknown.
- Patients treated "5,000+" is a client-held stat retained despite the
  new-practice status. Do not round it up further.
