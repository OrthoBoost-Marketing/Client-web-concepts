/* Siouxland Orthodontics — concept-2 SEO maintenance.
 *
 * NOT a site generator. The pages in concept-2/ are the source of truth and
 * are edited by hand. This script only rewrites the small, mechanical bits of
 * <head> that must stay consistent across every page, so they cannot drift.
 *
 * Currently owns:
 *   - rel="canonical"  (self-referencing, one per page)
 *   - og:url           (same value as the canonical)
 *   - robots noindex   (legal pages, thank-you, 404 — and nothing else)
 *   - analytics        (GA4, emitted inert until a real ID exists)
 *   - homepage JSON-LD (Organization, linked to the four location nodes)
 *   - sitemap.xml + robots.txt
 *
 * It is idempotent: the block it writes is fenced in <!-- OB:SEO --> markers
 * and replaced wholesale on each run. Run it as often as you like.
 *
 *   node concept-2-seo.mjs
 *
 * DOMAIN CUTOVER: change BASE below and re-run. That is the whole change.
 * (og:image is already absolute on the same origin; a cutover should sweep
 * those too, which is why they are checked here rather than silently left.)
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/* ---------- the one line to change at cutover ---------- */
const BASE = 'https://orthoboost-marketing.github.io/Client-web-concepts/siouxland-orthodontics/concept-2';
/* at launch, e.g.: const BASE = 'https://www.siouxlandorthodontics.com'; */

const DIR = join(dirname(fileURLToPath(import.meta.url)), 'concept-2');

// Never indexed: legal notices, the post-submit confirmation, and the 404.
// Everything else (including doctors.html and team.html) stays indexable.
const NOINDEX = new Set([
  'privacy.html',
  'terms.html',
  'hipaa.html',
  'thank-you.html',
  '404.html',
]);

/* ---------- B-2 analytics: staged, NOT live ----------
 * Emitted as an HTML comment until a real GA4 ID exists. Shipping the snippet
 * with a placeholder ID would fire live hits at a property that does not exist.
 * TO ACTIVATE: set the real ID and flip ANALYTICS_LIVE, then re-run.
 */
const ANALYTICS_LIVE = false;
const GA4_ID = 'G-XXXXXXXXXX'; // <-- REPLACE, then set ANALYTICS_LIVE = true

// index.html canonicalises to the directory root, not to /index.html, so the
// two URLs cannot compete for the same content.
const urlFor = (f) => (f === 'index.html' ? `${BASE}/` : `${BASE}/${f}`);

const files = readdirSync(DIR).filter((f) => f.endsWith('.html')).sort();

let written = 0;
const noAnchor = [];
const staleOrigin = [];

for (const f of files) {
  const path = join(DIR, f);
  let html = readFileSync(path, 'utf8');
  const before = html;

  // Drop any previous block first so re-runs replace rather than stack.
  html = html.replace(/\n?<!-- OB:SEO -->[\s\S]*?<!-- \/OB:SEO -->/g, '');

  // Strip any pre-existing hand-placed robots tag so this script is the single
  // source of truth for indexability and the two spellings cannot diverge.
  html = html.replace(/[ \t]*<meta name="robots"[^>]*>\n?/g, '');

  const url = urlFor(f);
  const robots = NOINDEX.has(f)
    ? `\n<meta name="robots" content="noindex, follow">`
    : '';
  const block =
    `\n<!-- OB:SEO --><link rel="canonical" href="${url}">` +
    `\n<meta property="og:url" content="${url}">${robots}` +
    `\n<!-- /OB:SEO -->`;

  // Insert after the most stable anchor each page actually has. 404.html has
  // no og:image or description, so <title> is the fallback that always exists.
  const anchors = [
    /<meta property="og:image"[^>]*>/,
    /<meta name="description"[^>]*>/,
    /<\/title>/,
  ];
  let placed = false;
  for (const re of anchors) {
    const m = html.match(re);
    if (m) { html = html.replace(re, m[0] + block); placed = true; break; }
  }
  if (!placed) { noAnchor.push(f); continue; }

  // Flag any absolute self-reference still pointing at a different origin than
  // BASE, so a domain cutover cannot half-happen and go unnoticed.
  const origin = new URL(BASE).origin;
  for (const m of html.matchAll(/(?:content|href)="(https?:\/\/[^"]+)"/g)) {
    const u = m[1];
    if (/orthoboost-marketing\.github\.io|siouxlandorthodontics\.com/.test(u) && !u.startsWith(origin)) {
      staleOrigin.push(`${f}: ${u}`);
    }
  }

  if (html !== before) { writeFileSync(path, html, 'utf8'); written++; }
}

