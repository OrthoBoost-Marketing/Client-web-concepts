# Codex handoff: Valley Orthodontics homepage

Written 8 Sep 2026 for a Codex session. Scope of this document is the **homepage only**.
Everything here is either verified against a primary source or explicitly flagged as
unverified. Where a resource already exists on disk or in Drive, this file points at it
rather than restating it.

---

## 1. Project

| | |
|---|---|
| Project folder (absolute) | `C:\Users\Chris\valley-orthodontics-website\` |
| Practice | Valley Orthodontics (always spelled out in full, never "Valley Ortho" or "VO") |
| Doctor | Dr. Jeremy Haines |
| Current live site | https://valleyorthoak.com/ (WordPress, built by O360) |
| Build type sold | Full Custom, static HTML |
| Launch date on the Notion record | 21 Sep 2026 |
| Notion client row | `3cd32d9551dd80aab83ecd5ecf01af8d` |

**Do not confuse this client with Valley Pediatric Dentists.** Different practice,
different brand (green, Baloo 2). If a file or note says "Valley" without a qualifier,
resolve which practice before using it.

---

## 2. Current implementation

**There is no homepage code yet.** As of 8 Sep 2026 the project folder contains this
handoff and nothing else. There is no repository, no Vercel project, and no preview URL
for this build. Codex is writing the first implementation from scratch.

What does exist, and is finished work you should build on:

- **Brand kit v1.0** at `C:\Users\Chris\valley-orthodontics-brand-kit\` (logo suite,
  tokens, measured contrast, design system). See section 4.
- **Launch ads** at `C:\Users\Chris\valley-orthodontics-launch-ads\` (Meta static ads).
  Useful only as a reference for how the brand has been rendered so far. Not a web asset
  source.
- **Site audit of the current WordPress site**, summarised in section 8. The defects there
  are the reason for the rebuild and must not be reproduced.

### Expected shape of the build

Static HTML, no framework, no build step. Match the pattern used on the agency's other
static client sites:

```
valley-orthodontics-website/
  index.html
  assets/
    css/tokens.css          <- copied from the brand kit, not re-derived
    css/site.css
    img/                    <- optimised photography, see section 5
    logo/                   <- SVGs copied from the brand kit
  CODEX-HANDOFF.md
```

### Preview

Serve the folder and open it; do not open `index.html` from the filesystem, because
relative asset paths and any `fetch` will behave differently under `file://`.

```bash
cd "C:/Users/Chris/valley-orthodontics-website" && python -m http.server 4321
```

Then http://localhost:4321/ . Check the layout at 390px, 768px, 1280px and 1600px widths.
390px is the one that catches real defects.

Nothing should be deployed anywhere from this session. When a preview deploy is wanted it
goes through the agency's normal Vercel flow and ships with `noindex` until launch.

---

## 3. Design decisions

### Settled

1. **The brand system is client-owned and is not up for redesign.** Systematise it, do not
   reinterpret it. Palette, mark and usage rules are in the kit (section 4).
2. **Gold never carries text on a light ground.** Measured 1.61:1 on white. It is an
   accent, a rule, an underline, a hover state. On ink it is 10.14:1, so dark bands are
   the only place gold gets to be type.
3. **Paper stays `#FAFBFB`.** Darkening it to `#F7F8F8` drops slate and muted text below
   AA everywhere the band is used.
4. **Buttons:** slate fill with white label for primary, gold fill with ink label for
   accent. Never a white label on gold.
5. **No coloured left-edge accent rails on cards or callouts.** House rule, no exceptions.
6. **Corners 4px, 10px on large cards.** The mark is hard geometry and fights heavy
   rounding.
7. **Phone is a first-class conversion path**, because it is the practice's primary one
   today. Every phone link must be `tel:+19073761510`. The current site has three
   differently malformed variants and all three are broken.
8. **The strings "New Patient Form", "Contact Us" and "Get In Touch" must not appear as
   calls to action.** They are the current site's failure and were explicitly banned in
   the concept round.
9. **Palmer is named above the fold.** See section 7 for why.
10. **No stock photography.** Only the client's own images (section 5). If a slot has no
    real photo, design the slot so it does not need one.

### Not settled, and not yours to settle

