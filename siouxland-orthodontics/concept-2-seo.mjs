/* Siouxland Orthodontics — concept-2 SEO maintenance.
 *
 * IMPORTANT: this is NOT a site generator. The pages in concept-2/ are the
 * source of truth and are edited by hand. (build-concept-2.mjs is stale — see
 * build-concept-2.mjs.STALE.) This script only rewrites the small, mechanical
 * SEO bits that must stay consistent across every page:
 *
 *   - the <!-- OB:SEO --> block: rel=canonical, og:url, and robots noindex
 *   - og:image (kept on the same absolute origin)
 *   - sitemap.xml (indexable pages only)
 *   - robots.txt (with the Sitemap: line)
 *
 * It is idempotent: run it as many times as you like.
 *
 *   node concept-2-seo.mjs
 *
 * DOMAIN CUTOVER: change BASE below and re-run. That is the whole change.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/* ---------- the one line to change at cutover ---------- */
const BASE = 'https://orthoboost-marketing.github.io/Client-web-concepts/siouxland-orthodontics/concept-2';
/* e.g. at launch: const BASE = 'https://www.siouxlandorthodontics.com'; */

const DIR = join(dirname(fileURLToPath(import.meta.url)), 'concept-2');

// Never indexed: legal notices, the post-submit confirmation, and the 404.
const NOINDEX = new Set([
  'privacy.html',
  'terms.html',
  'hipaa.html',
  'appointment-confirmation.html',
  '404.html',
]);

const OG_IMAGE = `${BASE}/assets/photos/kids-sunset.jpg`;

const urlFor = (f) => (f === 'index.html' ? `${BASE}/` : `${BASE}/${f}`);

const files = readdirSync(DIR).filter((f) => f.endsWith('.html')).sort();

/* ---------- per-page head block ---------- */

for (const f of files) {
  const path = join(DIR, f);
  let html = readFileSync(path, 'utf8');
  const before = html;

  // Drop the previous block so re-runs do not stack.
  html = html.replace(/\n?<!-- OB:SEO -->[\s\S]*?<!-- \/OB:SEO -->/g, '');

  const url = urlFor(f);
  const robots = NOINDEX.has(f) ? `\n<meta name="robots" content="noindex, follow">` : '';
  const block =
    `\n<!-- OB:SEO --><link rel="canonical" href="${url}">` +
    `\n<meta property="og:url" content="${url}">${robots}` +
    `\n<!-- /OB:SEO -->`;

  // Keep og:image on the current origin.
  html = html.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${OG_IMAGE}$2`);

  const anchors = [
    /<meta property="og:image"[^>]*>/,
    /<meta name="description"[^>]*>/,
    /<\/title>/,
  ];
  let ok = false;
  for (const re of anchors) {
    const m = html.match(re);
    if (m) { html = html.replace(re, m[0] + block); ok = true; break; }
  }
  if (!ok) { console.error(`!! no <head> anchor found in ${f} — skipped`); continue; }

  if (html !== before) writeFileSync(path, html, 'utf8');
}

/* ---------- B-2 analytics (STUBBED, NOT LIVE) ----------
 *
 * Deliberately emitted as an HTML comment. The real GA4 measurement ID has not
 * been supplied yet, and shipping the snippet with a placeholder ID would fire
 * live hits at a non-existent property.
 *
 * TO ACTIVATE: replace G-XXXXXXXXXX below with the real GA4 ID from the client,
 * set ANALYTICS_LIVE = true, and re-run this script.
 */
const ANALYTICS_LIVE = false;
const GA4_ID = 'G-XXXXXXXXXX'; // <-- REPLACE, then set ANALYTICS_LIVE = true

function analyticsBlock(file) {
  const base =
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>\n` +
    `<script>\n` +
    `  window.dataLayer = window.dataLayer || [];\n` +
    `  function gtag(){dataLayer.push(arguments);}\n` +
    `  gtag('js', new Date());\n` +
    `  gtag('config', '${GA4_ID}');\n` +
    (file === 'appointment-confirmation.html'
      ? `  gtag('event', 'generate_lead', { currency: 'USD', value: 0 });\n`
      : '') +
    `</script>`;

  return ANALYTICS_LIVE
    ? `\n<!-- OB:ANALYTICS -->\n${base}\n<!-- /OB:ANALYTICS -->`
    : `\n<!-- OB:ANALYTICS -->\n<!-- ANALYTICS NOT LIVE: awaiting the real GA4 ID.\n` +
      `     Set ANALYTICS_LIVE = true and the real GA4_ID in concept-2-seo.mjs, then re-run it.\n` +
      base.replace(/--/g, '- -') +
      `\n-->\n<!-- /OB:ANALYTICS -->`;
}

function applyAnalytics(file) {
  const path = join(DIR, file);
  let html = readFileSync(path, 'utf8');
  const before = html;
  html = html.replace(/\n?<!-- OB:ANALYTICS -->[\s\S]*?<!-- \/OB:ANALYTICS -->/g, '');
  html = html.replace('</head>', `${analyticsBlock(file)}\n</head>`);
  if (html !== before) writeFileSync(path, html, 'utf8');
}

