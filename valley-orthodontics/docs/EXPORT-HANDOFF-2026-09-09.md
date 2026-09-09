# Claude Code handoff: Valley Orthodontics

## Current state and instruction order

Continue from the files in this folder. They are the final refined state as of 9 September 2026. The user requested this export for handoff, not a deployment or another redesign.

Read this file and `DESIGN-DECISIONS.md` first. Current direct user instructions take precedence. Use `IMPLEMENTATION-NOTES.md` for history, then the supplied references for factual and brand context. Do not treat old reference statements such as "there is no homepage code," "no photography exists," or Concept 2 having a weekday selector as current facts.

The three concepts are alternatives. Do not overwrite or combine them without a user request. Preserve the current first concept at `index.html` and the separately named Concept 2 and Concept 3 files.

## Architecture

- Static HTML/CSS/JavaScript, no framework and no production build step.
- Concept 1 uses `assets/css/tokens.css`, `site.css` and `reference-style.css`.
- Concept 2 uses `tokens.css`, `site.css` and `valley-orthodontics-concept-2.css`. This concept stylesheet is an isolated copy with its own later refinements.
- Concept 3 uses `tokens.css` and its standalone `valley-orthodontics-concept-3.css`.
- All three use `assets/js/site.js` for mobile navigation, the mobile phone bar and blocking the unconfigured form.
- The stylesheets contain successive refinements. Later rules deliberately override earlier ones. Consolidate carefully if requested; do not restore removed ornamentation by dropping the overrides.
- Keep every source file UTF-8. An earlier default-encoding Python edit introduced mojibake; that issue was corrected. Always specify encoding explicitly in scripts.

## Latest design decisions

The user explicitly asked to remove AI design antipatterns from every concept. Avoid generic paired slogans, "next chapter" copy, decorative counters, gratuitous uppercase labels, repeated chevron ornaments, metric-style credential bars, stock or generated people, arrows on every link and cards around every paragraph. Preserve natural spacing, direct headings, real imagery and task-oriented controls.

The latest versions retain the three user-selected reference directions. Navy/teal/gold treatments and Concept 3's Georgia serif are concept choices, not proof of final client brand approval. The original gold/mist/slate tokens are included unchanged. The supplied logo must remain artwork; never recreate its lettering or invent a new lockup.

## Verified practice details

- Name: Valley Orthodontics, always spelled in full.
- Doctor: Dr. Jeremy Haines, board-certified orthodontist.
- Address: 1001 E. USA Circle, Wasilla, AK 99654.
- Phone: (907) 376-1510. Every phone link must be `tel:+19073761510`.
- Fax: (907) 373-0620.
- Hours: Monday 8:00 AM to 4:00 PM; Tuesday and Wednesday 7:30 AM to 4:30 PM; Thursday 8:00 AM to 4:30 PM; Friday 8:00 AM to 1:00 PM; Saturday and Sunday closed.
- Geography: Wasilla first, Palmer second, Mat-Su Valley regional language.
- Services: braces, Invisalign, early intervention, splint therapy, surgical orthodontics, touch-up treatments and Retainer Assurance. Lead with braces and Invisalign.
- Free consultation, iTero digital scanning and massage chairs are supported by the brief. Do not claim chairs in every room.
- The practice is Wasilla's only orthodontics-only practice. Do not turn that into an unsupported claim that Dr. Haines is the only board-certified orthodontist.

Do not invent review counts, ratings, patient totals, travel times, same-day starts, monthly payment amounts or years of experience. Earlier source material conflicts on the practice's versus doctor's experience. The latest builds intentionally omit numbers.

## Assets

All runtime assets are local under `assets/`. The supplied logos are copied from the client brand kit. Photographs are real practice imagery, including a reception photo from the existing website, the approved community-cleanup image and Dr. Haines' portrait from the practice biography page. Provenance and original URLs are documented in `IMPLEMENTATION-NOTES.md`.

The original reference photos and mockup people are not necessary to continue this build and are not included. Do not replace the real doctor with a mockup person. Brand guideline files may mention unavailable local Windows paths; use the equivalents bundled in this folder.

## Booking and launch boundaries

- No live online scheduling integration exists. Concept 2 shows office hours directly and calls the practice. Do not present times as bookable inventory.
- A four-field consultation form is retained in each HTML file, hidden and disabled. No information is stored or transmitted.
- Required delivery order when integrated: OrthoBoost Leads backup, then the approved GoHighLevel inbound webhook. Neither endpoint is provided. Do not invent URLs or put secrets in browser code.
- Before enabling forms, implement and verify consent/privacy copy, validation, delivery failures and duplicate protection using the approved agency integration.
- No analytics tags are installed; the approved client configuration is missing.
- Keep `noindex` until an explicitly approved production launch. Keep the canonical and accurate NAP schema.
- Do not deploy, push, connect domains, modify DNS or publish as a side effect of this handoff.
- The user banned calls to action labeled "New Patient Form," "Contact Us" and "Get In Touch." Keep clear consultation and phone labels.
- Do not use em dashes in copy or comments.

## Verification

See README.md for portable setup. The three `verify-*.cjs` scripts cover each concept; `review-concepts.cjs` checks the visual simplification. They use npm's `playwright`, an optional `BROWSER_EXECUTABLE` override and local bundled brand-token references. No original Codex runtime path is required.

At handoff, all three concepts passed checks at 390, 768, 1280 and 1600px. Fresh desktop and mobile screenshot inspections were also performed. This is local implementation verification, not a clinical/legal review, full launch audit or evidence of a measured conversion-rate gain.