- **Concept direction.** Three homepage concepts were written on 4 Sep 2026 (A "Alaska
  Grown" community, B "The Only Specialist" expertise, C "Book It Now" convenience). No
  client sign-off is on file. The 4 Sep discovery call leaned toward the Alaska Grown
  positioning: a local alternative to corporate DSOs, using Mat-Su Valley / "The Valley"
  geographic language. Treat that as the working direction, not an approval.
- **Heading typeface.** The wordmark face is unidentified and unrecoverable from the
  supplied artwork; the client has not sent the editable `.ai`. `tokens.css` carries a
  neutral system stack as a deliberate placeholder. Use it. Do not pick a "close enough"
  display face and do not present any face as the brand font. Details in
  `valley-orthodontics-brand-kit\fonts\FONTS.md`.
- **Monthly payment figure.** The current site publishes both `$125` and `$189` as the
  interest-free monthly payment. Until Dr. Haines picks one, **no payment figure goes on
  the page at all**.

---

## 4. Brand guidelines

Read these rather than working from this summary:

- `C:\Users\Chris\valley-orthodontics-brand-kit\design-system.md`, the full spec
- `C:\Users\Chris\valley-orthodontics-brand-kit\tokens\tokens.css`. Copy this into the
  build, do not retype the values
- `C:\Users\Chris\.claude\skills\valley-orthodontics-brand\SKILL.md`, the condensed rules
- `C:\Users\Chris\valley-orthodontics-brand-kit\drive-assets\AUDIT.md`, what the client
  actually supplied

Palette, for orientation only (`tokens.css` is authoritative):

| Token | Hex | On white | On ink |
|---|---|---|---|
| gold | `#FCC351` | 1.61 | 10.14 |
| mist | `#93ABB1` | 2.41 | 6.75 |
| slate | `#5A7880` | 4.74 | 3.44 |
| ink | `#231F20` | 16.30 | 1.00 |

Logos: `valley-orthodontics-brand-kit\logos\svg\` (11 variants) and `\logos\png\`.
Primary is `valley-orthodontics-lockup-horizontal`. Reversed white variants for dark
grounds and photography. Measured minimum sizes: horizontal lockup 140px wide, stacked
110px, icon 16px. Below those the ORTHODONTICS subline turns to mush; use the mark alone
instead of shrinking the lockup. Never retype the wordmark in a live font, and never
invent a single-line wordmark.

**The American Board of Orthodontics marks are not ours.** They were supplied, they are
ABO property, and board certification plus permitted usage are unconfirmed. Do not put
them on the page. Same for `ItTakesASpecialist (1).mp4`, whose licensing is unverified.

---

## 5. Assets

**Photography: 9 images, and there are no people in any of them.** First and only drop,
triaged 8 Sep 2026. Design the homepage around interiors, detail and signage, not around
patient or doctor portraits, because none exist. Do not fill the gap with stock.

Drive folder `Winners`: `1b3tL8QfrX_vOHpVxj9flJaVTx9E_afZA`

| File | Notes |
|---|---|
| `interior-reception-panorama-001.jpg` | widest interior, hero candidate |
| `interior-reception-front-desk-001.jpg` | |
| `interior-waiting-window-seating-001.jpg` | |
| `interior-treatment-bay-wide-001.jpg` | |
| `interior-kids-corner-books-001.jpg` | **still sideways**, rotation not applied |
| `detail-treat-wall-neon-001.jpg` | |
| `tech-panoramic-xray-unit-001.jpg` | |
| `community-alpar-cleanup-team-001.jpg` | team shirts read "ELEVATE YOUR SMILE" |
| `signage-entry-door-valley-orthodontics-001.jpg` | **still sideways** |

Two of these need rotating before use. `Raw` (`1ezYZKrq0XUpJRjmhfti9xL4G9uemTJrG`) holds
the untriaged remainder, and a CONSENT-HOLD set that must not be published.

Other Drive locations:

- Brand Assets: `1YBx6kaiIpAsZqwFz3fKH9bzm_9m9voN_`
  (`Logos/SVG` `1M3bWDlBuqqPEYtCue1yZRFK2aRrWIwd2`, `Logos/PNG` `1dA5Jd3rjAtc2_Haz8rbQBO2VEtjeUVNK`)
- Client raw drop: `1Ow2c_AvsykQti0pZGe74dZ2P5rfnSU09`
- Two already-cropped local copies: `C:\Users\Chris\valley-orthodontics-launch-ads\src-photos\`

Drive is mounted locally at `H:\My Drive\` if you need bytes rather than links.

"ELEVATE YOUR SMILE" on the team shirts looks like an existing practice tagline, but it is
recorded nowhere. Do not use it as a headline until someone confirms it with the practice.

---

## 6. Practice details

Verified against valleyorthoak.com on 8 Sep 2026. Reproduce character-exact.

- **Address:** 1001 E. USA Circle, Wasilla, AK 99654
- **Phone:** (907) 376-1510 → `tel:+19073761510`
- **Fax:** (907) 373-0620
- **Hours:** Mon 8:00 AM – 4:00 PM · Tue 7:30 AM – 4:30 PM · Wed 7:30 AM – 4:30 PM ·
  Thu 8:00 AM – 4:30 PM · Fri 8:00 AM – 1:00 PM · Sat–Sun closed
- **Facebook:** https://www.facebook.com/people/Valley-Orthodontics-AK/100089096567064/
- **Instagram:** two different accounts are linked from the current site. Do not carry
  either across until someone confirms which is live.

Claims that were verified during the 4 Sep audit and may be used: board certified
(diplomate), twenty-plus years, the only orthodontics-only practice in Wasilla, digital
scanning (iTero), massage chairs, free consultation. Google rating was 5.0 across 99
reviews at that time; re-check before printing the number.

Claims that are **not** verified and must not appear: same-day starts, evening hours,
Medicaid or Denali KidCare acceptance, any monthly payment figure, patient counts,
"massage chairs in every treatment room" (one versus every room is unconfirmed).

---

## 7. Treatments and links

Seven treatment pages exist on the current site and are the homepage's service set:

Braces · Invisalign · Early Intervention · Splint Therapy · Surgical Orthodontics ·
Touch-Up Treatments · Retainer Assurance

The current site gives splint therapy and surgical orthodontics roughly equal billing with
braces. Do not carry that weighting over. Nobody has told us the case-mix priority yet, so
lead with braces and Invisalign and keep the rest secondary.

Supporting pages that exist and can be linked from the homepage: `/first-visit/`,
`/financing-and-insurance/`, `/faq/`, `/before-and-after/`, `/our-team/`,
`/meet-dr-haines/`, `/orthodontist-palmer-ak/`, `/contact-orthodontist-wasilla-ak/`.

### Appointment links

- **There is no online scheduling.** Whether the practice management software can support
  it, and whether the front desk would honour a slot booked at 9pm, is an open question
  from the call prep. Do not design a live scheduler.
- The only existing intake path is the off-site health history form:
  `https://orthoii-forms.com/Custom/5170/HealthHistory/HealthHistory.aspx?custid=5170`.
  That is a new-patient paperwork form, not a consultation request, and it should not be
  the homepage's primary call to action.
- **The homepage needs its own on-page consultation request form.** Four fields, five
  maximum. Wire-up target is the agency's standard: OrthoBoost Leads backup first, then
  the GoHighLevel inbound webhook. **Neither endpoint exists for this client yet**, so
  build the form markup and leave the endpoint as a clearly marked TODO rather than
  inventing a URL.
- Secondary call to action is the phone number, as a real `tel:+19073761510` link.

---

## 8. SEO targets

Current homepage title, for reference: `Orthodontist Wasilla AK Invisalign Braces |
Valley Orthodontics`.

- **Primary geography:** Wasilla, AK. **Secondary:** Palmer, AK. Regional language is
  Mat-Su Valley, or "The Valley" in body copy.
- **Head terms:** orthodontist Wasilla AK · braces Wasilla AK · Invisalign Wasilla ·
  orthodontist Palmer AK · braces Palmer AK.
- **Competitive note:** two of the four paid slots above the practice on "braces wasilla
  ak" are general dentists, and a general dentist outranks the practice in Palmer. The
  "only orthodontics-only practice in Wasilla" line is the response to that, and it is a
  verified claim.
- **Palmer must be named above the fold** on the homepage, and the homepage must link to
  the Palmer page.

Homepage plumbing to get right, because the current site gets each of these wrong:

- One `<h1>`, containing the practice name and the primary geography.
- Self-referencing canonical. The Palmer page currently has none and carries
  `<meta name="robots" content="follow, noindex">`, which is why Palmer patients cannot
  find the practice. That is a separate fix, not homepage scope, but do not replicate the
  pattern.
- `LocalBusiness` or `Dentist`-plus-`MedicalBusiness` schema with the NAP above,
  character-exact, and the real opening hours. The current site ships a `Dentist` schema
  claiming Monday only.
- Descriptive `alt` text on every image. The current site ships
  `itero-digital-impressions-placeholder.jpg` with empty alt.
- One analytics tag, not three. The current site has three GA4 tags and an unaccounted-for
  Meta Pixel; do not carry any of them across.

---

## 9. Outstanding work

Blocking or shaping the homepage:

1. **Concept sign-off.** No client approval on file for any of the three directions.
2. **Heading typeface.** Blocked on the client sending the editable `.ai`.
3. **Monthly payment figure.** `$125` versus `$189` unresolved; no figure on the page
   until Dr. Haines picks one.
4. **Form endpoints.** OrthoBoost Leads site registration and the GoHighLevel webhook do
   not exist for this client yet.
5. **Photography gaps.** No people at all. No doctor portrait, no patient photography, no
   team photo beyond the community cleanup shot. Coverage against the shot list has never
   been checked.
6. **Two Winners images need rotating.**
7. **Instagram account** ambiguity, and the unverified "ELEVATE YOUR SMILE" tagline.

Not homepage scope, listed so nothing is assumed done: the Palmer page noindex fix,
credential-mark clearance with the ABO, logo ownership and prior-designer rights, the
near-empty Notion record (no GBP, Search Console, Google Ads, Meta Pixel, USPs or approval
preferences recorded), and the DNS cutover.

---

## 10. House rules for the writing

- **Never use em-dashes**, anywhere, including in code comments and copy.
- Spell "Valley Orthodontics" out in full everywhere, including filenames and CSS token
  prefixes (`--valley-orthodontics-*`).
- Do not invent numbers, review counts, credentials, logos or claims. If a fact is not in
  section 6 or 7, it does not go on the page.
- Do not carry agency or AI tooling artefacts into the HTML: no chat-app font classes, no
  editor paste markers, no fragments of a conversation or document DOM. Check the output
  before handing it back.
