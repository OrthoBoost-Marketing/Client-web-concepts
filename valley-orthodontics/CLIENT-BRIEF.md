# Valley Orthodontics: client brief (homepage concepts)

Assembled 9 September 2026 from the Codex handoff of 8 September (`docs/CODEX-HANDOFF-2026-09-08.md`)
and the export handoff of 9 September (`docs/EXPORT-HANDOFF-2026-09-09.md`). Every fact below traces to
one of those two files or to valleyorthoak.com as checked on 8 September 2026. Nothing here is new
research. Where the sources are silent, the field says so rather than guessing.

This is not a `/new-site` interview brief. It exists so the audit has one file to trace figures to.

## Practice

| | |
|---|---|
| Name | Valley Orthodontics, always spelled in full |
| Doctor | Dr. Jeremy Haines, board-certified orthodontist |
| Second doctor | The etched entry door reads Brian D. Hartman, DMD. Not in Notion, unconfirmed. Not named on any concept. |
| Address | 1001 E. USA Circle, Wasilla, AK 99654 |
| Phone | (907) 376-1510, every link `tel:+19073761510` |
| Fax | (907) 373-0620 |
| Live site | https://valleyorthoak.com/ (WordPress by O360, being replaced) |
| Notion client row | `3cd32d9551dd80aab83ecd5ecf01af8d` |
| Launch date on Notion | 21 September 2026 |
| Build sold | Full Custom, static HTML |

## Hours

Monday 8:00 AM to 4:00 PM. Tuesday and Wednesday 7:30 AM to 4:30 PM. Thursday 8:00 AM to 4:30 PM.
Friday 8:00 AM to 1:00 PM. Saturday and Sunday closed.

## Geography

Wasilla first, Palmer second. Regional language is Mat-Su Valley or The Valley. Palmer must be named
above the fold and the homepage must link to the Palmer page.

## Services

Braces, Invisalign, Early Intervention, Splint Therapy, Surgical Orthodontics, Touch-Up Treatments,
Retainer Assurance. Lead with braces and Invisalign; the other five stay secondary. Seven treatment
pages exist on the live site; the concepts link to them there because this is a homepage-only round.

## Claims that may be used

Board certified (diplomate). Wasilla's only orthodontics-only practice. iTero digital scanning.
Massage chairs (not "in every room"). Free consultation, which includes TMJ analysis.

## Claims that must not appear

Same-day starts. Evening hours. Medicaid or Denali KidCare acceptance. Any monthly payment figure
(the live site publishes both $125 and $189). Patient counts. Massage chairs in every treatment room.
Any review count or star rating (5.0 across 99 was true on 4 September, but re-check before it is ever
printed; the concepts carry no number). Any years-of-experience figure (the sources conflict on
practice versus doctor). "Only board-certified orthodontist" (unsupported; the verified claim is
orthodontics-only practice). ABO credential marks (third-party property, usage unconfirmed).
"ELEVATE YOUR SMILE" (on the team shirts, recorded nowhere).

## Banned call-to-action labels

"New Patient Form", "Contact Us", "Get In Touch".

## Reviews

No verbatim quotes are on file. No reviews section runs on any concept. This is deliberate.

## Photography

Real practice imagery only. In the concepts:

- `valley-orthodontics-reception-*.webp`: the live site's own office photo (Office-4.jpg), includes reception staff. Interim; confirm against the Winners drop before launch.
- `valley-orthodontics-community-*.webp`: Winners image `community-alpar-cleanup-team-001.jpg`. Adults and children, identifiable, with an ALPAR banner. Implied-affiliation is a client call.
- `valley-orthodontics-dr-haines.webp`: Dr. Haines' portrait from the live biography page (ZGAXA8PA.jpg).

No stock and no generated people anywhere. Consent status of the community photo's people is not
recorded; the Drive `CONSENT-HOLD.txt` claims no identifiable people, which is wrong for this frame.

## Brand

Client-owned, systematised not redesigned. Kit v1.0 at `C:\Users\Chris\valley-orthodontics-brand-kit\`,
tokens copied unchanged into `assets/css/tokens.css`. Palette gold `#FCC351`, mist `#93ABB1`,
slate `#5A7880`, ink `#231F20`. Gold never carries text on a light ground (1.61:1). Paper stays
`#FAFBFB`. Corners 4px, 10px on large cards. No accent rails. Logo is artwork: never retyped, never a
single-line wordmark.

Heading face: the wordmark face is unidentified. The live site is Montserrat. No face is approved.

**Concept treatments and the brand.** Jules selected three visual references on 8 and 9 September.
Concept 1 renders them as navy plus gold, Concept 2 as teal, Concept 3 as a Georgia serif. Those are
reference-driven presentation choices recorded in `docs/IMPLEMENTATION-NOTES.md`, not brand
approvals, and none matches the gold/mist/slate kit. Whether the winner is brought back onto the kit
palette is a decision for Jules and the client, listed as open below.

## Forms and booking

No online scheduling exists and none may be implied. Each concept carries a four-field consultation
form (name, phone, email, one select), hidden and disabled. Delivery order when wired: OrthoBoost Leads
backup first, then the GoHighLevel inbound webhook. Neither endpoint exists for this client. The
off-site health history form is paperwork, not a consultation request, and is not a homepage CTA.

## SEO

Primary: orthodontist Wasilla AK, braces Wasilla AK, Invisalign Wasilla. Secondary: orthodontist
Palmer AK, braces Palmer AK. One H1 with practice name and Wasilla. Self-referencing canonical on the
launch domain. `Dentist` schema with the NAP above and real hours. One analytics tag at launch, none
now. `noindex` stays on until launch is explicitly approved.

## Deliberate omissions on every concept

No reviews section, no rating, no numbers of any kind, no ABO marks, no payment figure, no analytics,
no live form, no Instagram link (two accounts on the live site, unresolved). Supporting pages are not
built; their links go to the live site.

## Open items

1. Concept sign-off: no client approval on file for any direction.
2. Brand palette on the concepts (see Brand above).
3. Heading typeface: needs the editable `.ai` or a client decision. Montserrat is the live site's face.
4. Monthly payment figure: $125 versus $189, none published until Dr. Haines picks one.
5. Form endpoints: Leads registration and GHL webhook do not exist yet.
6. Photography: the 8 September drop of 23 originals is untriaged against the shot list. No exterior, no team portrait.
7. Community photo: consent for identifiable people and the ALPAR banner.
8. Second doctor on the door: confirm with the practice.
9. Instagram identity and the unverified tagline.
10. Logo ownership and ABO usage rights.
