# Romans Orthodontics — full site (kit-compliant build)

Built 2026-08-04 against the [OrthoBoost Website Kit](https://orthoboost-website-kit.vercel.app). Visual system: concept A ("Live a little" — Fraunces/Archivo/IBM Plex Mono, paper/slate/copper editorial), carrying concept C's conversion content. Tagline "live a little, smile a lot" is **client-approved**.

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
| Pricing & Financing | financial.html | no dollar figures — all cost answers route to the exact-quote-at-free-consult promise |
| Team | team.html | minimal tier (role counts) — solo doctor + 1 part-time coordinator, per sales notes |
| Locations ×3 | — none | **Single location → no location pages** (kit location playbook rule) |
| Reviews | — deferred | **Zero real reviews exist (practice open ~8 weeks). Kit rule 2 forbids inventing counts/quotes.** Homepage carries a credentials ledger instead, with a marked swap-in comment for the kit review grid at 5+ real Google reviews. |
| Contact / legal | contact / privacy / terms / refund-policy / accessibility | legal pages are placeholder text with visible attorney-review notices |

Kit conventions on every page: noindex, 1200px content column, sticky header with phone + CTA, mobile bottom bar (Call / Free consult / Directions), CTA routing to free-consult.html, real practice photos only (6 exist — fuller shot list requested).

## Facts & validation

All copy facts validated 2026-08-04 against the Notion client card and the legacy romansorthodontics.com (education, fellowship, research, volunteer work, Polish language, financing, service areas). Held on purpose: "5,000+ patients served" (client-reported, unverified, needs career framing for an 8-week-old practice). Visible `[CONFIRM]` markers: exact office hours; doctor's away-from-office 60 words.

## Before launch

Wire form POST → GoHighLevel + leads backup · thank-you.html as conversion goal · attorney review of all 4 legal placeholders · remove noindex · 301s from legacy URLs (/about-us, /treatments, /early-treatment, /teen-treatment, /adult-treatment, /clear-aligners, /clear-braces, /metal-braces, /how-to-get-started, /contact-us, /faq, /terms-conditions, /privacy-policy, /refund-policy, /accessibility-statement) · Lighthouse 90+ + real-device mobile pass (build-ticket QA gate). Services beyond the current five (airway/TMJ, sleep appliances, laser gum recontouring, aligner variants) await the Master Site Map from SEO before new doorway pages are added.

## Revisions

**2026-08-04 · logo + header** — Header and footer now carry the **full horizontal lockup** (215×42 header, 204×40 footer) instead of a collapsed lockup and a stretched icon-mark. Two real bugs were behind it:

- **Desktop header logo was rendering at 20px wide.** Brand + nav + phone + CTA needed 1335px inside a 1200px bar, so flex shrank the brand cell to 49px and the lockup with it. Fixed by reclaiming 122px (nav cells 22→13px, phone block 26→18px, header CTA 30→22px, brand gutter 28→20px), pinning `.brand`/`.brand img` to `flex: 0 0 auto` so it can never silently collapse again, and moving the drawer breakpoint 1150→1264px — below 1265 the row cannot fit, so the hamburger takes over. 1280 and 1366 laptops keep the full desktop nav.
- **Footer mark was rendering 342×34**, stretched from a mostly-empty square canvas.
- **New asset:** `romans-orthodontics-lockup-horizontal-reversed-white.svg` — the kit's 9-file logo standard had a reversed *mark* but no reversed *lockup*, and the ink in the two-colour lockup (#264653) is invisible on the slate footer.
- **Footer legal row overflowed at 390px** (doc scrollWidth 418, pre-existing) — `.flinks` now wraps.

Verified across all 17 pages: `scrollWidth === 390`, header 215×42, footer 204×40, no tap target under 44px. Header checked at 2560/1440/1366/1280/1200/390.
