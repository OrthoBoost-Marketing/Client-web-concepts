/* Scroll reveals (Jul 27 direction: mature and modern, never busy).
   Gated on html.anim so no-JS and reduced-motion users get the full static design. */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('anim');

  var GROUPS = ['.promos', '.tiles', '.pillars', '.kicks', '.offices', '.steps', '.benefits', '.checklist'];
  var SINGLES = ['main .sechead', 'main .split > *', '.cta-band', '.quote-strip', '.pagehead-in > *', '#loc-map', 'main details'];

  var els = [];
  GROUPS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (box) {
      Array.prototype.forEach.call(box.children, function (child, i) {
        child.classList.add('sr');
        child.style.setProperty('--srd', (Math.min(i, 7) * 0.08) + 's');
        els.push(child);
      });
    });
  });
  SINGLES.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!el.classList.contains('sr') && !el.querySelector('.sr')) {
        el.classList.add('sr');
        els.push(el);
      }
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  els.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) { el.classList.add('in'); } // already on screen: no pop
    else { io.observe(el); }
  });
})();
