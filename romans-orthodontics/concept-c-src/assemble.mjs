/* Post-process the flatten output into the concept-c page shape the repo uses:
   design-system.css as a sibling file, the concept's CSS in the one inline
   <style> block, and the head extras flatten does not know about (noindex,
   canonical, the two hero preloads, the LocalBusiness JSON-LD). */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/* Resolved from this file's own location, so a checkout anywhere works. */
const BUILD = dirname(fileURLToPath(import.meta.url))
const OUT = join(BUILD, '../concept-c')
const flat = readFileSync(join(BUILD, 'flat.html'), 'utf8')

mkdirSync(OUT, { recursive: true })

/* ---- split the design system out of the inline <style> ------------------- */
const m = flat.match(/<style>\n([\s\S]*?)\n<\/style>/)
if (!m) throw new Error('assemble: no <style> block in the flatten output')
writeFileSync(join(OUT, 'design-system.css'), m[1].trim() + '\n', 'utf8')

const conceptCss = readFileSync(join(BUILD, 'concept-c.css'), 'utf8').trim()

/* ---- head --------------------------------------------------------------- */
/* openingHours, geo and areaServed are absent on purpose: the brief supplies
   none, and guessing a practice's hours into schema is a truth defect. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Romans Orthodontics',
  url: 'https://romansorthodontics.com/',
  telephone: '+1-623-320-1222',
  slogan: 'Live a little, smile a lot',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3618 W. Anthem Way, Suite D120',
    addressLocality: 'Anthem',
    addressRegion: 'AZ',
    postalCode: '85086',
    addressCountry: 'US',
  },
}

const head = `<meta name="robots" content="noindex">
<link rel="canonical" href="https://romansorthodontics.com/">
<link rel="preload" as="image" href="../assets/web/hero-dr-romans-office-wide.webp" media="(min-width:1000px)" fetchpriority="high">
<link rel="preload" as="image" href="../assets/web/hero-dr-romans-office-tall.webp" media="(max-width:999px)" fetchpriority="high">
<link rel="stylesheet" href="design-system.css">
<script type="application/ld+json">
${JSON.stringify(SCHEMA)}
</script>
<style>
${conceptCss}
</style>`

/* ---- reveal + keyboard scripts ------------------------------------------ */
/* The reveal observer is deliberately fail-open. Content is visible by default;
   the hidden state is armed only once this script runs, and if
   IntersectionObserver never reports (hidden iframe, zero-size root, print or
   screenshot rendering) everything is forced visible after 1.2s. An earlier
   version hid content in CSS and revealed it from a React effect, which shipped
   a permanently invisible page in exactly those contexts. Keep the fail-open
   property if you restructure this. */
const scripts = `<script>
(function(){
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches || !('IntersectionObserver' in window)) return;
  root.classList.add('roc-js');
  var fired = 0, io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { fired++; e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  function showAll(){
    root.classList.remove('roc-js');
    document.querySelectorAll('.roc-anim,.roc-wipe').forEach(function(el){ el.classList.add('is-in'); });
  }
  function scan(){ document.querySelectorAll('.roc-anim:not(.is-in),.roc-wipe:not(.is-in)').forEach(function(el){ io.observe(el); }); }
  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  setTimeout(function(){ if (fired === 0) showAll(); }, 1200);
  reduce.addEventListener('change', function(e){ if (e.matches) showAll(); });
})();
(function(){
  var vv = window.visualViewport; if(!vv) return;
  var base = vv.height;
  vv.addEventListener('resize', function(){
    document.body.setAttribute('data-kb', vv.height < base * 0.78 ? '1' : '0');
  });
})();
</script>`

let html = flat
  .replace(/<style>\n[\s\S]*?\n<\/style>/, head)
  .replace('</body>', `${scripts}\n</body>`)
  /* flatten emits a bare newline-indented font link block; normalise it */
  .replace(/\n  <link rel="preconnect"/, '\n<link rel="preconnect"')
  /* site-launch-audit rule 14: a real PNG favicon and a 180px apple-touch-icon
     alongside the SVG. flatten is client-agnostic and does not know the asset
     path, so the icon set is appended here. */
  .replace(
    /(<link rel="stylesheet" href="design-system\.css">)/,
    `$1
<link rel="icon" href="../assets/romans-orthodontics-icon.svg" type="image/svg+xml">
<link rel="icon" href="../assets/romans-orthodontics-favicon-48.png" sizes="48x48" type="image/png">
<link rel="apple-touch-icon" href="../assets/romans-orthodontics-apple-touch-icon-180.png">`,
  )
  /* React passes these through verbatim as unknown props. HTML parses attribute
     names case-insensitively so they work either way, but the emitted file is
     the thing the page-builders copy chrome from, so keep it valid HTML. */
  .replace(/ srcSet=/g, ' srcset=')
  .replace(/ fetchPriority=/g, ' fetchpriority=')
  .replace(/ referrerPolicy=/g, ' referrerpolicy=')
  /* React 19 auto-injects an <img> preload into the body. The head already
     preloads the LCP hero with the right media conditions; a body-level
     preload for the header lockup is noise the head contract does not want. */
  .replace(/<link rel="preload" as="image" href="[^"]*lockup-horizontal\.svg"\s*\/?>/g, '')

writeFileSync(join(OUT, 'index.html'), html, 'utf8')
console.log(`✓ ${join(OUT, 'index.html')}  ${(html.length / 1024).toFixed(1)} KB`)
console.log(`✓ ${join(OUT, 'design-system.css')}  ${(m[1].length / 1024).toFixed(1)} KB`)
