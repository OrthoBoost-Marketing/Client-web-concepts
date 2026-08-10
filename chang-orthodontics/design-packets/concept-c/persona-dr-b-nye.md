# Design: Dr. B. Nye

| Field | Value |
|---|---|
| Slug | `dr-b-nye` |
| Archetype | Science-Driven Holistic Clinic |
| Patient base | Adults, health-conscious professionals, complex case patients, evidence-minded wellness seekers, patients wanting holistic care with scientific backing |
| Example clients | Nautical |

Source of truth: [`data/personas/dr-b-nye.json`](../../../data/personas/dr-b-nye.json). This brief translates that record into concrete ad-creative direction. If the two disagree, the JSON wins and this file gets corrected.

## Creative direction

Credible wellness through research and testing. This persona sits between functional medicine and modern dentistry, and the design has to hold both sides at once: rigorous enough that an evidence-minded reader trusts it, whole-body enough that they know it is not conventional dentistry. Data is the hero. Show diagnostics, testing, and whole-body connections as the reason to choose this practice, and never make a claim the practice cannot back.

## Typography

- Direction: a precise neutral sans for everything, optionally a monospace for figures, units, and data labels.
- Numbers matter. Use tabular figures wherever measurements or percentages appear.
- Headline at semibold rather than extrabold. Authority through precision, not volume.
- Line height 1.25 headline, 1.5 body. Small caps or letter-spaced labels for section markers on data panels.
- Avoid script, rounded, and hand-drawn faces.

## Layout and slots

Preferred templates, in order:

1. `split-stack` (claim on one side, evidence or diagram on the other)
2. `hero-banner-cta` (single research-backed claim over photography)
3. `testimonial-frame` (complex-case outcomes told by the patient)

Avoid `badge-burst`. Starbursts undercut scientific credibility. Use `offer-card` only for a genuinely diagnostic offer such as a comprehensive assessment, never a discount.

Slot behavior:

- `headline`: the finding or the capability, stated plainly. Under ten words.
- `subhead`: the evidence, the test, or the mechanism. One clear sentence.
- `photo`: clinical-modern or diagram-forward. Charts and body-system illustrations are legitimate content in this slot.
- `cta`: professional and specific, pointing at an assessment rather than a booking.
- `logo`: clean placement, consistent across the campaign.
- `badge`: only for real credentials or certifications, never as a promotional burst.

Density: scientific organization. Clear sections, room for a chart or an infographic element, professional structure. Information-forward is fine as long as hierarchy is obvious. Respect the Story safe bands so data elements are never clipped. Where a chart encodes variables visually, keep that encoding consistent across the whole campaign so the same treatment always means the same thing.

## Photography

Modern clinic interiors, diagnostic equipment in use, testing and imaging, whole-body context. Clean light, real settings. Balance: if a frame looks like a hospital, warm it; if it looks like a spa, add rigor. Avoid glowing auras, energy visualizations, crystals, and stock lab imagery that has nothing to do with dentistry.

## Iconography

Scientific symbols, data and testing icons, body-system diagrams, research indicators. Modern professional line work, balanced between medical and wellness. Avoid pseudoscientific symbols of every kind: chakras, energy fields, aura diagrams.

## Texture and surface

Clean scientific textures, modern materials, subtle natural elements, professional finishes. Balance clinical and holistic deliberately. Avoid heavy organic textures on one side and cold sterile gloss on the other.

## Copy and messaging

- Lead with expertise, diagnostics, and research-backed care. Scientific yet holistic, data-driven yet whole-body.
- Voice: professional, modern, evidence-based. Never pseudoscientific.
- Headline patterns that fit: "We test before we treat", "Oral health is whole-body health, measured", "Diagnostics first, then a plan".
- CTA patterns: "Request a comprehensive assessment", "See our diagnostic process", "Book an evaluation".
- Every claim needs a real basis. If a stat appears in an ad, the practice must be able to source it. Do not invent figures to fill a chart.

## Motion