for (const f of files) applyAnalytics(f);

/* ---------- JSON-LD structured data ----------
 *
 * DELIBERATELY OMITTED, because the values are not confirmed and schema.org
 * markup is a factual claim to Google. Add them once the client confirms
 * against their Google Business Profiles:
 *
 *   geo / hasMap  — the lat-lngs used by the homepage map are approximations
 *                   derived from street addresses (see the TODO at the top of
 *                   assets/map.js). They must not be reused here.
 *   openingHoursSpecification — the site only says "By appointment, Monday
 *                   through Friday". No opening/closing times are known.
 *   priceRange    — not published, and the brand does not compete on price.
 */

const ORG_ID = `${BASE}/#organization`;
const LOGO = `${BASE}/assets/logo-main.png`;

const OFFICES = [
  { file: 'location-morningside.html', name: 'Morningside', street: '4224 Sergeant Rd', city: 'Sioux City', region: 'IA', zip: '51106', tel: '+1-712-276-2766' },
  { file: 'location-leeds.html', name: 'Leeds', street: '2801 Outer Dr N', city: 'Sioux City', region: 'IA', zip: '51104', tel: '+1-712-239-0420' },
  { file: 'location-lemars.html', name: 'Le Mars', street: '405 Plymouth St NW', city: 'Le Mars', region: 'IA', zip: '51031', tel: '+1-712-546-5179' },
  { file: 'location-wayne.html', name: 'Wayne', street: '617 Pearl St Ste #2', city: 'Wayne', region: 'NE', zip: '68787', tel: '+1-402-833-1333' },
];

const officeNode = (o) => ({
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${urlFor(o.file)}#office`,
  name: `Siouxland Orthodontics, ${o.name}`,
  url: urlFor(o.file),
  image: LOGO,
  logo: LOGO,
  telephone: o.tel,
  medicalSpecialty: 'Orthodontic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: o.street,
    addressLocality: o.city,
    addressRegion: o.region,
    postalCode: o.zip,
    addressCountry: 'US',
  },
  parentOrganization: { '@id': ORG_ID },
});

const orgNode = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': ORG_ID,
  name: 'Siouxland Orthodontics',
  url: `${BASE}/`,
  image: LOGO,
  logo: LOGO,
  telephone: '+1-712-276-2766',
  medicalSpecialty: 'Orthodontic',
  // Per the Jul 27 client call, do not state the office COUNT in copy: the ask
  // was to communicate convenience, not scale ("spread too thin").
  description:
    'Premium, personal orthodontic care for kids, teens, and adults across Siouxland, with convenient offices in Sioux City, Le Mars, and Wayne.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICES[0].street,
    addressLocality: OFFICES[0].city,
    addressRegion: OFFICES[0].region,
    postalCode: OFFICES[0].zip,
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Sioux City' },
    { '@type': 'City', name: 'Le Mars' },
    { '@type': 'City', name: 'Wayne' },
  ],
  department: OFFICES.map((o) => ({ '@id': `${urlFor(o.file)}#office` })),
};

function applyJsonLd(file, node) {
  const path = join(DIR, file);
  let html = readFileSync(path, 'utf8');
  const before = html;
  html = html.replace(/\n?<!-- OB:JSONLD -->[\s\S]*?<!-- \/OB:JSONLD -->/g, '');
  const block =
    `\n<!-- OB:JSONLD --><script type="application/ld+json">\n` +
    JSON.stringify(node, null, 2) +
    `\n</script>\n<!-- /OB:JSONLD -->`;
  html = html.replace('</head>', `${block}\n</head>`);
  if (html !== before) writeFileSync(path, html, 'utf8');
}

applyJsonLd('index.html', orgNode);
for (const o of OFFICES) applyJsonLd(o.file, officeNode(o));

/* ---------- sitemap.xml (indexable pages only) ---------- */

const indexable = files.filter((f) => !NOINDEX.has(f));
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable.map((f) => `  <url><loc>${urlFor(f)}</loc></url>`).join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(DIR, 'sitemap.xml'), sitemap, 'utf8');

/* ---------- robots.txt ---------- */

// Deliberately no Disallow lines for the NOINDEX pages: blocking them here
// would stop crawlers fetching the page at all, so they would never see the
// <meta name="robots" content="noindex"> that actually keeps them out of the
// index. Meta noindex does the work; robots.txt stays open.
const robotsBody =
  `User-agent: *\n` +
  `Allow: /\n\n` +
  `Sitemap: ${BASE}/sitemap.xml\n`;
writeFileSync(join(DIR, 'robots.txt'), robotsBody, 'utf8');

console.log(`BASE      ${BASE}`);
console.log(`pages     ${files.length} (${indexable.length} indexable, ${NOINDEX.size} noindex)`);
console.log(`sitemap   ${indexable.length} URLs`);
console.log('done.');
