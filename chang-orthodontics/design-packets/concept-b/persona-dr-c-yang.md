# Design: Dr. C. Yang

| Field | Value |
|---|---|
| Slug | `dr-c-yang` |
| Archetype | High-Expertise Clinical Ortho |
| Patient base | Adults seeking expertise, parents of complex-case teens, referrals from general dentists, patients with difficult cases, quality-focused decision makers |
| Example clients | Wilson, Payne |

Source of truth: [`data/personas/dr-c-yang.json`](../../../data/personas/dr-c-yang.json). This brief translates that record into concrete ad-creative direction. If the two disagree, the JSON wins and this file gets corrected.

## Creative direction

Authority, precision, and clinical depth. This is not a luxury boutique and not a family practice: it is the office other dentists refer difficult cases to. Design accordingly. Credentials, board certification, years of experience, and proven outcomes are the product, and they belong in the frame rather than in a footnote. The reader is choosing the best clinician available, and price is not their first question.

## Typography

- Direction: a traditional or transitional serif for headline paired with a neutral sans for body, credentials, and CTA.
- Credentials set in small caps or letter-spaced caps at small size, clearly subordinate to the headline but never hidden.
- Headline line height 1.2, body 1.5. Left-aligned as the default.
- Avoid rounded, playful, condensed, and display-novelty faces.

## Layout and slots

Preferred templates, in order:

1. `testimonial-frame` (outcomes and referral language)
2. `split-stack` (credential or case detail beside a portrait)
3. `hero-banner-cta` (a single authority claim)

Avoid `badge-burst`. Use `offer-card` only when an offer genuinely exists, and position it as seasonal rather than promotional.

Slot behavior:

- `headline`: the credential or the outcome. Specific beats broad. Under ten words.
- `subhead`: supporting proof, such as years in practice, case volume, or board status.
- `photo`: a real portrait of the doctor, or a treatment-outcome image. Never generic stock.
- `badge`: appropriate here for real certifications only.
- `cta`: measured and professional. "Request a consultation" rather than "Call now".
- `logo`: consistent, professional placement.
- `offer`: seasonal framing only, and never the largest element.

Density: structured and professional with a clear hierarchy. Credentials placed prominently, case detail featured. Traditional medical layout logic: title, evidence, action, in that order. Keep alignment strict so the composition reads as disciplined.

## Photography

Real doctor portraits, real operatory and technology, real outcomes. Professional lighting, neutral backgrounds, composed rather than candid. Clinical before-and-after imagery is on-brand here and must be genuine and consistently shot. Avoid family-fun imagery, staged laughter, and lifestyle stock.

## Iconography

Medical and clinical symbols, certification badges, achievement markers, professional credential indicators, quality markers. Functional and serious. No playful icons, no illustration.

## Texture and surface

Professional and clean, medical-grade appearance, subtle refined surfaces, traditional backgrounds. Avoid playful textures, confetti, patterns, and heavy grain.

## Copy and messaging

- Lead with credentials, successful outcomes, and quality. Offers are minimal or framed as seasonal.
- Voice: authoritative, credible, clinical. Speak to a reader who wants the best clinical care available.
- Headline patterns that fit: "Board-certified, X years, complex cases", "Referred by dentists across the region", "Difficult cases are our specialty".
- CTA patterns: "Request a consultation", "See case results", "Refer a patient".
- Avoid discount vocabulary entirely, and avoid warm family framing. Both weaken the authority position.

## Motion

Deliberate and controlled. `fade-in` on photo, `rise-in` on headline, credentials appearing as a steady sequence rather than a burst. No bounce, no pop. Timing slightly slower than default. Honor `reducedMotion: static`.

## What to avoid

Playful or casual aesthetics. Budget messaging. Overly decorated designs. Trendy or gimmicky elements. Family-fun imagery.

## Pre-ship checklist

- [ ] A specific credential or outcome is in the frame.
- [ ] Credentials are accurate and current.
- [ ] No discount or urgency language.
- [ ] No family-fun or playful imagery.
- [ ] Before-and-after images, if used, are genuine and consistently shot.
- [ ] Alignment strict, hierarchy unmistakable.

## Website homepage

This section carries the persona into a practice website homepage. **The "Layout and slots" section above is ad-frame direction and does not apply here.** Everything else above does.

**What this file decides, and what it does not.** Three inputs go into a homepage build:

- **`HOMEPAGE-DESIGN-BRIEF.md`** decides structure: which sections exist, how many cards or cells or rows, what is claimable, accessibility.
- **`CLIENT-BRIEF.md`** decides facts and brand: palette, logo, typefaces, photography, proof numbers, and the link to that client's brand assets folder.
- **This file** decides look and feel only.

This file never sets a color, a typeface, or a count. Where it seems to imply one and the client brief names one, **the client brief wins**. The `accentColor` in this persona's JSON is an ad-tool identifier, not a website brand color; ignore it here. This archetype covers several practices (Wilson, Payne), so nothing here is specific enough to override a client's own brand.

**Look and feel for this archetype**

- **The tension to hold:** this is not a luxury boutique and not a family practice. It is the office other dentists refer difficult cases to. Credentials, board certification, years in practice, and proven outcomes are the product and belong in the page rather than in a footnote. The visitor is choosing the best clinician available and price is not their first question.
- **Density:** structured and professional. Traditional order within each section: title, evidence, action. **Strict alignment** so the page reads as disciplined. `--section-y` mid-range, consistent, never varied for effect.
- **Type character:** a traditional or transitional serif for headings over a neutral sans for body, credentials, and CTAs. Credentials in small caps or letter-spaced caps at small size, clearly subordinate to the heading but never hidden. `--leading-tight` near 1.2, `--leading-body` near 1.5. Left-aligned by default. Avoid rounded, playful, condensed, and novelty faces.
- **Color behavior:** restrained and professional within the client's palette. Contrast used for hierarchy, not personality.
- **Imagery:** real doctor portraits, real operatory and technology, real outcomes. Professional lighting, neutral backgrounds, composed rather than candid. Clinical before-and-after imagery is on-brand here **when genuine and consistently shot**. Avoid family-fun imagery, staged laughter, and lifestyle stock.
- **Motion:** deliberate and controlled, slightly slower than default. Credentials appear as a steady sequence, never a burst. No bounce, no pop. Honor `prefers-reduced-motion`.
- **Copy register:** authoritative, credible, clinical. CTAs measured ("Request a consultation", never "Call now"). **Avoid discount vocabulary entirely and avoid warm family framing just as firmly.** Both weaken the authority position.

**Homepage additions to the pre-ship checklist above**

- [ ] A specific credential or outcome appears above the fold.
- [ ] Every credential on the page is accurate and current.
- [ ] No discount or urgency language.
- [ ] No family-fun or playful imagery.
- [ ] Before-and-after images, if used, are genuine and consistently shot.
- [ ] Alignment strict across every section.

## References

- Figma design file: https://www.figma.com/design/JflNyTNCRevPIpUZop9aKr/Dr.-Yang
- Examples in the wild: https://www.ucsfdentalcenter.org/
- Pinterest moodboard: https://pin.it/45xobIREu
