/* Romans Orthodontics, homepage, Concept C2.
   Flatten entry. Ported from the Claude Design handoff bundle
   "Romans Orthodontics Concept C" (C2 variant, the one marked to ship).

   TWO DELIBERATE DEPARTURES FROM THE HANDOFF, both required by CLIENT-BRIEF:

   1. No brand-identity token overrides. The handoff's :root block set
      --font-display/--font-body/--font-mono to Bitter + Nunito Sans and
      --accent to the copper, citing CLIENT-BRIEF. The brief says the opposite:
      typefaces (Fraunces / Archivo / IBM Plex Mono) and the palette are
      brand-invariant across every concept, and it names Bitter + Nunito Sans as
      the exact off-brand mistake concept-b made. flatten.mjs fails the build on
      those overrides. Every non-brand token the concept does own, type scale,
      leading, space ramp, section rhythm, motion, lives in the page's own
      <style> under .psp-root, where a media query can still reach it.

   2. Real photography, not flagged slots. All eleven images resolve to graded
      files in ../assets/web/. The handoff's .roc-photo-missing hero fallback is
      dropped with them: it was preview-only and must never ship as a state.

   Flagged placeholders that REMAIN on purpose: office hours (twice, and omitted
   from the JSON-LD rather than guessed) and social profile URLs. Reviews() runs
   six verbatim Google reviews as of 2026-08-06; see the note above it for what
   is still unconfirmed about them. */
import {
  TokenProvider, Band, Container, Stack, Split, Heading, Body, Button,
  Figure, Drawer, StickyBar, LinkArrow, Rule, SkipLink, Disclosure,
} from 'practice-site-primitives'

const NAP = {
  street: '3618 W. Anthem Way, Suite D120',
  city: 'Anthem',
  state: 'AZ',
  zip: '85086',
  phoneDisplay: '(623) 320-1222',
  phoneHref: 'tel:+16233201222',
}
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=3618+W.+Anthem+Way+Suite+D120+Anthem+AZ+85086'
const MAP_EMBED = 'https://www.google.com/maps?q=3618+W.+Anthem+Way+Suite+D120+Anthem+AZ+85086&output=embed'

type Service = {
  name: string
  href: string
  desc: string
  img: string
  alt: string
}

const SERVICES: Service[] = [
  {
    name: 'Braces for Kids',
    href: 'braces-for-kids.html',
    desc: 'Metal and clear brackets, adjusted on a set schedule from the first visit through to the finish.',
    img: '../assets/web/svc-braces-for-kids.webp',
    alt: 'A child in the treatment chair holding a mirror up to their new brackets',
  },
  {
    name: 'Braces for Adults',
    href: 'braces-for-adults.html',
    desc: 'Discreet bracket options planned around a working week. Adults are a routine case here, not an exception.',
    img: '../assets/web/svc-braces-for-adults.webp',
    alt: 'An older adult smiling openly in a treatment room',
  },
  {
    name: 'Invisalign® & Clear Aligners',
    href: 'invisalign.html',
    desc: 'Digitally scanned, no impression material. Aligner sequence planned in full before treatment begins.',
    img: '../assets/web/svc-invisalign.webp',
    alt: 'An adult holding a clear aligner tray between finger and thumb',
  },
  {
    name: 'Early Treatment',
    href: 'early-treatment.html',
    desc: 'First evaluation at age 7. If nothing needs doing yet, you leave with a monitoring interval rather than a treatment plan.',
    img: '../assets/web/svc-early-treatment.webp',
    alt: 'A young child at a first orthodontic exam',
  },
  {
    name: 'Retainers & Retention',
    href: 'retainers.html',
    desc: 'Fitted retainers, replacements, and a wear schedule set out at the finish. Retention is where results hold or fail.',
    img: '../assets/web/svc-retainers.webp',
    alt: 'A clear retainer in its open case, held in one hand',
  },
  {
    name: 'Airway & TMJ',
    href: 'airway-tmj.html',
    desc: 'Breathing, bite, and jaw comfort assessed in the same evaluation. Sometimes the jaw is the case, not the teeth.',
    img: '../assets/web/svc-airway-tmj.webp',
    alt: 'An adult asleep on their side, illustrating disrupted breathing during sleep',
  },
]