/* ---------- analytics (inert until ANALYTICS_LIVE) ---------- */

function analyticsBlock(file) {
  const snippet =
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>\n` +
    `<script>\n` +
    `  window.dataLayer = window.dataLayer || [];\n` +
    `  function gtag(){dataLayer.push(arguments);}\n` +
    `  gtag('js', new Date());\n` +
    `  gtag('config', '${GA4_ID}');\n` +
    (file === 'thank-you.html'
      ? `  gtag('event', 'generate_lead', { currency: 'USD', value: 0 });\n`
      : '') +
    `</script>`;

  if (ANALYTICS_LIVE) return `\n<!-- OB:ANALYTICS -->\n${snippet}\n<!-- /OB:ANALYTICS -->`;
  return (
    `\n<!-- OB:ANALYTICS -->\n<!-- ANALYTICS NOT LIVE: awaiting the real GA4 ID.\n` +
    `     Set GA4_ID and ANALYTICS_LIVE = true in concept-2-seo.mjs, then re-run.\n` +
    snippet.replace(/--/g, '- -') +
    `\n-->\n<!-- /OB:ANALYTICS -->`
  );
}

for (const f of files) {
  const path = join(DIR, f);
  let html = readFileSync(path, 'utf8');
  const before = html;
  html = html.replace(/\n?<!-- OB:ANALYTICS -->[\s\S]*?<!-- \/OB:ANALYTICS -->/g, '');
  html = html.replace('</head>', `${analyticsBlock(f)}\n</head>`);
  if (html !== before) writeFileSync(path, html, 'utf8');
}

/* ---------- JSON-LD hygiene ----------
 *
 * The four location pages ship hand-written Dentist schema. Two claims in it
 * are removed here rather than corrected, because correcting them would mean
 * asserting facts nobody has confirmed:
 *
 *   openingHoursSpecification — every page claimed Mon-Thu 08:00-16:00 plus
 *     Fri 08:00-12:00, the same block copy-pasted four times. Per the practice's
 *     own current listings, only Morningside is open multiple days; Leeds is
 *     Thursday only, Le Mars Monday only, Wayne Wednesday only. Structured data
 *     feeds Google's displayed opening hours, so a wrong claim here can send a
 *     patient to a closed office. Re-add once Dr. Williams confirms the real
 *     schedule under Siouxland.
 *
 *   priceRange — "$$" is unverified and the brand does not compete on price.
 *
 * geo is left alone but flagged: the coordinates here differ from the ones the
 * homepage map uses (Morningside 42.4487 here vs 42.4593 on the map), and the
 * map's own source comments them as approximations. Both sets cannot be right.
 */
const STRIP_KEYS = ['openingHoursSpecification', 'priceRange'];
const stripped = [];

for (const f of files) {
  const path = join(DIR, f);
  const html = readFileSync(path, 'utf8');
  const m = html.match(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/);
  if (!m) continue;

  let node;
  try { node = JSON.parse(m[2]); } catch { console.log(`!! unparseable JSON-LD in ${f}`); continue; }

  const removed = STRIP_KEYS.filter((k) => k in node);
  if (!removed.length) continue;
  for (const k of removed) delete node[k];

  writeFileSync(
    path,
    html.replace(m[0], `${m[1]}\n${JSON.stringify(node, null, 2)}\n${m[3]}`),
    'utf8'
  );
  stripped.push(`${f}: ${removed.join(', ')}`);
}

/* ---------- homepage Organization node ---------- */

const LOCATION_PAGES = files.filter((f) => f.startsWith('location-'));

const orgNode = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${BASE}/#organization`,
  name: 'Siouxland Orthodontics',
  url: `${BASE}/`,
  image: `${BASE}/assets/logo-main.png`,
  logo: `${BASE}/assets/logo-main.png`,
  telephone: '(712) 276-2766',
  medicalSpecialty: 'Orthodontic',
  // Per the Jul 27 call, copy must not state the office COUNT.
  description:
    'Premium, personal orthodontic care for kids, teens, and adults across Siouxland, with convenient offices in Sioux City, Le Mars, and Wayne.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4224 Sergeant Rd',
    addressLocality: 'Sioux City',
    addressRegion: 'IA',
    postalCode: '51106',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Sioux City' },
    { '@type': 'City', name: 'Le Mars' },
    { '@type': 'City', name: 'Wayne' },
  ],
  department: LOCATION_PAGES.map((f) => ({ '@id': `${urlFor(f)}#office` })),
};

