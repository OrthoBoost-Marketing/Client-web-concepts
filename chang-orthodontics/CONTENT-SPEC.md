# Chang Orthodontics · Shared content spec for concepts A, B and C

Every concept carries **the same information**. Only the formatting changes. That is the whole point
of running three: if the content differs, the client is choosing between offers rather than between
designs, and the comparison is worthless.

Facts come from `CLIENT-BRIEF.md`. Structure comes from the sample homepages at
https://orthoboost-website-kit.vercel.app, which outrank the written specs where they disagree.
Verified against A and B on 2026-08-11 with a parity script; both carry all 21 items below.

---

## Brand invariants — identical across all three

- Palette: navy `#005DAA`, deep navy `#003B6E`, bright navy `#3E90CE`, soft clay `#EEF6F8`,
  ink `#1b1c1c`, secondary ink `#434653`. **Never** the old `#0047bb` or any teal.
- Logo: `assets/chang-logo.svg`.
- Container **1200px**. Bands full-bleed, content contained. Verify at 2560px.
- Body copy **18px** minimum, ledes **20px**. Dr. Ty's floor, not a preference.
- Every interactive element **44px** minimum on mobile. `scrollWidth` exactly 390 at a 390 viewport,
  **measured before scrolling** as well as after.
- No forms on the homepage. Every booking CTA routes to `appointment.html`.
- No carousels, no auto-rotating anything, no eyebrow labels as the leading element.
- CTAs in **sentence case**. ALL CAPS is Dr. Joe's persona only, and Chang is not Dr. Joe.

## Free to vary — this is where the three differ

Section arrangement within the canonical order, hero pattern, imagery treatment and crop language,
density and section rhythm, type pairing and scale, card versus ledger versus band treatment,
motion, texture, rule weights, corner radius.

---

## Section order — the canonical stack

Header → Hero → Proof band → Meet the doctor → USP zigzag → Mid-page CTA → Authority strip →
Reviews → Service cards → Locations → Footer

Notes that came from reading the kit rather than the specs: **reviews precede service cards**
(5 of 5 samples), **there is no closing CTA** (4 of 5 samples), and the **authority strip runs even
next to a credential-style proof band**. The proof band may sit inside the hero (concept B) or as its
own band beneath it (concept A); both satisfy the rule that proof sits near the CTA *or* directly
beneath the hero.

## Cardinality — hard numbers

| Element | Required | |
|---|---|---|
| Service cards | 3, 6 or 9 | Chang uses **6** |
| Reviews | 3, 6 or 9 | **3** marked placeholders while blocked |
| Proof band points | 3 to 5 | |
| USP zigzag rows | 2 to 4 | Chang uses **3** |
| Authority strip items | 4 to 7 | Chang uses **4** |
| CTA band | 5 lines max, **one** button | |
| H1 | exactly 1 | |

---

## The 21 information items every concept must carry

**Proof and credentials**
1. **10,000 patients** treated
2. **100 five-star reviews** on Google
3. **15+ years** in practice
4. **Board certified** orthodontic specialist
5. **UCSF** clinical professor / faculty
6. **Since 2018** for the professorship
7. **Invisalign Platinum Plus Provider**
8. **Published peer-reviewed airway research** (3-D airway change before and after treatment)
9. **UCSF seven-year** combined dental and orthodontic program
10. Dr. Chang **lives in San Carlos** with his family

**The three differentiators**
11. **Digital scan** drives the plan, not a putty impression
12. **Airway is assessed**, backed by the published research
13. **One orthodontist** plans and finishes every case, and **after-school appointments** exist

**The offer and the money story**
14. **Free consultation** — never "free exam", never an invented offer name
15. **One quoted fee, in writing**
16. **In-house payment plans** available
17. **Insurance coordinated**

**Location and logistics**
18. **NAP**: 10 El Camino Real, Ste. 201, San Carlos, CA 94070 · (650) 598-0888.
    Character-identical everywhere including schema and any iframe title.
19. **Hours**: Monday to Friday, 9:00am to 5:00pm, and **someone answers the phone through lunch**
20. **Landmark**: northernmost building in San Carlos, on El Camino between the Holiday Inn Express
    and Hyatt Place
21. **Reviews placeholder** + a **read more reviews** link

## Never appears on any concept

No star rating or "5.0" — the record counts five-star reviews and states no average. No Medicaid.
No down payment. No 0% interest. No Spanish advertising. No urgency, discounts or exclamation marks.
No em-dashes. No invented number, ever. No written, paraphrased or illustrated review quote. No stock
or AI humans anywhere except the services grid, and no synthetic patients even there.

## Hero imagery — standing rule

**The hero is always the doctor together with a patient.** Not the doctor alone, not a patient alone,
not a room. `chang-community-01` is the only approved photo showing both, and both A and B use it.
`CLIENT-BRIEF.md` mislabels `chang-patient-01` as "doctor with patient" when it is the patient on her
own, so verify by opening the image, not by reading the caption.

## Known blockers, shared by all concepts

1. **Zero verbatim review quotes exist.** The hard blocker. Marked placeholders only.
2. **ABO logo** is not obtainable as an official file; that slot stays typographic. Never redraw it.
3. **UCSF mark** needs sign-off before launch: public-domain file, but universities restrict
   third-party use and a logo can read as endorsement rather than a faculty post.
4. **No service-specific photography.** Only ten approved photos exist, so some reuse is unavoidable.
   Stock is permitted in the services grid only.
5. **Founding year unknown**, so no tenure claim and a single-year copyright.
6. `noindex` is deliberate on these previews and comes off at launch on the real domain.