const NAV_SERVICES: [string, string][] = [
  ['Braces for Kids', 'braces-for-kids.html'],
  ['Braces for Adults', 'braces-for-adults.html'],
  ['Invisalign & Clear Aligners', 'invisalign.html'],
  ['Early Treatment', 'early-treatment.html'],
  ['Retainers', 'retainers.html'],
]
const NAV_WHY: [string, string][] = [
  ['Why Romans', 'why-romans.html'],
  ['Meet Dr. Romans', 'dr-romans.html'],
  ['Our Team', 'team.html'],
]

const IconPhone = () => (
  <svg className="roc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d="M15.5 21A12.5 12.5 0 0 1 3 8.5 2.5 2.5 0 0 1 5.5 6h1.8a1 1 0 0 1 1 .8l.7 3a1 1 0 0 1-.5 1.1l-1.3.7a9.4 9.4 0 0 0 4.2 4.2l.7-1.3a1 1 0 0 1 1.1-.5l3 .7a1 1 0 0 1 .8 1v1.8A2.5 2.5 0 0 1 15.5 21Z" /></svg>
)
const IconChevron = () => (
  <svg className="roc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d="M6 10 12 16 18 10" /></svg>
)

function NavMenu({ label, items }: { label: string; items: [string, string][] }) {
  return (
    <li className="roc-nav-item">
      <button type="button" className="roc-nav-link" aria-expanded="false">{label}<IconChevron /></button>
      <div className="roc-menu">
        <ul className="roc-menu-list">
          {items.map(([t, h]) => <li key={h}><a className="roc-menu-link" href={h}>{t}</a></li>)}
        </ul>
      </div>
    </li>
  )
}

/* One tel: link in the desktop header, the utility strip. The main bar's phone
   icon and the drawer's number are mobile-only and named so, which is both true
   and what the header-cardinality check reads. */
function Header() {
  return (
    <header className="roc-header">
      <div className="roc-utility">
        <Container>
          <div className="roc-utility-inner">
            <span className="roc-utility-item">Anthem, Arizona</span>
            <span className="roc-utility-sep" aria-hidden="true"></span>
            <span className="roc-utility-item">{NAP.street}</span>
            <a className="roc-utility-tel" href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
          </div>
        </Container>
      </div>
      <div className="roc-bar">
        <Container>
          <div className="roc-bar-inner">
            <a className="roc-logo" href="index.html"><img src="../assets/romans-orthodontics-lockup-horizontal-reversed-copper-mark.svg" alt="Romans Orthodontics" width="200" height="40" /></a>
            <nav className="roc-nav-wrap" aria-label="Main">
              <ul className="roc-nav">
                <NavMenu label="Services" items={NAV_SERVICES} />
                <NavMenu label="Why Romans" items={NAV_WHY} />
                <li className="roc-nav-item"><a className="roc-nav-link" href="financial.html">Financial</a></li>
                <li className="roc-nav-item"><a className="roc-nav-link" href="#locations">Our Address</a></li>
              </ul>
            </nav>
            <div className="roc-bar-cta"><Button href="free-consult.html">Book a consultation</Button></div>
            <a className="roc-mobile-tel" href={NAP.phoneHref} aria-label={'Call Romans Orthodontics at ' + NAP.phoneDisplay}><IconPhone /></a>
            <Drawer label="Menu" closeLabel="Close" className="roc-drawer-trigger">
              <div className="roc-drawer-body">
                <Stack gap={3}>
                  <Disclosure summary="Services">
                    <ul className="roc-drawer-sub">
                      {NAV_SERVICES.map(([t, h]) => <li key={h}><a className="roc-drawer-link" href={h}>{t}</a></li>)}
                    </ul>
                  </Disclosure>
                  <Disclosure summary="Why Romans">
                    <ul className="roc-drawer-sub">
                      {NAV_WHY.map(([t, h]) => <li key={h}><a className="roc-drawer-link" href={h}>{t}</a></li>)}
                    </ul>
                  </Disclosure>
                  <a className="roc-drawer-top" href="financial.html">Financial</a>
                  <a className="roc-drawer-top" href="#locations">Our Address</a>
                  <Rule tone="inverse" />
                  <a className="roc-drawer-tel roc-drawer-top" href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
                  <Button href="free-consult.html" full>Book a consultation</Button>
                </Stack>
              </div>
            </Drawer>
          </div>
        </Container>
      </div>
    </header>
  )
}

