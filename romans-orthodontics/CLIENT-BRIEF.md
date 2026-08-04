# CLIENT BRIEF — Romans Orthodontics
Generated 2026-08-04 · status: DRAFT

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
  320-1222 · hours: **[CONFIRM — open blocker, not yet provided by client:
  exact office hours including any extended/weekend hours]** · landmark:
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

**Pre-build action required:** these are Drive-hosted only — no local file
path exists yet. Per kit rule, an asset without a real local path is treated
as not existing, so download + convert (webp, kebab-case rename following
the existing `romans-orthodontics-*` / `office-*` / `team-headshot-*`
convention) into a `concept-b`-scoped assets location before the
page-builder agents run. Do not silently fall back to the narrower local
`assets/` set without doing this.

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
ASSUMED/chosen by Claude per client instruction to pick a direction distinct
from concept A's warm-editorial and concept C's plain Source Sans pairing;
fits the growth-stage, all-ages, casual-tagline positioning better than
bright-value, quiet-luxury, or playful-bold. Brand colors/logo stay the
official Romans assets above; only type pairing, layout personality, and
imagery treatment should shift for this direction — confirm with client
before finalizing new color/font tokens if a genuinely different palette is
wanted.

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

## Services (grid count: 5 today — NOT a valid kit count; resolve to 6 by
adding "Airway & TMJ" as a 6th card, since Airway/TMJ/Functional services
already exist in the Notion service list but have no page yet — OR resolve to
3 if the build wants tighter scope. Flagging for build-time decision, not
guessing silently.)
1. Braces for Kids (money page: yes)
2. Braces for Adults (money page: yes)
3. Invisalign & Clear Aligners (money page: yes)
4. Early Treatment (money page: no)
5. Retainers & Retention (money page: no)
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
constraints this creates: patient-care photos need a consent check before
use (see Assets table); phone-quality images likely need color/crop work
before they read as edited

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
Same 17-page inventory as the validated `site/` build, output this time to
`concept-b/`:
- [ ] index.html
- [ ] braces-for-kids.html
- [ ] braces-for-adults.html
- [ ] invisalign.html
- [ ] early-treatment.html
- [ ] retainers.html
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
- ASSUMED: founding year 2026 (exact month unknown)
- ASSUMED: "hometown warm (family)" visual direction for concept-b — not
  explicitly named by client, chosen to differentiate from concept A/C;
  confirm before finalizing new color/font tokens
- TBD: exact office hours (open blocker carried from prior build, still
  unresolved)
- TBD: 60 words from Dr. Romans on hobbies/family/Saturday routine for the
  "away from the office" section (open blocker carried from prior build)
- TBD: GoHighLevel webhook URL for form wiring
- TBD: whether concept-b targets the same 2026-08-06 launch date or is a
  comparison track evaluated after launch
- OPEN: services grid is 5 today, not a valid kit count (3/6/9) — resolve at
  build time, don't guess silently
- OPEN: professional shoot planned? — no answer on file; current Drive
  photos are all phone snapshots
- OPEN: patient-care photos in Drive `Pt Examples/` need a consent check
  before use on any page
- TBD: Drive assets must be downloaded and converted to real local paths
  before build — do not build against Drive URLs directly
