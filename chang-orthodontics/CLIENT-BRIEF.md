# CLIENT BRIEF — Chang Orthodontics
Generated 2026-08-04 · status: DRAFT

Sources: Notion client record `31232d95-51dd-81c3-bef9-dd3cfab1f108` · build ticket `3a332d95-51dd-81dc-963c-c0c4be1c0d18` · WEB project `3a332d95-51dd-81fe-998a-f84b482386e6` · office record `31732d95-51dd-815b-b7db-f3aca77e7525` · live changortho.com · Drive `Approved Web Assets - Chang Orthodontics` · existing concepts 1/2/3 in this folder.

## Identity
practice: Chang Orthodontics | founded: TBD (not published anywhere; do not print a © founding range until confirmed) | domain: changortho.com | tagline: TBD — candidate pulled verbatim from the live doctor page: "A confident smile doesn't just change how the world sees you, it changes how you see yourself."

## Avatar & voice
avatar: premium-ortho
kit avatar: **Marlowe Orthodontics** (https://orthoboost-website-kit.vercel.app/pages/marlowe.html) — follow its structure, nav naming, voice, and restraint. Match on: single location, one doctor, complimentary consultation, boutique positioning, no offers, credential-forward proof, async "request a consultation" form rather than a real-time scheduler.
diverge from Marlowe on: **treatment mix and age skew.** Marlowe is adult/hidden-braces led; Chang is mostly kids across all ages, so the services grid and imagery stay family-weighted. Also diverge on **page count** (Marlowe is 12 pages, Chang is 27 — see Page inventory) and on **proof**, where Chang has real volume stats (100 reviews, 10,000 patients) to run alongside credentials rather than credentials alone.
voice notes: Boutique San Francisco Peninsula practice. Notion brand persona = **Premium Family Ortho ("Dr. G. House")**. Mostly kids but treats all ages, so premium must not read as adults-only. Doctor is a UCSF clinical professor and published airway researcher: credibility and precision are the positioning, not price. Sales note: **first real marketing spend, very skeptical, go slow, no discounts or offers**. Never write a promotional/urgency tone. Never advertise in Spanish (practice speaks it, but explicitly does not want Spanish advertising).

## Doctors
- Dr. Michael Chang, DDS — orthodontist, owner — bio depth: **full** — UCSF (7-year combined dental + orthodontic specialty program); board certified; 15+ years practicing; Clinical Professor at UCSF since 2018 (award-winning); published peer-reviewed research on 3-D airway changes before and after orthodontic treatment; Bernard Osher Foundation, UCSF Alumni Association, and San Francisco Dental Society scholarship recipient; lives in San Carlos with his family; 49ers and Giants fan (has Candlestick Park seats in the office).
doctor hub page: no  ← solo practice

## Locations
primary phone (sitewide default, used in header/mobile bar on non-location pages): (650) 598-0888
- San Carlos: 10 El Camino Real, Ste. 201, San Carlos, CA 94070 · (650) 598-0888 · Mon–Fri 9:00am–5:00pm · northernmost building in San Carlos, right on the Belmont border, on El Camino between the Holiday Inn Express and Hyatt Place hotels
  hours note (verbatim from the office record): "Monday-Friday 9-5pm. We take lunch in the middle but there is always someone picking up." — phones are covered through lunch; do not print a lunch closure.
  areaServed: **omit** — the practice describes itself as "in the Peninsula of the SF Bay Area," and Belmont is corroborated by the landmark note, but no confirmed town list exists. Do not let a builder supply Peninsula city names from general knowledge.
  geo: omit
location pages: none required (single office) — see ASSUMED note about keeping `san-carlos.html` as a geo/SEO page
call-tracking number: (650) 446-3624 (Google Ads call asset only — **do not** place in site markup)
do not publish: Dr. Chang's personal line (415) 652-6532

## Nav (the agreed header tree — Marlowe naming)
Treatments ▾ Braces · Invisalign · Early Orthodontics · Kids & Teens · Adults · Airway & Expansion · Retainers
The Practice ▾ Why Chang · Dr. Michael Chang · Our Team · Technology · Reviews
Resources ▾ New Patients · Financing · FAQ · Emergencies
Contact & Directions (single office)
CTA: Free Consultation
financing in main nav: no (under Resources) ← premium positioning

## Assets (real paths — a builder will not use an asset without one)
All paths relative to the build folder; originals are already staged in `concept-1/assets/` with responsive `.webp` derivatives in `concept-1/assets/web/` (480/768/1200/1800 + manifest.json). Drive source: `Approved Web Assets - Chang Orthodontics` (`1vCQUcjHI_w56CAMeNa4Cj2e_MQsXs7Ip`).

| File path | What it is | Use on | Delivered? |
|---|---|---|---|
| assets/chang-logo.svg | practice logo, SVG | header/footer sitewide | yes |
| assets/chang-doctor-portrait-01.jpg | Dr. Chang portrait | doctor bio, homepage, about | yes |
| assets/chang-doctor-scanner-01.jpg | Dr. Chang with intraoral scanner | technology, homepage zigzag | yes |
| assets/chang-patient-01.jpg | doctor with patient | homepage, treatment pages | yes |
| assets/chang-team-01.jpg | team group | team page, why page | yes |
| assets/chang-team-full-01.jpg | full team group | team page hero | yes |
| assets/chang-office-reception-01.jpg | reception interior | contact, new patients | yes |
| assets/chang-office-reception-02.jpg | reception interior alt | contact, about | yes |
| assets/chang-office-consult-01.jpg | consult room | appointment page, new patients | yes |
| assets/chang-community-01.jpg | community event | about, why page | yes |
| assets/chang-community-booth-01.jpg | community booth | about, why page | yes |
logo: assets/chang-logo.svg · delivered: **yes** (this closes the "SVG logo" item still open on the Notion Web DB row)
missing: **no exterior/building shot**, **no before-and-after cases**, **no individual team headshots**

## Reviews (quotable — verbatim text, not just a count)
**NONE COLLECTED. This is the build's hard blocker.** The three existing concepts deliberately shipped placeholder review framing ("Reviews come from Google and are published as written") rather than invented quotes, so nothing is reusable. 100 five-star reviews exist on the Google profile.
- [ ] TBD — 3–5 verbatim quotes with first name + last initial, pulled from the live GBP (`GBP` link on the Notion client record), tagged: first-visit story → appointment page · kid/parent story → early-orthodontics + kids-teens · Invisalign/adult story → invisalign + adults · results story → homepage
Builders are forbidden from writing a quote. Any testimonial slot without a supplied quote gets dropped, not filled.

## Appointment
type: free
name: "Free Consultation"
exam fee: free
treatment pricing published on site: **no** (see Money story — this is an open decision)
template: **short-free** (~2,000px, form in the hero, three risk-reversal checkmarks, proof counts, FREE stressed in eyebrow/checkmarks/button/microline)

## Brand
logo: assets/chang-logo.svg · colors: navy `#005DAA`, deep navy `#003B6E`, bright navy `#3E90CE`, soft clay `#EEF6F8`, ink `#1b1c1c` / `#434653`, mute `#74747c` / `#9aa0b3` · fonts: per concept — concept-1 Hanken Grotesk + Archivo Black, concept-2 Azeret Mono, concept-3 Schibsted Grotesk
direction: **quiet luxury** — but the specific visual shell is UNDECIDED. Three full 26-page concepts already exist in this folder and no selection is recorded in Notion (project still Stage 1 · Intake). See open questions.
palette source of truth: `Color-Palette_Chang Orthodontics.png` in Drive `Brand Assets - Chang Orthodontics`.

## Services (grid count: 6)
1. Braces — metal and ceramic (money page: **yes**, ads point here)
2. Invisalign — Invisalign, Teen, First, Limited, palatal expander; **Platinum Plus Provider** (money page: **yes**, ads point here)
3. Early Orthodontics / Phase 1 — interceptive treatment, expanders, space maintainers, corrective appliances (money page: no)
4. Kids & Teens (money page: no)
5. Adult Orthodontics — aesthetic braces and aligners, complex bite correction, retreatment (money page: no)
6. Airway & Expansion — airway orthodontics, MARPE, MSE; Dr. Chang holds a master's-level airway education and publishes airway research (money page: no)
also offered, covered in-page rather than as separate money pages: retainers (permanent, Hawley, clear), same-day emergency appointments **for existing patients only**, digital scans and imaging, growth and development evaluation, airway assessment, treatment planning.

## Proof
reviews: 100 five-star (the client record counts five-star reviews; it does NOT state an overall star rating, so do not print "5.0 stars" anywhere until the live GBP is checked) · patients: 10,000 served · years: 15+ · awards: board certified · Platinum Plus Invisalign Provider · UCSF Clinical Professor (since 2018) · published airway researcher
USPs (verbatim from the client record): after-school appointments · low wait times · personalized treatment · Platinum Plus Invisalign Provider · board certified · involved in the community · UCSF faculty · airway educated (master's)
trust bar: **stats, credential-forward** (Marlowe pattern: credentials first, rating aggregation alongside) — board certified · Platinum Plus Invisalign Provider · UCSF faculty · 5.0 ★ from 100 reviews · 10,000 patients · 15+ years
Numbers are real and current as of the Notion record. Do not round up, and re-verify the review count against the live GBP at build time.

## Photography
available: doctor portrait, doctor with scanner, doctor with patient, two team groups, three interior shots, two community shots — 11 approved images, all with responsive webp derivatives already generated
missing: exterior/building shot · before-and-after cases · individual team headshots · after-school/evening-appointment candid
shoot planned: unknown — TBD
constraints this creates: team page cannot run the rich or medium tier (no headshots, no names) · no before/after gallery may be built, only a placeholder section that states cases will be supplied with signed permission · the "northernmost building, between the two hotels" landmark has no supporting photo, so the contact page leans on a map, not an exterior image · stock/AI imagery is permitted **only** in the services grid.

## Team
tier: **minimal** (role counts, group photo, collective prose) · turnover risk: TBD
No staff names, roles, or headshots exist in Notion, in Drive, or on the live site — the live "Meet the Team" page is photos only ("Our Team Rocks!"). Upgrade to medium only if the client supplies names + roles + headshots.

## Money story
fork: **premium** (value and process, no numbers)
financial page: yes · financing in main nav: no
In-house financing: yes. The client record documents real monthly figures — braces $299+/mo without insurance, $199+/mo with; Invisalign $349+/mo without, $249+/mo with — but the practice is boutique, has never run an offer, and explicitly wants to start with no discount. Default is therefore a **no-numbers** financial page covering insurance, in-house payment plans, and what the free consultation includes. Publishing the monthly figures is an open decision for Jules, not for a builder.
Medicaid: **No — never mention.**
Down payment: "N/A Do Not Use" per the client record — never reference a down payment.

## Integrations
ghl webhook: TBD · booking link: none (no real-time scheduler; the free-consultation form is the conversion) · review link: from the GBP entry on the Notion client record · call tracking: CTM → GHL → FM; Google Ads call asset (650) 446-3624, **not** to be placed in site markup
analytics already provisioned: GA4 property 489387469 · GTM container 220059125 · Meta Pixel 2965520846990610 · Plerdy 72348 · Search Console on https://changortho.com/
forms: hidden UTM/gclid/fbclid attribution inputs required on every form (the practice's existing site already does this) · PHI-free fields only · both the GHL webhook and the leads-platform backup wired at launch · thank-you.html is the conversion goal
SMS appointment reminders: not wanted.

## Launch
domain: changortho.com · registrar: GoDaddy · DNS: currently SiteGround · dns controlled by: client, confirm access (build ticket step 6) · target hosting: GitHub Pages · deadline: TBD (no launch date set; project is Stage 1 · Intake) · rebuild: **yes** — replacing a WordPress/Elementor Pro site on SiteGround. Content migration and 301 mapping from the live URL tree required (`/about/`, `/about/meet-the-doctor/`, `/about/meet-the-team/`, and the rest — crawl the live site for the full list before launch).

## Page inventory  ← the build skill executes this list
Mirrors the proven 26-page structure of the existing concepts, minus `blog.html` (no posts and no content plan).
- [ ] index.html
- [ ] treatments.html
- [ ] braces.html
- [ ] invisalign.html
- [ ] early-orthodontics.html
- [ ] kids-teens.html
- [ ] adults.html
- [ ] airway.html
- [ ] retainers.html
- [ ] appointment.html  (short-free template, the single conversion destination)
- [ ] thank-you.html  (conversion goal)
- [ ] about.html  (why-choose-us)
- [ ] dr-michael-chang.html  (full bio)
- [ ] team.html  (minimal tier)
- [ ] technology.html
- [ ] reviews.html  (100 reviews clears the ~40 threshold — blocked until verbatim quotes are supplied)
- [ ] new-patients.html
- [ ] financing.html  (premium fork, no dollar figures pending decision)
- [ ] faq.html
- [ ] emergencies.html
- [ ] contact.html
- [ ] san-carlos.html  (geo/SEO page — see ASSUMED)
- [ ] privacy.html
- [ ] terms.html
- [ ] accessibility.html
- [ ] hipaa.html
- [ ] 404.html
Total: 27 pages.

## Open questions / assumptions
- **TBD (blocking the reviews page and several form-adjacent slots):** 3–5 verbatim Google review quotes with attribution. Nothing usable exists anywhere. Say the word and I'll pull them from the live GBP.
- **DECIDED 2026-08-04 (Jules):** kit avatar is **Marlowe Orthodontics**. Structure, nav naming, voice, and restraint follow Marlowe; treatment mix, age skew, page count, and proof style diverge as noted in Avatar & voice.
- **DECIDED 2026-08-04 (Jules):** visual shell is **concept-1** — "clinical instrument," data-led, schematic diagrams; Hanken Grotesk + Archivo Black; navy `#005DAA` / `#003B6E` / `#3E90CE` on soft clay `#EEF6F8`. Build in `site/`, taking the shell from `concept-1/` and the structure, nav naming, and voice from Marlowe.
  Noted at the time of the decision: concept-1 is the furthest of the three from Marlowe's restraint (concept-3 was the closest read). Where the two pull against each other, **Marlowe wins on copy and density, concept-1 wins on type, color, and layout** — keep the data-led shell but do not let it drift into promotional or high-density marketing voice.
- **TBD (decision, not research):** publish the monthly payment figures ($199–$349/mo) or keep the financial page number-free? Premium positioning and "no offers" argue for number-free; that is the default written above.
- TBD: year the practice was founded / how long in San Carlos. Without it there is no tenure claim and no © founding range.
- TBD: the town list for `areaServed`. Only Belmont is corroborated. Left as `omit` rather than guessed.
- TBD: GoHighLevel webhook URL.
- TBD: launch deadline; whether a photo shoot is planned; staff turnover rate.
- ASSUMED: `san-carlos.html` is retained as a geo/SEO page even though the single-office rule says the homepage is the location page. The homepage H1 still carries San Carlos. Reason: the page exists in all three concepts the client may have already viewed, and it is a real SEO target. Say so if you would rather drop it.
- ASSUMED: services grid of 6, in the priority order above, with braces and Invisalign as the ad-destination money pages (matches "Services in Ads": Braces, Invisalign, Free Consultation).
- ASSUMED: tagline taken from the live doctor page pending the client's own preference.
- ASSUMED: doctor bio runs the full ~400–700 word treatment. The live page plus the client record give a genuine story (UCSF 7-year program, teaching since 2018, airway research, scholarships, San Carlos resident, 49ers/Giants, Candlestick seats). A 60-word "away from the office" section still needs the client's own words.
- NOTE: the Notion Web DB row still lists "SVG logo · final list of services · client persona" as pending. All three are in fact resolved — logo is in Drive and staged locally, services are enumerated on the client record, persona is Premium Family Ortho. Worth clearing that row.