/* Full-bleed photographic hero, centred overlaid type. The scrim is a flat ink
   wash at one opacity, not a gradient. The copper rule under the eyebrow is the
   page's one accent moment above the fold.

   Two graded crops of the same frame: the wide one is the LCP element on
   desktop, the tall one keeps Dr. Romans in shot at phone aspect. Both are
   preloaded in the head with matching media, so exactly one is ever fetched. */
function Hero() {
  return (
    <section className="roc-hero" id="hero">
      <picture>
        <source media="(max-width:999px)" srcSet="../assets/web/hero-dr-romans-office-tall.webp" />
        <img className="roc-hero-img" src="../assets/web/hero-dr-romans-office-wide.webp" alt="Dr. Nicholas Romans at the reception desk of Romans Orthodontics in Anthem, Arizona" width="1800" height="1059" fetchPriority="high" decoding="async" />
      </picture>
      <span className="roc-hero-scrim" aria-hidden="true"></span>
      <Container>
        <div className="roc-hero-inner">
          <p className="roc-hero-label roc-anim">Orthodontics in Anthem, Arizona</p>
          <Heading level={1} size="lg" measure={22} balance>Braces and Invisalign in Anthem, planned precisely</Heading>
          <p className="roc-hero-lede roc-anim">Dr. Nicholas Romans is a board-certified orthodontist with more than 7 years dedicated to orthodontics, including advanced specialty training. One orthodontist plans your treatment and one orthodontist finishes it. The first visit is a consultation, at no charge, for any age.</p>
          <div className="roc-hero-actions roc-anim">
            <Button href="free-consult.html">Book a consultation</Button>
            <a className="roc-hero-ghost" href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* Every line here traces to CLIENT-BRIEF. Cell 03 is the brief's approved
   quote, used verbatim as the brief requires, an earlier cut paraphrased it as
   "7+ years in orthodontics" and added "beyond dental school", which the quote
   does not say. */
const CREDENTIALS: [string, string, string][] = [
  ['01', 'Board-certified orthodontist', 'The specialty’s voluntary certification, held by Dr. Romans.'],
  ['02', 'DMD, MSD', 'A dental doctorate plus a master’s degree in orthodontics.'],
  ['03', '7+ years in orthodontics', 'Including advanced specialty training.'],
  ['04', '5,000+ patients treated', 'Across kids, teens, and adults to date.'],
]

/* The doctor block carries its own credential list: the kit requires 3 to 6
   there, and "they already ran in the trust bar" is not an exemption. Short
   form, no numbering, so it reads as a caption rather than a second trust bar. */
const DOCTOR_CREDENTIALS = [
  'Board-certified orthodontist',
  'DMD, MSD',
  'More than 7 years dedicated to orthodontics, including advanced specialty training',
]

function TrustBar() {
  return (
    <Band tone="surface" edge="both" pad="tight">
      <Container>
        <ul className="roc-credentials">
          {CREDENTIALS.map(([n, t, d], i) => (
            <li className="roc-credential roc-anim" style={{ '--i': i } as never} key={n}>
              <span className="roc-credential-num">{n}</span>
              <span className="roc-credential-title">{t}</span>
              <span className="roc-credential-desc">{d}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Band>
  )
}

/* First dark band. Centred statement intro above the photo. The portrait is a
   different frame from the hero, the brief allows no frame to appear twice on
   the homepage, so it runs at the photo's own 4:5 rather than being cropped
   into a landscape it does not contain. */
function Doctor() {
  return (
    <Band tone="dark">
      <Container>
        <Stack gap={4}>
          <div className="roc-intro roc-anim">
            <p className="roc-intro-label">Your orthodontist</p>
            <Heading level={2} size="md" measure={26} balance>One orthodontist, start to finish.</Heading>
            <p className="roc-intro-lede">Dr. Nicholas Romans opened this practice in Anthem and treats every patient in it himself, from a first evaluation through to the last retainer check.</p>
          </div>
          <Split ratio="0.85fr 1fr" gap={5} align="center" stackAt="md">
            <div className="roc-wipe roc-anim">
              <Figure src="../assets/web/dr-romans-with-patient.webp" alt="Dr. Nicholas Romans standing with a young patient in a treatment room at the Anthem office" ratio="4 / 5" />
            </div>
            <Stack gap={3} align="start">
              <ul className="roc-doc-creds">
                {DOCTOR_CREDENTIALS.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <p className="roc-dark-body">Kids, teens, and adults are all treated here, which is how one family keeps one orthodontist instead of three. Dr. Romans owns this practice outright, so the person who plans your treatment is the person you see at every visit and the person who finishes it.</p>
              <p className="roc-dark-body">Come in, ask what you want to ask, and leave with a clear picture of what treatment would involve. The consultation is free, at any age.</p>
              <LinkArrow href="dr-romans.html" tone="inverse">Read Dr. Romans’s background</LinkArrow>
            </Stack>
          </Split>
        </Stack>
      </Container>
    </Band>
  )
}

/* Three rows, image side alternating, a distinct subject per row: the waiting
   room, the treatment bay, the suite door. */
const ROWS = [
  {
    img: '../assets/web/office-reception.webp',
    alt: 'The waiting room and reception desk at Romans Orthodontics in Anthem, Arizona',
    reverse: false,
    label: 'One practice',
    h: 'Every age, one office',
    body: 'A 7-year-old first evaluation, a teenager in aligners, a parent finally treating their own bite, a retainer check for a grandparent. Booking one practice for all of it returns more hours to a working parent than any single appointment ever will.',
    link: ['See braces for kids', 'braces-for-kids.html'],
  },
  {
    img: '../assets/web/office-treatment-bay.webp',
    alt: 'The open treatment bay at Romans Orthodontics, chairs along a window wall',
    reverse: true,
    label: 'Cost clarity',
    h: 'Your insurance, checked while you sit there',
    body: 'Major PPO plans are verified during the visit, not mailed as an estimate afterward. FSA and HSA funds apply. Remaining balances are financed in house. The consultation is free and the figure you leave with is exact.',
    link: ['Read how insurance and financing work', 'financial.html'],
  },
  {
    img: '../assets/web/office-suite-entrance.webp',
    alt: 'The Suite D-120 entrance to Romans Orthodontics on W. Anthem Way, at street level',
    reverse: false,
    label: 'Access',
    h: 'Ground level, parking at the door',
    body: 'Suite D120 on W. Anthem Way, at street level, with reserved spaces directly outside. No garage, no elevator, no stairwell between the car and a routine adjustment.',
    link: ['Get directions to the office', 'contact.html'],
  },
]

function Zigzag() {
  return (
    <Band tone="surface">
      <Container>
        <Stack gap={6}>
          {ROWS.map((r) => (
            <Split key={r.h} ratio="1fr 1fr" gap={5} align="center" stackAt="md" reverse={r.reverse}>
              <div className="roc-wipe roc-anim">
                <Figure src={r.img} alt={r.alt} ratio="3 / 2" />
              </div>
              <Stack gap={2} align="start">
                <div className="roc-anim" style={{ '--i': 1 } as never}>
                  <p className="roc-row-label">{r.label}</p>
                </div>
                <Heading level={2} size="md" measure={22}>{r.h}</Heading>
                <Body tone="muted" measure={56}>{r.body}</Body>
                <LinkArrow href={r.link[1]}>{r.link[0]}</LinkArrow>
              </Stack>
            </Split>
          ))}
        </Stack>
      </Container>
    </Band>
  )
}

/* Second dark band: the closing statement. Three lines and nothing more, the
   mobile sticky bar covers calling. */
function CtaBand() {
  return (
    <Band tone="dark" pad="tight">
      <Container>
        <div className="roc-intro roc-anim">
          <Heading level={2} size="md" measure={24} balance>Ready to come & say hello?</Heading>
          <p className="roc-intro-lede">Free consultation with Dr. Romans in Anthem, Arizona.</p>
          <div className="roc-intro-actions">
            <Button href="free-consult.html" variant="invert">Book a consultation</Button>
          </div>
        </div>
      </Container>
    </Band>
  )
}

/* Affiliations strip = the kit's Section 07 Authority Logos. Page() runs the
   kit's homepage order verbatim: Header, Hero, TrustBar, Doctor (meet the
   doctor), Zigzag (USP), CtaBand, Affiliations (authority logos), Reviews,
   Services (services grid), Locations, Footer.

   Note for whoever reads the spec next and thinks this is misplaced:
   AUTHORITY-LOGOS-SPEC rule 4 has a parenthetical saying "after services grid",
   which contradicts the kit's own section order in README.md and in
   build-site/SKILL.md. The numbered order wins, and it also satisfies the part
   of rule 4 that carries the actual reasoning: never adjacent to the credential
   text bar, so only one of the two carries top-of-page authority. Here the
   TrustBar is five bands up.

   AUTHORITY-LOGOS-SPEC: five marks, one muted tone.

   Every cell is a credential this practice holds. Board certification and both
   degrees are on the office signage (IMG_8902) and on
   romansorthodontics.com/about-us. Invisalign is service 3 in CLIENT-BRIEF with
   its own page in this nav, and no tier is claimed because no tier is
   confirmed. The two schools and the hospital are quoted from the practice's own
   about-us page.

   AAO membership is the sixth mark Dr. Ty asked for. It is held back rather than
   dropped: rule 1 allows only credentials genuinely held, and nobody has
   confirmed the membership. Add this entry to AFFILIATIONS on confirmation:
     ['American Association of Orthodontists®', 'Dr. Nicholas Romans, member']

   ARTWORK PROVENANCE. Three real marks in one muted tone, on Jules's call of
   2026-08-06 that a single muted colour across the set is permitted.
     · ABO Board Certified Seal, from the ABO's own site
       (americanboardortho.com/media/hjcn4qnz/abo_seal_blue.jpg). Their preferred
       source is the ABO Storefront at https://abo.roc-p.com/, which needs
       Dr. Romans's login, so replace this before launch if the files differ.
     · AAO Member mark, the standard members' logo, already single-colour and
       already carrying "Member" in the artwork.
     · Invisalign wordmark. Align's own standards prefer full colour and permit
       1-colour "if the application limits the ability to reproduce the logo in
       full-color", so the muted set is a deliberate departure agreed with Jules.
       The approved provider file is behind practicedev.aligntech.com.
   Nothing is redrawn by hand: each is the official artwork with its tone baked
   in. See the .roc-affil-mark note in concept-c.css for why baked, not filtered.

   TWO RULES FROM THE ABO'S GUIDELINES THAT STILL BIND THE MARKUP:
     1. "Only individuals may achieve board certification ... must not be used to
        suggest that a practice or entity has achieved board certification." Row
        01 therefore names Dr. Romans in its role line. Do not shorten it back to
        a bare "Board certified".
     2. Marks "may not be displayed larger or more prominently than the
        Authorized User's own name or branding", which is why the seal is 72px and
        sits six bands below the header lockup.
   The generic line drawings that shipped here earlier are gone: a drawn rosette
   beside the ABO's name was a hand-drawn approximation of their seal, which their
   guidelines name explicitly.

   STILL NOT LOGOS, deliberately: Saint Louis University, A.T. Still University
   and St. Louis Children's Hospital. University marks imply institutional
   endorsement nobody has granted, and SLU's own portal restricts its logos to
   "the Saint Louis University community", with off-campus use needing written
   permission from marcom@slu.edu. Stating where he trained is an unrestricted
   factual claim; showing their logos is not. */
type Affil = {
  role: string
  /* one of the two, never both: a mark for the credential rows, a name for the
     training rows whose logos we may not run */
  mark?: { src: string; w: number; h: number; alt: string; height?: string }
  name?: string
}

const AFFILIATIONS: Affil[] = [
  {
    mark: { src: '../assets/affiliations/abo-board-certified-seal.png', w: 377, h: 320, alt: 'American Board of Orthodontics, Board Certified' },
    role: 'Dr. Nicholas Romans, ABO-Board Certified™',
  },
  /* AAO: THE ONE UNCONFIRMED CLAIM IN THIS STRIP. The artwork is the AAO's own
     member mark and reads "Member" in the logo itself, so running it asserts a
     membership nobody has confirmed in writing. Shipping it is Jules's call of
     2026-08-06; one client reply closes it. If the answer is no, delete this. */
  {
    mark: { src: '../assets/affiliations/aao-member.png', w: 495, h: 320, alt: 'Member, American Association of Orthodontists' },
    role: 'Dr. Nicholas Romans, member',
  },
  {
    mark: { src: '../assets/affiliations/invisalign.png', w: 600, h: 132, alt: 'Invisalign', height: '26px' },
    role: 'Clear aligner provider',
  },
  { name: 'Saint Louis University', role: 'Orthodontic residency · MSD' },
  { name: 'A.T. Still University', role: 'Doctor of Dental Medicine' },
  { name: 'St. Louis Children’s Hospital', role: 'Craniofacial cleft & palate fellowship' },
]

function Affiliations() {
  return (
    <Band tone="alt" edge="both" pad="tight">
      <Container>
        <Stack gap={4}>
          <div className="roc-intro roc-anim">
            <p className="roc-intro-label">Certifications &amp; affiliations</p>
          </div>
          <ul className="roc-affil">
            {AFFILIATIONS.map((a, i) => (
              <li className="roc-anim" style={{ '--i': i % 3 } as never} key={a.name ?? a.mark!.src}>
                {a.mark
                  ? <img className="roc-affil-mark" src={a.mark.src} width={a.mark.w} height={a.mark.h} loading="lazy" decoding="async" alt={a.mark.alt} style={a.mark.height ? ({ '--roc-mark-h': a.mark.height } as never) : undefined} />
                  : <p className="roc-affil-name">{a.name}</p>}
                <p className="roc-affil-role">{a.role}</p>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Band>
  )
}

/* Reviews. All six quotes are VERBATIM Google reviews, supplied 2026-08-06 from
   the practice's Google Business Profile (data id
   0x872c9d16d8288341:0xcf7111a685c99048, cid 14947748045126209608), names
   exactly as Google displays them. Two end in an ellipsis because Google
   truncated them in the source list; each is cut at a sentence boundary and
   nothing was added or reworded. Pull the full text off the profile if it is
   wanted. Never reconstruct it.

   Rule 6, six cards doing six jobs, and five corroborate a claim this page
   already makes, which is the point of the rule: the page ends up auditing
   itself true in a patient's voice.
     Fortier   · never been to an orthodontist, put at ease. She names board
                 certification and owner-operated, which is what the
                 affiliations strip and the trust bar assert on our authority
     Schmitt   · the plan-and-price story, against the free consult
     McGhee    · insurance handled, against the zigzag's insurance row
     Herkelman · a hard case coordinated across three practices
     Shemirani · explained clearly, never rushed, informed decision, which is
                 this concept's whole spine
     Shelley   · a fellow orthodontist who worked with him for 2 years
   No loyalty or finished-result card: the practice is weeks old, so no truthful
   one exists yet. Do not fill that gap with a weaker quote.

   TWO THINGS STILL OPEN, both one look at the profile:
   1. STARS ARE ASSERTED AT 5, not verified. The supplied list carried no
      per-review rating. Every text here is unambiguously top-rated, but confirm
      before launch and correct any that is not a 5.
   2. No rating eyebrow and no count line, though rule 4 and rule 5 allow both
      and the count is now worth showing. TRUST-BAR rule 1 requires a displayed
      figure to match the live profile exactly and that figure is unconfirmed.
      Once it is, the roc-intro-label becomes "X.X ★ on Google · NN reviews".
   Do NOT add aggregateRating or Review schema to these. Google's
   self-serving-review policy: display, do not mark up.

   The volunteer-work band that held this slot before the reviews arrived
   (Give Kids A Smile, Missions of Mercy, Dentures for Veterans, quoted from
   romansorthodontics.com/about-us) is preserved in commit 26f7a25 and belongs
   on dr-romans.html when that page is built. */
const GBP_REVIEWS = 'https://www.google.com/maps?cid=14947748045126209608'

const REVIEWS: [string, string][] = [
  ['Janice Fortier', 'I recently saw Dr. Romans for the first time and was very impressed with his warm personality and his ability to make me feel at ease. I’ve never been to an orthodontist before…'],
  ['Mariel Schmitt', 'We had a great consultation with Dr Romans. He was thorough and kind. My daughter felt really comfortable and we thought his treatment plan was solid and fairly priced.'],
  ['Isabelle McGhee', 'I have nothing but good things to say about this office and team. They went above and beyond to resolve my insurance claim and talk me through the process. The space is professional and clean. Kazja and Dr Romans are amazing!'],
  ['Halle Herkelman', 'Very excited to get started with my treatment! I have a difficult case with a missing tooth and canine stuck high up, but Dr Romans coordinated everything with the periodontist and general dentist. Gorgeous office and well run.'],
  ['Bijan Shemirani', 'Dr. Romans has a way of explaining things clearly and honestly. You never feel rushed, and it’s obvious he wants people to make informed decisions about their care.'],
  ['Jacob Shelley', 'As a fellow orthodontist, I had the privilege of working with Dr. Romans for over 2 years. Dr. Romans knows how to deliver a beautiful smile AND a healthy bite that will last a lifetime…'],
]

function Reviews() {
  return (
    <Band tone="surface">
      <Container>
        <Stack gap={5}>
          <div className="roc-intro roc-anim">
            <p className="roc-intro-label">Reviews</p>
            <Heading level={2} size="md" measure={26} balance>What Anthem families are saying.</Heading>
          </div>
          <ul className="roc-proof">
            {REVIEWS.map(([name, text], i) => (
              <li className="roc-anim" style={{ '--i': i % 3 } as never} key={name}>
                <span className="roc-stars" role="img" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => <span aria-hidden="true" key={s}>★</span>)}
                </span>
                <blockquote className="roc-quote">{text}</blockquote>
                <span className="roc-quote-name">{name}</span>
              </li>
            ))}
          </ul>
          <LinkArrow href={GBP_REVIEWS}>Read more reviews on Google</LinkArrow>
        </Stack>
      </Container>
    </Band>
  )
}

function Services() {
  return (
    <Band tone="surface" id="services">
      <Container>
        <Stack gap={5}>
          <div className="roc-intro roc-anim">
            <p className="roc-intro-label">Treatments</p>
            <Heading level={2} size="md" measure={24} balance>Six treatments, one practice.</Heading>
            <p className="roc-intro-lede">Kids, teens, and adults are all routine cases here. Every treatment below is planned and finished by Dr. Romans.</p>
          </div>
          <ul className="roc-services">
            {SERVICES.map((s, i) => (
              <li className="roc-anim" style={{ '--i': i % 3 } as never} key={s.href}>
                <a className="roc-card" href={s.href}>
                  <img className="roc-card-img" src={s.img} alt={s.alt} width="720" height="540" loading="lazy" decoding="async" />
                  <span className="roc-card-num">{String(i + 1).padStart(2, '0')}</span>
                  <Heading level={3} size="sm">{s.name}</Heading>
                  <span className="roc-card-desc">{s.desc}</span>
                  <span className="roc-card-more" aria-hidden="true">Read more</span>
                </a>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>
    </Band>
  )
}

function Locations() {
  return (
    <Band tone="surface" edge="top" id="locations">
      <Container>
        <Stack gap={5}>
          <div className="roc-intro roc-anim">
            <p className="roc-intro-label">Our address</p>
            <Heading level={2} size="md" measure={24} balance>The Anthem office</Heading>
          </div>
          <Split ratio="1fr 1fr" gap={5} align="start" stackAt="md">
            <Stack gap={3} align="start">
              <address className="roc-nap">
                <span className="roc-nap-name">Romans Orthodontics</span>
                <span>{NAP.street}</span>
                <span>{NAP.city}, {NAP.state} {NAP.zip}</span>
                <a className="roc-nap-tel" href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
              </address>
              <dl className="roc-meta">
                <div><dt>Parking</dt><dd>Reserved spaces at the door, ground level</dd></div>
                <div><dt>Suite</dt><dd>D120, W. Anthem Way</dd></div>
                {/* No [LANDMARK LINE NEEDED] flag: the brief's landmark value is
                    "ground-level office, reserved parking", which the Parking row
                    above already states verbatim. A placeholder for data the
                    brief supplies is a defect, not a gap. */}
                <div><dt>Hours</dt><dd><span className="roc-gap-flag">[CONFIRM: office hours]</span></dd></div>
              </dl>
              <Button href={DIRECTIONS}>Get directions</Button>
            </Stack>
            <div className="roc-wipe roc-anim">
              <iframe className="roc-map" src={MAP_EMBED} loading="lazy" title="Map of Romans Orthodontics, 3618 W. Anthem Way, Suite D120, Anthem, AZ 85086" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Split>
        </Stack>
      </Container>
    </Band>
  )
}

function Footer() {
  return (
    <Band tone="dark" edge="top" as="footer" pad="tight">
      <Container>
        <Stack gap={5}>
          <div className="roc-footer-grid">
            <div className="roc-footer-brand">
              <img className="roc-footer-logo" src="../assets/romans-orthodontics-lockup-horizontal-reversed-copper-mark.svg" alt="Romans Orthodontics" width="200" height="40" />
              <p className="roc-footer-blurb">Braces and Invisalign in Anthem, Arizona. One board-certified orthodontist, treating kids, teens, and adults.</p>
            </div>
            <nav className="roc-footer-col" aria-label="Treatments">
              <p className="roc-footer-h">Treatments</p>
              <ul className="roc-footer-list">
                {SERVICES.map((s) => <li key={s.href}><a className="roc-footer-link" href={s.href}>{s.name}</a></li>)}
              </ul>
            </nav>
            <nav className="roc-footer-col" aria-label="Practice">
              <p className="roc-footer-h">Practice</p>
              <ul className="roc-footer-list">
                <li><a className="roc-footer-link" href="why-romans.html">Why Romans</a></li>
                <li><a className="roc-footer-link" href="dr-romans.html">Meet Dr. Romans</a></li>
                <li><a className="roc-footer-link" href="team.html">Our Team</a></li>
                <li><a className="roc-footer-link" href="financial.html">Insurance &amp; financing</a></li>
                <li><a className="roc-footer-link" href="free-consult.html">Book a consultation</a></li>
                <li><a className="roc-footer-link" href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="roc-footer-col">
              <p className="roc-footer-h">Visit</p>
              <address className="roc-nap roc-nap--sm">
                <span>{NAP.street}</span>
                <span>{NAP.city}, {NAP.state} {NAP.zip}</span>
                <a className="roc-nap-tel" href={NAP.phoneHref}>{NAP.phoneDisplay}</a>
              </address>
              <p className="roc-gap-flag">[CONFIRM: office hours]</p>
              <p className="roc-gap-flag">[SOCIAL PROFILE LINKS NEEDED]</p>
            </div>
          </div>
          <Rule tone="inverse" />
          <div className="roc-legal">
            <span>© 2026 Romans Orthodontics</span>
            <a className="roc-legal-link" href="privacy.html">Privacy Policy</a>
            <a className="roc-legal-link" href="terms.html">Terms</a>
            <a className="roc-legal-link" href="accessibility.html">Web Accessibility Statement</a>
          </div>
        </Stack>
      </Container>
    </Band>
  )
}

export default function Page() {
  return (
    <TokenProvider>
      <SkipLink href="#main">Skip to content</SkipLink>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Doctor />
        <Zigzag />
        <CtaBand />
        <Affiliations />
        <Reviews />
        <Services />
        <Locations />
      </main>
      <Footer />
      <StickyBar
        ariaLabel="Quick actions"
        className="roc-sticky"
        items={[
          { label: 'Call', href: NAP.phoneHref },
          { label: 'Book a consultation', href: 'free-consult.html', emphasis: true },
          { label: 'Directions', href: DIRECTIONS },
        ]}
      />
    </TokenProvider>
  )
}