Sequential and explanatory. Reveal data elements in reading order so the argument builds: photo `fade-in`, headline `rise-in`, then the evidence element, then the CTA. Chart or diagram elements may draw on rather than pop. No bounce. Honor `reducedMotion: static`, and make sure the static frame still carries the evidence.

## What to avoid

Pseudoscience imagery. Overly spiritual aesthetics. Unsubstantiated claims. Crystal, chakra, or energy symbols. Too clinical or sterile. Pure alternative-medicine look. Anything lacking scientific backing.

## Pre-ship checklist

- [ ] Every claim is sourceable by the practice.
- [ ] No invented statistics or placeholder figures.
- [ ] Frame reads credible and integrative, not one or the other.
- [ ] Numbers set in tabular figures, units labeled.
- [ ] No energy, aura, or chakra imagery.
- [ ] Chart encoding consistent with the rest of the campaign.
- [ ] Static export still communicates the evidence.

## Website homepage

This section carries the persona into a practice website homepage. **The "Layout and slots" section above is ad-frame direction and does not apply here.** Everything else above does.

**What this file decides, and what it does not.** Three inputs go into a homepage build:

- **`HOMEPAGE-DESIGN-BRIEF.md`** decides structure: which sections exist, how many cards or cells or rows, what is claimable, accessibility.
- **`CLIENT-BRIEF.md`** decides facts and brand: palette, logo, typefaces, photography, proof numbers, and the link to that client's brand assets folder.
- **This file** decides look and feel only.

This file never sets a color, a typeface, or a count. Where it seems to imply one and the client brief names one, **the client brief wins**. The `accentColor` in this persona's JSON is an ad-tool identifier, not a website brand color; ignore it here.

**Look and feel for this archetype**

- **The tension to hold:** credible wellness through research and testing. The page must be rigorous enough that an evidence-minded reader trusts it and whole-body enough that they know it is not conventional dentistry. If a section reads like a hospital, warm it. If it reads like a spa, add rigor.
- **Density:** scientific organization. Clear sections, obvious hierarchy, room for a diagram or data element. Information-forward is fine here as long as the hierarchy carries it. `--section-y` sits mid-range.
- **Type character:** a precise neutral sans throughout, optionally a monospace for figures, units, and data labels. Headings semibold rather than extrabold: authority through precision, not volume. **Tabular figures wherever measurements or percentages appear.** `--leading-tight` near 1.25, `--leading-body` near 1.5. Small-caps or letter-spaced labels for section markers. Avoid script, rounded, and hand-drawn faces.
- **Color behavior:** clean and deliberate within the client's palette. Where any visual encoding appears (a chart, a diagram, a color-coded element), **keep the encoding consistent across the entire page** so the same treatment always means the same thing.
- **Imagery:** modern clinic interiors, diagnostic equipment in use, testing and imaging, whole-body context. Charts and body-system illustrations are legitimate content, not decoration. Avoid glowing auras, energy visualizations, crystals, and stock lab imagery unrelated to dentistry.
- **Motion:** sequential and explanatory, revealing in reading order so the argument builds. Diagrams may draw on rather than pop. Honor `prefers-reduced-motion`.
- **Copy register:** professional, modern, evidence-based, never pseudoscientific. CTAs point at an assessment rather than a booking where the client brief allows it.
- **The hard rule for this archetype:** every claim needs a real basis. **Never invent a figure to fill a chart or a stat cell.** If the client brief lacks a number, ship a visible placeholder. This persona's whole position collapses on one unsourceable stat.

**Homepage additions to the pre-ship checklist above**

- [ ] Every number on the page is sourceable by the practice.
- [ ] No invented statistics and no placeholder figures presented as real.
- [ ] Page reads credible and integrative, not one or the other.
- [ ] Figures set in tabular numerals with units labeled.
- [ ] No energy, aura, or chakra imagery.

## References

- Examples in the wild: https://www.drmelanieorthodontics.com/
- Pinterest moodboard: https://pin.it/IDzlbX6gX
