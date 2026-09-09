# Valley Orthodontics homepage

## Current refinement, 9 September 2026

All three concepts have been simplified per the user's request to remove AI design antipatterns. See DESIGN-DECISIONS.md for the ongoing direction. Decorative labels, numbered treatment headings, arrow-filled links, repetitive benefit/credential strips and slogan copy were removed from the actual HTML. Concept 1 now uses Dr. Haines' real portrait in its doctor section. Concept 2's office-hours selector and its script include were removed; hours are displayed directly. Concept 3 retains the user-selected serif direction with factual headings and without the oversized credential strip. Repetitive card borders, ornamental backgrounds and large CTA panels were reduced.

`review-concepts.cjs` checks the cleanup and generates fresh desktop/mobile visual-review screenshots. The individual verification scripts cover 390, 768, 1280 and 1600px, phone links, images, navigation, FAQs, hidden unconfigured forms, structured data and JavaScript-free behavior. No conversion-rate increase is claimed.

## Concept 3

Added 9 September 2026 as `valley-orthodontics-concept-3.html` with its own standalone stylesheet. Editorial serif direction from the third user reference: portrait-led hero, typographic credentials, treatment spread, office story, dark first-visit section and restrained booking invitation. Georgia is a concept presentation choice, not an assertion about the brand font. Concepts 1 and 2 are unchanged.

Real Dr. Haines portrait sourced from the practice's own biography page, https://valleyorthoak.com/meet-dr-haines/; image https://valleyorthoak.com/wp-content/uploads/2024/06/ZGAXA8PA.jpg. Downloaded and visually inspected 9 September 2026; optimized local WebP. No mockup person substituted for the doctor. No review numbers or experience figures adopted from the reference.

`node verify-concept-3.cjs` passed at 390, 768, 1280 and 1600px. Verified image loading, phone booking, section links, FAQ, navigation, no-JavaScript fallback, preview noindex and valid schema. Portrait intrinsic-height issue corrected and checks rerun. Local preview only; no deployment.

## Concept 2

Added 9 September 2026 as `valley-orthodontics-concept-2.html`, with isolated concept stylesheet and weekday-hours script. Concept 1 remains at `index.html`. The second supplied reference guides the teal header, pale background, large headline, white scheduling panel and illustrated benefit strip. Scheduling is adapted to an office-hours selector and telephone booking, with no invented availability or reservation confirmation. Retains the same verified services, NAP, structured data and supporting content. No ratings, travel times, monthly financing promises or room-specific amenities inferred from the mockup.

Preview: http://127.0.0.1:4321/valley-orthodontics-concept-2.html. `node verify-concept-2.cjs` passed at 390, 768, 1280 and 1600px, including weekday selection, phone targets, navigation, image loading, no-JavaScript fallback and no horizontal overflow. No deployment performed.

Local static review build, 8 September 2026. No deployment performed.

## Direction

Update: the user selected an attached visual reference. `reference-style.css` applies its navy, golden buttons, bold condensed-system headings, compact service navigation and full-bleed split hero. These are explicit concept presentation overrides; original brand tokens and logo artwork remain unchanged. The reference's patient image, rating, membership marks and twenty-year doctor claim are not used as factual evidence. Existing approved copy and real practice photography remain in place.

Working local-community concept from CODEX-HANDOFF.md. Supplied brand tokens are copied without alteration; supplied SVGs and interim system font are used. No concept or typeface approval is implied.

## Preview

Run `python -m http.server 4321 --bind 127.0.0.1` from this folder and visit http://localhost:4321/.

## Conversion and launch work

Usability refinement: the public booking flow now shows an active call-to-book panel. The prepared four-field form remains hidden and disabled until backend integration. The hero and mobile booking action call the office directly; the header scrolls to the booking panel. Navigation now has four clear destinations, collapses below 1101px, supports Escape and outside-click dismissal, and remains available without JavaScript. The mobile booking bar hides when the booking card enters view. Treatment titles explicitly name braces and Invisalign; larger links, clear focus states and reduced section spacing improve scanning and touch use.

Refinement verification passed at 390, 768, 1280 and 1600px, including tablet/mobile menu behavior, direct booking links, hidden intake form, no-JavaScript booking fallback and no horizontal overflow. Separately verified mobile booking-bar suppression and visually inspected fresh desktop and mobile screenshots. These are usability improvements, not evidence of a measured conversion-rate increase. Review references: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md and https://www.w3.org/WAI/tutorials/forms/.

- Four-field consultation markup is intentionally disabled. No data is collected or sent, no success state is fabricated. Visible call fallback works without JavaScript.
- TODO: Provision OrthoBoost Leads backup delivery, followed by the GoHighLevel inbound webhook. Add the approved integration, privacy/consent copy, validation, duplicate protection and delivery failure handling before enabling the form. Keep webhook credentials server-side.
- Preview has `noindex, follow`; remove this directive only for the approved live launch. Canonical points to https://valleyorthoak.com/.
- Service and supporting links use current live absolute URLs so the homepage-only preview does not link to missing local pages.
- No tracking installed because an approved analytics ID was not supplied. Add one approved tag at launch.
- Outstanding client items from the handoff remain outstanding, including concept approval, heading face, payment figure and Instagram identity.

## Photography provenance

- Reception: practice's existing public office photo, https://valleyorthoak.com/wp-content/uploads/2024/08/Office-4.jpg, downloaded 8 September 2026. Visually inspected; includes reception staff. Used as an interim client-owned office photo because the approved Drive interior originals were not located. Confirm current appearance against the new Winners drop before launch.
- Community: approved Winners image `community-alpar-cleanup-team-001.jpg`, from the local copy in `C:/Users/Chris/valley-orthodontics-launch-ads/src-photos/`. This source contains adults and children, contradicting the handoff's blanket statement that no photos contain people. The handoff specifically lists this image as a Winner. No new identities or testimonial claims inferred.
- Responsive WebP files are derived with EXIF orientation normalized. No stock or generated photography is used.

## Content sources

Practice details and approved claims: CODEX-HANDOFF.md, sections 6 and 7. Current homepage and treatment URLs checked at https://valleyorthoak.com/ on 8 September 2026. The current site distinguishes the practice's 20-plus years from Dr. Haines' experience; this build omits an experience number to avoid conflating them. No ratings, monthly payments or credential marks are used.

## Verification

`node verify-homepage.cjs` uses the bundled Playwright runtime and local Chrome. Passed at 390, 768, 1280 and 1600 pixels: no horizontal overflow; images load with alt text; one H1; valid schema; exact phone targets; working section anchors; mobile menu and Escape dismissal; native FAQ expansion; form fields disabled. No browser errors or failed local requests. Navigation and call fallback also checked with JavaScript disabled. Brand tokens match the source byte for byte. Screenshot outputs are local review artifacts, not site assets.

Concept 2 lower-page revision: distinct treatment rows and decision panel, office/doctor photo composition, vertical first-visit guide, compact community feature, two-column FAQ and combined booking/location close. Concept 1 unchanged. Verified all four required widths and visually inspected the complete desktop page. All new content uses the existing practice facts.
