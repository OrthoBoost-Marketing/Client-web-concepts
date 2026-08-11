# Chang Orthodontics · Concept B · Audit Record

Date: 2026-08-11 · Page audited: `concept-b/index.html` (homepage only)
Mechanical half: `practice-site-primitives/scripts/audit-site.mjs --dir concept-b --brief ../CLIENT-BRIEF.md`
Browser checks: Playwright/Chromium at 1440x1000 and 390x844.

> Format note: the reference audit record lives in a Claude Design artifact that cannot be opened
> from this machine (WebFetch is intercepted, the Chrome extension is disconnected, and the in-app
> browser is not signed in). This record is therefore built to the five-tier structure encoded in
> `audit-site.mjs` plus the judgment items its header names. If the artifact's format differs,
> reshape this file rather than re-running the checks.

---

## Result

**Tiers 1, 2 and 4 clear. One Tier 3 finding, which is deliberate. Three disclosed placeholders.**

| Tier | Finding count | Status |
|---|---|---|
| 1 · truth and legal | 0 | clear |
| 2 · structure and cardinality | 0 | clear |
| 3 · SEO plumbing | 1 | accepted, see below |
| 4 · accessibility and mobile | 0 | clear |
| 5 · consistency and craft | 46 | non-blocking, see below |

---

## Tier 1 · truth and legal

Clear. Every numeral rendered as visible text was checked against `CLIENT-BRIEF.md`: `10,000`,
`100`, `15`, `2018`, `2026`, and the NAP digits. Nothing else appears.

Removed from the supplied design primitive because it was fabricated: a 4.9 rating, "9k+ smiles",
a 14-month average plan, an "88% of new patients arrive through a family referral" statistic,
"0% financing", four invented testimonials, the name "Dr. Evelyn Chang", a named treatment
coordinator, a Pasadena address and phone number, and Unsplash stock humans.

Voice bans verified by search, not by intention: no em-dashes, no "free exam", no Medicaid, no
down payment, no 0% interest, no urgency or discount language, and no printed star rating (the
client record counts five-star reviews and does not state an average).

## Tier 2 · structure and cardinality

Clear. Section order matches the kit's own sample homepages, which outrank the written specs where
they disagree:

hero → proof band (in the hero) → meet the doctor → USP zigzag ×3 → mid-page CTA → authority strip
→ reviews → service cards → locations → footer

- Services: **6** (permitted counts are 3, 6, 9).
- USP zigzag: **3** blocks, each a real office photo, one differentiator, its own CTA, none saying "Book now".
- Reviews: grid of **3**, no carousel.
- Proof band: exactly **3** verified points, icon + bold line + sub-line, no wrapping.
- One `<h1>`, `<h2>` per section. No form on the homepage. No carousels or auto-rotating anything.
- Reviews precede service cards, per all five kit samples.
- No closing CTA, per four of five kit samples.

## Tier 3 · SEO plumbing

**1 finding: `noindex` on an indexable page. Accepted, not a defect.**
This preview is served from a public GitHub Pages URL and must not compete with the client's live
site at the canonical `changortho.com`. The tag carries a build note and comes off at launch on the
real domain. The audit cannot know the difference between a staging noindex and a shipped one.

Otherwise clear: unique title and meta description, canonical set, `LocalBusiness`/`Dentist`
JSON-LD built only from brief facts. `geo` and `areaServed` are **omitted** because the brief has
none; `openingHours` is included because the hours are confirmed. No `aggregateRating` and no
`Review` schema on Google-sourced reviews.

## Tier 4 · accessibility and mobile

Clear, with Playwright installed so the browser half actually ran. (Without Playwright the script
silently skips this tier and reports it as a blocking finding.)

- `document.documentElement.scrollWidth === 390` at a 390px viewport. No horizontal scroll.
- Header nav, buttons, in-copy CTAs and the mobile bar all clear 44px. The only sub-44px control is
  the skip link, which is 1×1 until focused, by design.
- Sticky bottom bar: Call · Book · Directions, with Book the wide centre segment, hidden when the
  soft keyboard opens via a `visualViewport` listener.
- Reveals fail open: the hidden state only exists once JS arms it, and a 2s timer force-reveals
  anything still at `opacity:0`. `prefers-reduced-motion` disables all motion and forces content visible.
- Contrast measured, not estimated: ink on surface 15.9:1, muted ink 9.1:1, white on `--brand-ink`
  11.6:1, white on `--brand` 6.7:1.
- 19 images, 0 broken. All 24 inline icons render.

## Tier 5 · consistency and craft — 46 non-blocking

Almost all of these are links to the 24 pages that do not exist yet, which is expected for a
homepage-only concept and is what `BUILD-QUEUE.md` predicts.

---

## Judgment half (requires eyes, not the script)

**Photography — pass, with a caveat.** Every photo is a real Chang Orthodontics image. No stock,
no AI, no synthetic patients. The hero is the doctor **with** a patient, per Dr. Ty's standing rule.
Caveat: only ten approved photos exist, so two are reused between the service cards and other
sections. Stock is permitted in the services grid only and would resolve the repetition.

**Review quotes — FAIL, and it is the build's one hard blocker.** Zero verbatim quotes exist
anywhere. Three cards ship as visibly marked `[REVIEW QUOTE NEEDED]` placeholders with the standing
disclosure line. No quote was written, paraphrased or illustrated.

**Claims — pass.** Nothing on the page could be pasted verbatim onto a competitor's site. The
differentiators are the UCSF clinical professorship, the published 3-D airway research, the
Platinum Plus tier, and single-doctor continuity.

**Credential marks — partial.** Invisalign and the University of California, San Francisco are real
public-domain SVGs, muted to grayscale. The American Board of Orthodontics mark is not obtainable
as an official file anywhere public, so that slot stays typographic; it was not redrawn. The UCSF
mark **needs sign-off before launch** — the file is public domain, but universities restrict
third-party use and a logo can read as institutional endorsement rather than a faculty appointment.
See `assets/logos/SOURCES.txt`.

---

## Open before launch

1. **Pull 3 to 5 verbatim Google review quotes** with first name and last initial. Hard blocker.
2. **UCSF logo sign-off**, or fall back to the words "UCSF Faculty, Orthodontics".
3. **ABO official logo file** from the client or abortho.org.
4. **Remove `noindex`** on the real domain.
5. **Compile the CDN stack.** Tailwind, Iconify, GSAP and Lenis load from CDNs, which Dr. Ty's
   output spec forbids: one `<style>` block, Google Fonts as the only external resource.
6. Self-host both typefaces; they are currently render-blocking from Google Fonts.
7. No OG image (needs 1200×630) and no favicon set.
8. Service-card imagery: supply service-specific shots or approve stock for that section.
9. Founding year unknown, so no tenure claim and a single-year copyright.
10. GHL webhook URL for the appointment page.
