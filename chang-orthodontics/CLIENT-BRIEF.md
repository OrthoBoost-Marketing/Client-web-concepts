# CLIENT BRIEF — Chang Orthodontics
Generated 2026-08-04 · revised 2026-08-11 · status: DRAFT

Sources: Notion client record `31232d95-51dd-81c3-bef9-dd3cfab1f108` · build ticket `3a332d95-51dd-81dc-963c-c0c4be1c0d18` · WEB project `3a332d95-51dd-81fe-998a-f84b482386e6` · office record `31732d95-51dd-815b-b7db-f3aca77e7525` · live changortho.com · Drive `Approved Web Assets - Chang Orthodontics` · concepts A/B/C in this folder.

## Identity
practice: Chang Orthodontics | founded: TBD (not published anywhere; do not print a © founding range until confirmed) | domain: changortho.com | tagline: TBD — candidate pulled verbatim from the live doctor page: "A confident smile doesn't just change how the world sees you, it changes how you see yourself."

## Avatar & voice
avatar: premium-ortho
kit avatar: **Marlowe Orthodontics** (https://orthoboost-website-kit.vercel.app/pages/marlowe.html) — follow its structure, nav naming, voice, and restraint. Match on: single location, one doctor, complimentary consultation, boutique positioning, no offers, credential-forward proof, async "request a consultation" form rather than a real-time scheduler.
diverge from Marlowe on: **treatment mix and age skew.** Marlowe is adult/hidden-braces led; Chang is mostly kids across all ages, so the services grid and imagery stay family-weighted. Also diverge on **page count** (Marlowe is 12 pages, Chang is 27 — see Page inventory) and on **proof**, where Chang has real volume stats (100 reviews, 10,000 patients) to run alongside credentials rather than credentials alone.
voice notes: Boutique San Francisco Peninsula practice. Notion brand persona = **Premium Family Ortho ("Dr. G. House")**. Mostly kids but treats all ages, so premium must not read as adults-only. Doctor is a UCSF clinical professor and published airway researcher: credibility and precision are the positioning, not price. Sales note: **first real marketing spend, very skeptical, go slow, no discounts or offers**. Never write a promotional/urgency tone. Never advertise in Spanish (practice speaks it, but explicitly does not want Spanish advertising).

## Doctors
- Dr. Michael Chang, DDS — orthodontist, owner — bio depth: **full** — UCSF (7-year combined dental + orthodontic specialty program); board certified; 15+ years practicing; Clinical Professor at UCSF since 2018 (award-winning); published peer-reviewed research on 3-D airway changes before and after orthodontic treatment; Bernard Osher Foundation, UCSF Alumni Association, and San Francisco Dental Society scholarship recipient; lives in San Carlos with his family; 49ers and Giants fan (has Candlestick Park seats in the office).
doctor hub page: no   ← solo practice

## Locations
primary phone (sitewide default, used in header/mobile bar on non-location pages): (650) 598-0888
- San Carlos, CA: 10 El Camino Real, Ste. 201, San Carlos, CA 94070 · (650) 598-0888 · Mon–Fri 9:00am–5:00pm · northernmost building in San Carlos, right on the Belmont border, on El Camino between the Holiday Inn Express and Hyatt Place hotels
  hours note (verbatim from the office record): "Monday-Friday 9-5pm. We take lunch in the middle but there is always someone picking up." — phones are covered through lunch; **do not print a lunch closure**
  areaServed: omit   ← practice says only "the Peninsula of the SF Bay Area"; Belmont is corroborated by the landmark note, but no confirmed town list exists. Do not let a builder supply Peninsula city names from general knowledge.
  geo: omit   ← not verified against the GBP listing; leave the property out rather than guess
location pages: none required (single office) — see ASSUMED note about keeping `san-carlos.html` as a geo/SEO page
call-tracking number: (650) 446-3624 (Google Ads call asset only — **do not** place in site markup)
do not publish: Dr. Chang's personal line (415) 652-6532

## Nav
Treatments ▾ (Braces · Invisalign · Early Orthodontics · Kids & Teens · Adults · Airway & Expansion · Retainers) | The Practice ▾ (Why Chang · Dr. Michael Chang · Our Team · Technology · Reviews) | Resources ▾ (New Patients · Financing · FAQ · Emergencies) | Contact & Directions
CTA: "Free Consultation"
financing in main nav: no   ← sits under Resources; premium positioning

## Appointment
type: free
name: "Free Consultation"
exam fee: free
treatment pricing published on site: no — open decision, see Money story
template: short-free   ← ~2,000px, form in the hero, three risk-reversal checkmarks, proof counts, FREE stressed in checkmarks/button/microline

## Brand
colors: #005DAA navy, #003B6E deep navy, #3E90CE bright navy, #EEF6F8 soft clay, #1b1c1c / #434653 ink, #74747c / #9aa0b3 mute · fonts: per concept — A Hanken Grotesk + Archivo Black, B Instrument Serif + Inter, C Manrope
direction: quiet luxury — credibility and precision, never price
palette source of truth: `Color-Palette_Chang Orthodontics.png` in Drive `Brand Assets - Chang Orthodontics`.

## Assets
Originals are staged in `concept-a/assets/` (11 files). Each concept folder carries its own `assets/web/` set of responsive `.webp` derivatives (480/768/1200/1800 + manifest.json) — 39 files per concept. Drive source: `Approved Web Assets - Chang Orthodontics` (`1vCQUcjHI_w56CAMeNa4Cj2e_MQsXs7Ip`).

| File path | What it is | Use on | Delivered? |
|---|---|---|---|
| assets/chang-logo.svg | practice logo, SVG | header/footer sitewide | yes |
| assets/chang-doctor-portrait-01.jpg | Dr. Chang portrait | doctor bio, homepage, about | yes |
| assets/chang-doctor-scanner-01.jpg | Dr. Chang with intraoral scanner | technology, homepage zigzag | yes |
| assets/chang-patient-01.jpg | doctor with patient | homepage hero, treatment pages | yes |
| assets/chang-team-01.jpg | team group | team page, why page | yes |
| assets/chang-team-full-01.jpg | full team group | team page hero | yes |
| assets/chang-office-reception-01.jpg | reception interior | contact, new patients | yes |
| assets/chang-office-reception-02.jpg | reception interior alt | contact, about | yes |
| assets/chang-office-consult-01.jpg | consult room | appointment page, new patients | yes |
| assets/chang-community-01.jpg | community event | about, why page | yes |
| assets/chang-community-booth-01.jpg | community booth | about, why page | yes |
| assets/logos/invisalign-logo.svg | Invisalign mark, public domain | trust bar | yes |
| assets/logos/ucsf-logo.svg | UCSF mark, public domain | trust bar | yes — **needs client sign-off before launch** |

**The ABO mark is not obtainable anywhere public — that trust-bar slot stays typographic. Never redraw it.**
missing: **no exterior/building shot**, **no before-and-after cases**, **no individual team headshots**

## Services (grid count: 6)
1. Braces — metal and ceramic (money page: **yes**, ads point here)
2. Invisalign® — Invisalign, Teen, First, Limited, palatal expander; **Platinum Plus Provider** (money page: **yes**, ads point here)
3. Early Orthodontics / Phase 1 — interceptive treatment, expanders, space maintainers, corrective appliances (money page: no)
4. Kids & Teens (money page: no)
5. Adult Orthodontics — aesthetic braces and aligners, complex bite correction, retreatment (money page: no)
6. Airway & Expansion — airway orthodontics, MARPE, MSE; Dr. Chang holds master's-level airway education and publishes airway research (money page: no)

also offered, covered in-page rather than as separate money pages: retainers (permanent, Hawley, clear), same-day emergency appointments **for existing patients only**, digital scans and imaging, growth and development evaluation, airway assessment, treatment planning.

## Proof
rating: **NOT ESTABLISHED — never print "5.0 stars."** The client record counts five-star reviews; it does not state an overall rating. · reviews: 100 five-star (re-verify against the live GBP at build time) · patients: 10,000 served · years: 15+ · awards: board certified · Platinum Plus Invisalign Provider · UCSF Clinical Professor since 2018 · published airway researcher
USPs (verbatim from the client record): after-school appointments · low wait times · personalized treatment · Platinum Plus Invisalign Provider · board certified · involved in the community · UCSF faculty · airway educated (master's)
trust bar: stats, credential-forward (Marlowe pattern) — currently **four cells** in all three concepts: board certified · UCSF faculty since 2018 · 10,000 patients · 100 five-star reviews. Note the section spec calls for exactly three; dropping the review cell (it is already the reviews-section H2) is the obvious cut, but that is an open call, not a decision.
Numbers are real and current as of the Notion record. **Do not round up.**

## Reviews (quotable)
**NONE COLLECTED. This is the build's hard blocker.** 100 five-star reviews sit on the Google profile; not one is transcribed. Every concept ships visible placeholder framing rather than invented quotes, so nothing is reusable.
- [ ] TBD — 3–5 verbatim quotes with first name + last initial, pulled from the live GBP (`GBP` link on the Notion client record), tagged: first-visit story → appointment page · kid/parent story → early-orthodontics + kids-teens · Invisalign/adult story → invisalign + adults · results story → homepage

**Builders are forbidden from writing a quote.** Any testimonial slot without a supplied quote ships as a visible placeholder or gets dropped — never filled.

## Photography
available: doctor portrait · doctor with scanner · doctor with patient · two team groups · three interior shots · two community shots — 11 approved images, all with responsive webp derivatives generated
missing: exterior/building shot · before-and-after cases · individual team headshots · after-school/evening-appointment candid
shoot planned: unknown — TBD
constraints this creates: team page cannot run the rich or medium tier (no headshots, no names) · no before/after gallery may be built, only a placeholder section stating cases will be supplied with signed permission · the "northernmost building, between the two hotels" landmark has no supporting photo, so the contact page leans on a map, not an exterior image · **stock/AI imagery is permitted only in the services grid** · the hero must show the doctor with a patient — verify the file by eye, the captions are not reliable.

## Team
tier: **minimal** (role counts, group photo, collective prose)  ·  turnover risk: TBD
No staff names, roles, or headshots exist in Notion, in Drive, or on the live site — the live "Meet the Team" page is photos only ("Our Team Rocks!"). Upgrade to medium only if the client supplies names + roles + headshots.

## Money story
fork: **premium** (value and process, no numbers)
financial page: yes  ·  financing in main nav: no
In-house financing: yes. The client record documents real monthly figures — braces $299+/mo without insurance, $199+/mo with; Invisalign $349+/mo without, $249+/mo with — but the practice is boutique, has never run an offer, and explicitly wants to start with no discount. Default is therefore a **no-numbers** financial page covering insurance, in-house payment plans, and what the free consultation includes. Publishing the monthly figures is Jules's decision, not a builder's.
Medicaid: **No — never mention.**
Down payment: "N/A Do Not Use" per the client record — **never reference a down payment.**

## Integrations
ghl webhook: TBD — required before launch
booking link: none — no real-time scheduler; the free-consultation form is the conversion
review link: from the GBP entry on the Notion client record — TBD
call tracking: CTM → GHL → FM; Google Ads call asset (650) 446-3624, **not** to be placed in site markup
analytics already provisioned: GA4 property 489387469 · GTM container 220059125 · Meta Pixel 2965520846990610 · Plerdy 72348 · Search Console on https://changortho.com/
forms: hidden UTM/gclid/fbclid attribution inputs required on every form (the existing site already does this) · PHI-free fields only · both the GHL webhook and the leads-platform backup wired at launch · thank-you.html is the conversion goal
SMS appointment reminders: not wanted.

## Launch
domain: changortho.com · registrar: GoDaddy · DNS currently SiteGround · dns controlled by: client, confirm access (build ticket step 6) · target hosting: GitHub Pages · deadline: TBD (no launch date set; project is Stage 1 · Intake) · rebuild: **yes** — replacing a WordPress/Elementor Pro site on SiteGround. Content migration and 301 mapping from the live URL tree required (`/about/`, `/about/meet-the-doctor/`, `/about/meet-the-team/`, and the rest — crawl the live site for the full list before launch).

## Page inventory
- [ ] index.html
- [ ] treatments.html
- [ ] braces.html                    ← money page
- [ ] invisalign.html                ← money page
- [ ] early-orthodontics.html
- [ ] kids-teens.html
- [ ] adults.html
- [ ] airway.html
- [ ] retainers.html
- [ ] appointment.html               ← the single conversion destination (short-free template)
- [ ] thank-you.html                 ← conversion goal
- [ ] about.html                     ← why-choose-us
- [ ] dr-michael-chang.html          ← full bio
- [ ] team.html                      ← minimal tier
- [ ] technology.html
- [ ] reviews.html                   ← blocked until verbatim quotes are supplied
- [ ] new-patients.html
- [ ] financing.html                 ← premium fork, no dollar figures pending decision
- [ ] faq.html
- [ ] emergencies.html
- [ ] contact.html
- [ ] san-carlos.html                ← geo/SEO page, see ASSUMED
- [ ] privacy.html
- [ ] terms.html
- [ ] accessibility.html
- [ ] hipaa.html
- [ ] 404.html

Total: 27 pages.

## Open questions / assumptions
- **TBD (blocking the reviews page and several form-adjacent slots):** 3–5 verbatim Google review quotes with attribution. Nothing usable exists anywhere. Say the word and I'll pull them from the live GBP.
- **DECIDED 2026-08-04 (Jules):** kit avatar is **Marlowe Orthodontics**. Structure, nav naming, voice, and restraint follow Marlowe; treatment mix, age skew, page count, and proof style diverge as noted in Avatar & voice.
- **REVERSED 2026-08-11 (Jules) — supersedes the 2026-08-04 shell decision.** The 2026-08-04 brief named concept-1 ("clinical instrument," Hanken Grotesk + Archivo Black) as the visual shell. That decision, and every prior Chang direction with it, was discarded in a deliberate design reset. `concept-1/2/3` no longer exist on disk. Three new concepts A/B/C were built on a new design system; **concept-b is the published live direction** (orthoboost-marketing.github.io/Client-web-concepts/chang-orthodontics/concept-b/). Do not revive the clinical-instrument shell.
- **TBD (decision, not research):** publish the monthly payment figures ($199–$349/mo) or keep the financial page number-free? Premium positioning and "no offers" argue for number-free; that is the default written above.
- TBD: year the practice was founded / how long in San Carlos. Without it there is no tenure claim and no © founding range.
- TBD: the town list for `areaServed`. Only Belmont is corroborated. Left as `omit` rather than guessed.
- TBD: GoHighLevel webhook URL, Google review link.
- TBD: launch deadline; whether a photo shoot is planned; staff turnover rate.
- TBD: client sign-off on the UCSF mark. The file is public domain, but universities restrict third-party use and the mark can read as endorsement. The UCSF **Medical Center** wordmark was rejected — different legal entity from the university.
- ASSUMED: `san-carlos.html` is retained as a geo/SEO page even though the single-office rule says the homepage is the location page. The homepage H1 still carries San Carlos. Reason: it is a real SEO target and the page existed in concepts the client may already have viewed. Say so if you would rather drop it.
- ASSUMED: services grid of 6, in the priority order above, with braces and Invisalign as the ad-destination money pages (matches "Services in Ads": Braces, Invisalign, Free Consultation).
- ASSUMED: tagline taken from the live doctor page pending the client's own preference.
- ASSUMED: doctor bio runs the full ~400–700 word treatment. The live page plus the client record give a genuine story (UCSF 7-year program, teaching since 2018, airway research, scholarships, San Carlos resident, 49ers/Giants, Candlestick seats). A 60-word "away from the office" section still needs the client's own words.
- RISK: the reviews page and every testimonial slot sitewide stay blocked until real GBP quotes are pulled. This is the single largest gap between "concept" and "launchable."
- RISK: the team page is locked to minimal tier indefinitely. Without names or headshots there is no upgrade path, and a thin team page on a premium positioning reads as evasive rather than restrained.
- RISK: all three concepts load Tailwind, Iconify, GSAP and Lenis from CDNs, which the output spec forbids. Compile and inline before launch.
- NOTE: the Notion Web DB row still lists "SVG logo · final list of services · client persona" as pending. All three are in fact resolved — logo is in Drive and staged locally, services are enumerated on the client record, persona is Premium Family Ortho. Worth clearing that row.
