# Romans Orthodontics: full site (kit-compliant build)

Built 2026-08-04 against the [OrthoBoost Website Kit](https://orthoboost-website-kit.vercel.app). Visual system: concept A ("Live a little": Fraunces/Archivo/IBM Plex Mono, paper/slate/copper editorial), carrying concept C's conversion content. Tagline "live a little, smile a lot" is **client-approved**.

## Avatar mapping

Primary avatar: **BrightWay** (free-consult, financing-forward orthodontist), adapted to a single location and a solo doctor (cross-referenced with Wild Smiles for single-location patterns and Marlowe for the solo-doctor 12-page floor).

| Kit page (BrightWay) | Romans equivalent | Notes |
|---|---|---|
| Homepage | index.html | 6-doorway services index, first-visit steps, 6-Q FAQ (cost + city included) |
| Service pages | braces-for-kids / braces-for-adults / invisalign / early-treatment / retainers | one empathy angle each; cost FAQ on every page |
| Free consult | free-consult.html | free-consult economics: 4-field PHI-free form in hero, hidden UTM/gclid/fbclid attribution set, OrthoSync as secondary (only page allowed) |
| Thank you | thank-you.html | conversion goal; no time-window promises |
| Why choose us | why-romans.html | 6 USPs, each with a stated proof line; no form |
| Doctor bio | dr-romans.html | 6-beat story-first; away-from-office = intake placeholder |
| Pricing & Financing | financial.html | no dollar figures: all cost answers route to the exact-quote-at-free-consult promise |
| Team | team.html | minimal tier (role counts), solo doctor + 1 part-time coordinator, per sales notes |
| Locations ×3 |, none | **Single location → no location pages** (kit location playbook rule) |
| Reviews |: deferred | **Zero real reviews exist (practice open ~8 weeks). Kit rule 2 forbids inventing counts/quotes.** Homepage carries a credentials ledger instead, with a marked swap-in comment for the kit review grid at 5+ real Google reviews. |
| Contact / legal | contact / privacy / terms / refund-policy / accessibility | legal pages are placeholder text with visible attorney-review notices |

Kit conventions on every page: noindex, 1200px content column, sticky header with phone + CTA, mobile bottom bar (Call / Free consult / Directions), CTA routing to free-consult.html, real practice photos only (6 exist: fuller shot list requested).

## Facts & validation

All copy facts validated 2026-08-04 against the Notion client card and the legacy romansorthodontics.com (education, fellowship, research, volunteer work, Polish language, financing, service areas). Held on purpose: "5,000+ patients served" (client-reported, unverified, needs career framing for an 8-week-old practice). Visible `[CONFIRM]` markers: exact office hours; doctor's away-from-office 60 words.

## Before launch

Wire form POST → GoHighLevel + leads backup · thank-you.html as conversion goal · attorney review of all 4 legal placeholders · remove noindex · 301s from legacy URLs (/about-us, /treatments, /early-treatment, /teen-treatment, /adult-treatment, /clear-aligners, /clear-braces, /metal-braces, /how-to-get-started, /contact-us, /faq, /terms-conditions, /privacy-policy, /refund-policy, /accessibility-statement) · Lighthouse 90+ + real-device mobile pass (build-ticket QA gate). Services beyond the current five (airway/TMJ, sleep appliances, laser gum recontouring, aligner variants) await the Master Site Map from SEO before new doorway pages are added.

## Revisions

**2026-08-04 · logo + header**: Header and footer now carry the **full horizontal lockup** (215×42 header, 204×40 footer) instead of a collapsed lockup and a stretched icon-mark. Two real bugs were behind it:

- **Desktop header logo was rendering at 20px wide.** Brand + nav + phone + CTA needed 1335px inside a 1200px bar, so flex shrank the brand cell to 49px and the lockup with it. Fixed by reclaiming 122px (nav cells 22→13px, phone block 26→18px, header CTA 30→22px, brand gutter 28→20px), pinning `.brand`/`.brand img` to `flex: 0 0 auto` so it can never silently collapse again, and moving the drawer breakpoint 1150→1264px: below 1265 the row cannot fit, so the hamburger takes over. 1280 and 1366 laptops keep the full desktop nav.
- **Footer mark was rendering 342×34**, stretched from a mostly-empty square canvas.
- **New asset:** `romans-orthodontics-lockup-horizontal-reversed-white.svg`: the kit's 9-file logo standard had a reversed *mark* but no reversed *lockup*, and the ink in the two-colour lockup (#264653) is invisible on the slate footer.
- **Footer legal row overflowed at 390px** (doc scrollWidth 418, pre-existing): `.flinks` now wraps.

Verified across all 17 pages: `scrollWidth === 390`, header 215×42, footer 204×40, no tap target under 44px. Header checked at 2560/1440/1366/1280/1200/390.

**2026-08-04 · hero above the fold** — Every hero now clears the first screen at 1440x800, 1366x768, 1280x720 and 390x844, verified per page.

- The 10 photo-hero pages get `.hero-sec`: a flex column with a definite `height: calc(100svh - 76px - 12px)` (and minus the 72px mobile bar below 1000px), so the hero photo flexes to absorb whatever the text leaves over and the caption always lands inside the fold. Note `height`, not `max-height`: with `max-height` the flex shrink resolves against the auto height and the last child overflows by ~18px. Hero type and padding came down to match (H1 clamp 40-68px, hero-top 40px, hero-meta 28/22).
- The 12px is deliberate, it leaves a sliver of the next section showing so the page reads as scrollable.
- free-consult has no photo to flex, so the tall left column moved out instead. "What to bring" and the "book right now" scheduler block are now their own `.consult-extra` section directly below the hero, and the form block, fields and labels are tighter. Hero is now eyebrow, H1, lede and the whole 4-field form with its button and note, all above the fold. Tradeoff: whitespace under the lede on desktop, because the form column is the tall one. Anything put back there stacks on mobile and pushes the form under the fold.
- Measure in the settled reveal state. `.rv` carries `transform: translateY(18px)` until the observer adds `.in`, so an un-settled measurement reads 18px pessimistic.

**2026-08-04 · hero rule-8 fix + conversion pass** — Closes the only hard violation against the kit hero spec, and reworks the hero's conversion mechanics without adopting any of the five preapproved layouts.

*Rule 8, LCP image.* Every photo was a full-resolution camera original: the homepage hero was 3,808 KB against a 200 KB cap, and the library totalled 22.6 MB. All eight are now WebP, sized to the width they actually display at, each verified under 200 KB (largest 190 KB), library total 1,267 KB, 5.5% of before. JPG masters stay in `assets/` and are no longer referenced. The hero photo is also no longer a CSS `background-image`: it is a real `<img>` with intrinsic width and height, `fetchpriority="high"`, `decoding="async"`, and a matching `<link rel="preload" as="image">` in the head, so the LCP element is discoverable in the first HTML parse. Backgrounds cannot take `fetchpriority` and are found late, which is why the preload half of rule 8 could not have been satisfied in the old markup.

*Conversion pass.* The CTA block is now a stack in its own grid cell: primary button, then a labelled secondary ("or call" + number, grouped so it never wraps apart), then a risk-reversal microline. Every microline claim already appears in approved copy on that page, so nothing new is being asserted. Mobile gets a full-width primary button. `hero-meta` switched to `align-items: start` now that the CTA column is the taller one.

*Deliberately not mirrored.* No trust chips or pills (BrightWay), no floating review badge (Wild Smiles), no photo-beside-headline split (Marlowe, Maple Grove), no background video (Sage & Stone). The arrangement stays concept A's: full-width eyebrow and H1, then lede against the CTA stack, then a full-bleed photo band with the editorial caption row.

Still true after the change: every hero clears the fold at 1440x800, 1366x768, 1280x720 and 390x844. Mobile photo floor dropped 120px to 96px so the longest H1 plus microline still fits at 390.

*Not done here:* the three concept pages still reference the JPG masters. They are frozen artifacts, so they were left alone.

**2026-08-04 · kit elements borrowed into concept A, plus column alignment**

*Alignment cleanup.* Multi-column rows now line their bodies up across columns using `grid-template-rows: subgrid` on the row children (`.step`, `.proof-cell`, `.authority-cell`), with an `@supports not` fallback that sets a `min-height` on the heading instead. Also `gap: 44px` on `.steps` was applying to rows as well as columns, which is what opened the space between the headings and the bodies; it is `column-gap` + `row-gap: 0` now.

*Four kit elements, authored in concept A's language rather than copied.*
- **Risk reversal.** Three-point block, mono ordinal + serif claim + body on one baseline, no checkmark glyphs (this design has no icons anywhere). On free-consult it sits directly under the hero form; on the homepage the three points run as a rule-separated line inside the copper CTA band.
- **Includes list.** free-consult gets a four-row "What the visit includes" as Sec. 02, closing on the leave-with-a-plan line. The homepage gets a tighter three-row "What you leave with" inside Sec. 04.
- **Mid-page CTA band.** The homepage already had one; free-consult now carries the same copper band before the FAQ, so the two pages match.
- **Authority band.** `paper-2` ground with slate hairlines, institution set in mono above the credential in Fraunces. **Type only, no borrowed marks.** ABO, AAO and Invisalign logos are not used, and neither AAO membership nor Invisalign provider tier is claimed, because neither appears anywhere in the approved copy. Both are marked `[CONFIRM]` in an HTML comment on each page.

*Naming.* The new component is `.claims` / `.claim`, not `.ledger`. `.ledger` already existed as the two-column credentials grid in the homepage's Sec. 05, and reusing the name laid the new rows out two-up.

Every claim in the new copy already appears in approved copy on the page it sits on. Nothing new is asserted to patients.

*Open item for the client:* confirm AAO membership and Invisalign provider status before either is added to the authority band.
