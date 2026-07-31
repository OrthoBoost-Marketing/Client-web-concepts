/* Motion layer (Jul 27 direction: mature and modern, never busy).
   Everything is gated on html.anim, which is only added when the visitor has
   not asked for reduced motion, so no-JS and reduced-motion visitors always
   get the complete static design. */
(function () {
  var root = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  root.classList.add('anim');

  var GROUPS = ['.promos', '.tiles', '.pillars', '.kicks', '.offices', '.steps',
                '.benefits', '.checklist', '.chips', '.foot-cols'];
  var SINGLES = ['.hero-copy > *', '.pagehead-in > *', 'main .sechead', 'main .split > *',
                 '.cta-band', '.quote-strip', 'main details', '#loc-map', '.prefoot-in > *'];

  var targets = [];

  GROUPS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (box) {
      Array.prototype.forEach.call(box.children, function (child, i) {
        child.classList.add('sr');
        child.style.setProperty('--srd', (Math.min(i, 7) * 0.07) + 's');
        targets.push(child);
      });
    });
  });

  SINGLES.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!el.classList.contains('sr') && !el.querySelector('.sr')) {
        el.classList.add('sr');
        targets.push(el);
      }
    });
  });

  targets.sort(function (a, b) {
    return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  // The first screen introduces itself on load in document order; everything
  // below waits until it is actually scrolled to.
  var intro = 0;
  targets.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.style.setProperty('--srd', (Math.min(intro++, 8) * 0.07) + 's');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { el.classList.add('in'); });
      });
    } else {
      io.observe(el);
    }
  });

  var header = document.querySelector('header');
  var sticky = document.querySelector('.sticky-cta');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('scrolled', y > 8);
      if (sticky) root.classList.toggle('cta-on', y > window.innerHeight * 0.55);
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