{
  const path = join(DIR, 'index.html');
  let html = readFileSync(path, 'utf8');
  html = html.replace(/\n?<!-- OB:JSONLD -->[\s\S]*?<!-- \/OB:JSONLD -->/g, '');
  const block =
    `\n<!-- OB:JSONLD --><script type="application/ld+json">\n` +
    JSON.stringify(orgNode, null, 2) +
    `\n</script>\n<!-- /OB:JSONLD -->`;
  writeFileSync(path, html.replace('</head>', `${block}\n</head>`), 'utf8');
}

// Give each location node a stable @id so the homepage department[] resolves.
for (const f of LOCATION_PAGES) {
  const path = join(DIR, f);
  const html = readFileSync(path, 'utf8');
  const m = html.match(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/);
  if (!m) continue;
  let node;
  try { node = JSON.parse(m[2]); } catch { continue; }
  if (node['@id']) continue;
  const withId = { '@context': node['@context'], '@type': node['@type'], '@id': `${urlFor(f)}#office`, ...node };
  delete withId['@context']; delete withId['@type'];
  const ordered = { '@context': node['@context'], '@type': node['@type'], '@id': `${urlFor(f)}#office`, ...withId };
  writeFileSync(path, html.replace(m[0], `${m[1]}\n${JSON.stringify(ordered, null, 2)}\n${m[3]}`), 'utf8');
}

/* ---------- sitemap.xml + robots.txt ---------- */

const indexable = files.filter((f) => !NOINDEX.has(f));
writeFileSync(
  join(DIR, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexable.map((f) => `  <url><loc>${urlFor(f)}</loc></url>`).join('\n') +
    `\n</urlset>\n`,
  'utf8'
);

// No Disallow lines for the NOINDEX pages on purpose: blocking them here would
// stop crawlers fetching the page at all, so they would never see the noindex
// meta that actually keeps them out of the index.
writeFileSync(
  join(DIR, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`,
  'utf8'
);

console.log(`BASE     ${BASE}`);
console.log(`pages    ${files.length} (${indexable.length} indexable, ${NOINDEX.size} noindex)`);
console.log(`written  ${written}`);
console.log(`sitemap  ${indexable.length} URLs`);
console.log(`analytics ${ANALYTICS_LIVE ? 'LIVE' : 'staged (inert, awaiting GA4 ID)'}`);
if (stripped.length) {
  console.log(`unverified schema claims removed:`);
  for (const s of stripped) console.log(`     ${s}`);
}
if (noAnchor.length) console.log(`!! no <head> anchor, skipped: ${noAnchor.join(', ')}`);
if (staleOrigin.length) {
  console.log(`!! absolute URLs not on BASE origin:`);
  for (const s of [...new Set(staleOrigin)]) console.log(`     ${s}`);
}
console.log('done.');
