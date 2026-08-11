# Build queue: Chang Orthodontics, concept B

The homepage is complete. Every page below is linked from `index.html` and does not exist yet, so
those links 404 on the preview. That is expected.

Design contract: `DESIGN.md`. Client facts: `../CLIENT-BRIEF.md`.
Structure source of truth: the sample homepages at https://orthoboost-website-kit.vercel.app
(they outrank the written specs where the two disagree — see `DESIGN.md`).

Build with `/orthoboost-web:build-site`, then clear the audit per page.

| Page | Type | Status |
|---|---|---|
| appointment.html | appointment (short-free) | not started |
| treatments.html | treatment hub | not started |
| braces.html | treatment | not started |
| invisalign.html | treatment | not started |
| early-orthodontics.html | treatment | not started |
| kids-teens.html | treatment | not started |
| adults.html | treatment | not started |
| airway.html | treatment | not started |
| retainers.html | treatment | not started |
| about.html | practice (why choose us) | not started |
| dr-michael-chang.html | practice | not started |
| team.html | practice (minimal tier) | not started |
| technology.html | practice | not started |
| reviews.html | practice | not started |
| new-patients.html | resource | not started |
| financing.html | resource | not started |
| faq.html | resource | not started |
| emergencies.html | resource | not started |
| contact.html | resource | not started |
| thank-you.html | conversion goal | not started |
| privacy.html | legal | not started |
| terms.html | legal | not started |
| accessibility.html | legal | not started |
| hipaa.html | legal | not started |

## Blockers carried from DESIGN.md

- **No verbatim Google review quotes.** Three marked placeholders ship on the homepage. Never write
  a quote. This is the build's one hard blocker.
- **American Board of Orthodontics logo** is not obtainable as an official file. The authority strip
  keeps that slot typographic. Do not redraw or approximate the mark.
- **UCSF mark needs sign-off** before launch. See `assets/logos/SOURCES.txt`.
- **Service-card imagery repeats.** Only ten approved practice photos exist, so two are reused from
  elsewhere on the page. Stock is permitted in the services grid only.
- `noindex` is deliberate on this preview and comes off at launch on the real domain.
- Tailwind, Iconify, GSAP and Lenis load from CDNs. Compile and inline before launch.
