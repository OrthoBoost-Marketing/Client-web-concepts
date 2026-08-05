# CLIENT BRIEF — Romans Orthodontics
Generated 2026-08-04 · status: APPROVED for design (blockers resolved 2026-08-05)

> **Blocker resolutions, 2026-08-05** (Jules's decisions, recorded so the build
> does not re-ask):
> 1. **Office hours:** ship a visible `[CONFIRM: office hours]` placeholder in
>    footer and contact. **Omit `openingHours` from the schema entirely** rather
>    than guessing. Carried to the launch-blockers list.
> 2. **Patient-care photos:** consent **CONFIRMED** by the client. The three
>    `Pt Examples/` images are cleared for web use.
> 3. **Services grid:** resolves to **6** by adding Airway & TMJ (see Services).
> 4. **Visual direction:** concept-b **deliberately differs** from concept A.
>    Hometown warm (family), persona `dr-m-rogers`.
> 5. **Assets:** build against the **local processed set** (see Assets). The
>    richer Drive set needs a manual download; it is an enhancement, not a
>    blocker.

> This brief targets a **second build** of this practice's site, output to
> `romans-orthodontics/concept-b/` (replacing the current single-page concept-b
> preview there). It is deliberately a re-execution of the same validated
> content as the existing full build in `romans-orthodontics/site/` — the
> point of this pass is the build method and a distinct visual direction, not
> new facts. Most content below was pulled from that build's validated
> content, its Notion client record (3a532d95-51dd-80bf), and its site
> README. Two things changed on 2026-08-04 per direct client instruction:
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

## Reviews
None yet — brand-new practice, zero Google reviews as of 2026-08-04.
Deliberately no reviews page and no testimonial quotes anywhere on the site.
Swap the homepage credentials/proof section for the kit's real review grid
once 5+ genuine Google reviews exist — do not write placeholder quotes.

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
colors/fonts (existing build, concept A slot): copper/slate/paper palette,
Fraunces/Archivo/IBM Plex Mono
direction for THIS build (concept-b slot): **hometown warm (family)** —
CONFIRMED 2026-08-05: concept-b deliberately differs from concept A. Persona
file is `dr-m-rogers` (family-focused community ortho): neighbor not brand,
multi-generational, local specificity, warm humanist type, candid over posed,
soft over sharp. Explicitly avoid ultra-modern geometric coldness and thin
luxury type.

**CORRECTED 2026-08-05.** The earlier wording here told the build not to reuse
concept A's "signature moves" including radius 0 and the mono voice. That was
wrong: those are not concept A's moves, they are the practice's brand system.
Acting on it produced a homepage in Bitter and Nunito Sans with 12px rounded
buttons, which read as off-brand because it was.

**Brand-invariant — identical in every concept, never overridden:**
palette (copper `#A6613C` / slate `#264653` / paper `#FAF6F1` and their
variants) · typefaces (Fraunces display, Archivo body, IBM Plex Mono labels) ·
`--radius: 0` · no shadows · the logo suite.

**What a concept may vary:** section arrangement and order within the kit's
rules · hero pattern · imagery treatment and crop · density and rhythm
(`--section-y`, the space ramp) · type scale and leading · copy register and
voice · which optional sections run.

In other words, concepts differ in **composition**, not in **identity**. If two
concepts are hard to tell apart, vary the layout and rhythm harder — never the
palette, typefaces, or geometry.

**Design pattern reference (client instruction 2026-08-04):** build every
section of **this concept-b build** against its approved pattern in the
OrthoBoost Website Kit — https://orthoboost-website-kit.vercel.app/ — hero,
trust/credential bar, zigzag imagery blocks, funnel form placement, service
grid, FAQ, footer, etc. The kit constrains structure/cardinality/a11y/SEO
per section; the hometown-warm direction above is the Layer 1 visual craft
applied within those patterns, not a departure from them.

**Scope limit (explicit):** this kit-pattern instruction applies to the
`concept-b/` build described in this brief and nothing else. Do **not** go
back and retrofit kit patterns onto `concept-a/`, `concept-c/`, or the
existing 17-page `site/` build, and do not treat this as a standing rule for
future Romans work. Those stay exactly as they are unless separately asked.

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
rating: none yet (0 reviews) · reviews: 0 · patients: "5,000+" (client-held
stat, HELD per 2026-08-04 decision despite new-practice status — do not
round up further) · years: 5 (7+ in orthodontics overall, per approved quote)
· awards: none recorded
trust bar: credential (new practice, no review/patient-volume trust bar —
use credentials/training instead)

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
field present in Notion, value omitted from this brief) · deadline: 2026-08-06
(Notion "Expected Launch Date" — this is the SAME deadline as the existing
`site/` build; confirm with AM whether concept-b is meant to hit this date
too or is a parallel/comparison track) · rebuild: yes (legacy site existed at
romansorthodontics.com with /about-us /treatments /early-treatment
/teen-treatment /adult-treatment /clear-aligners /clear-braces /metal-braces
/how-to-get-started /contact-us /faq /terms-conditions /privacy-policy
/refund-policy /accessibility-statement — 301 mapping needed at launch)

## Page inventory
18 pages (the validated `site/` build's 17 plus `airway-tmj.html` from the
services resolution), output this time to `concept-b/`:
- [ ] index.html
- [ ] braces-for-kids.html
- [ ] braces-for-adults.html
- [ ] invisalign.html
- [ ] early-treatment.html
- [ ] retainers.html
- [ ] airway-tmj.html
- [ ] free-consult.html
- [ ] why-romans.html
- [ ] dr-romans.html
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
- ~~concept-b visual direction~~ → confirmed distinct, hometown warm,
  persona `dr-m-rogers`
- ~~Drive assets need local paths~~ → building against the 8 local processed
  WebP files; the Drive set needs a manual download and is an enhancement
- ~~office hours block the build~~ → visible placeholder, omitted from schema

**Still open — launch blockers (must clear before the site goes live):**
- **Office hours.** Placeholder ships; the real hours must land before launch.
  Third build cycle carrying this one. Worth escalating to the client directly.
- **GoHighLevel webhook URL** for form wiring. Also needs the leads-platform
  backup. Both are Phase 5 and both are currently manual, since the five
  handoff skills the kit calls for are not installed.

**Still open — content, not blocking the homepage:**
- 60 words from Dr. Romans on hobbies, family, or a Saturday routine for the
  "away from the office" section. Affects the doctor bio page only.
- Professional (non-phone) photo shoot: no answer on file. Every current image
  is an iPhone snapshot.
- Whether concept-b targets the 2026-08-06 launch date or is a comparison
  track evaluated after launch. Ask the AM.

**Assumptions standing:**
- Founding year 2026, exact month unknown.
- Patients treated "5,000+" is a client-held stat retained despite the
  new-practice status. Do not round it up further.
