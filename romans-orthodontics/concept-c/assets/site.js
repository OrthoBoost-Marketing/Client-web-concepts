/* Romans Orthodontics, concept-b. Shared behaviour for all pages.
   Vanilla, no dependencies, no injected content. */
(function () {
  'use strict';

  /* ---------- sticky header shadow ---------- */
  var hdr = document.querySelector('.hdr');
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle('is-stuck', window.scrollY > 4);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- desktop nav dropdowns ---------- */
  var subButtons = Array.prototype.slice.call(document.querySelectorAll('.nav [data-sub]'));

  function closeSubs(except) {
    subButtons.forEach(function (btn) {
      if (btn === except) return;
      btn.setAttribute('aria-expanded', 'false');
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.removeAttribute('data-open');
    });
  }

  subButtons.forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeSubs(btn);
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (panel) {
        if (open) panel.removeAttribute('data-open');
        else panel.setAttribute('data-open', '');
      }
    });
    var li = btn.parentElement;
    li.addEventListener('mouseleave', function () {
      btn.setAttribute('aria-expanded', 'false');
      if (panel) panel.removeAttribute('data-open');
    });
  });

  document.addEventListener('click', function () { closeSubs(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSubs(null); closeDrawer(); }
  });

  /* ---------- mobile drawer ---------- */
  var burger = document.querySelector('.burger');
  var drawer = document.querySelector('.drawer');
  var scrim = document.querySelector('.scrim');

  function openDrawer() {
    if (!drawer) return;
    drawer.setAttribute('data-open', '');
    if (scrim) scrim.setAttribute('data-open', '');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var first = drawer.querySelector('a, button');
    if (first) first.focus();
  }
  function closeDrawer() {
    if (!drawer || !drawer.hasAttribute('data-open')) return;
    drawer.removeAttribute('data-open');
    if (scrim) scrim.removeAttribute('data-open');
    if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    document.body.style.overflow = '';
  }

  if (burger) {
    burger.addEventListener('click', function () {
      if (drawer && drawer.hasAttribute('data-open')) closeDrawer();
      else openDrawer();
    });
  }
  if (scrim) scrim.addEventListener('click', closeDrawer);
  var drawerClose = document.querySelector('[data-drawer-close]');
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeDrawer();
    });
  }

  /* ---------- mobile sticky bar hides while a form is in view ---------- */
  var mbar = document.querySelector('.mbar');
  var formCard = document.querySelector('.form-card');
  if (mbar && formCard && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        mbar.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.12 }).observe(formCard);
  }
  /* also hide it while the on-screen keyboard is likely open */
  document.addEventListener('focusin', function (e) {
    var t = e.target;
    if (mbar && t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) mbar.classList.add('is-hidden');
  });
  document.addEventListener('focusout', function () {
    if (!mbar) return;
    setTimeout(function () {
      var a = document.activeElement;
      if (!a || !/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)) {
        if (!formCard || !('IntersectionObserver' in window)) mbar.classList.remove('is-hidden');
      }
    }, 60);
  });

  /* ---------- attribution capture: UTM + click ids, first touch persisted ----------
     Populates the hidden inputs the GHL webhook expects. No PHI, no health data. */
  var ATTR = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var STORE = 'ro_attr';

  function readStored() {
    try { return JSON.parse(sessionStorage.getItem(STORE) || '{}'); } catch (e) { return {}; }
  }

  var params = new URLSearchParams(window.location.search);
  var stored = readStored();
  var touched = false;

  ATTR.forEach(function (key) {
    var val = params.get(key);
    if (val && !stored[key]) { stored[key] = val; touched = true; }
  });
  if (!stored.landing_page) { stored.landing_page = window.location.pathname; touched = true; }
  if (!stored.referrer) { stored.referrer = document.referrer || 'direct'; touched = true; }
  if (touched) { try { sessionStorage.setItem(STORE, JSON.stringify(stored)); } catch (e) {} }

  Object.keys(stored).forEach(function (key) {
    Array.prototype.forEach.call(document.querySelectorAll('input[name="' + key + '"]'), function (input) {
      if (!input.value) input.value = stored[key];
    });
  });

  /* ---------- form submit ----------------------------------------------------
     NOT WIRED YET. The GoHighLevel inbound webhook URL is still TBD in
     CLIENT-BRIEF.md, so nothing is posted anywhere. This handler exists only so
     the funnel is clickable for review, and it navigates to thank-you.html.

     Deliberately not using action="thank-you.html" with method="get": that would
     put the visitor's name, phone and email into the URL query string.

     AT LAUNCH, replace this with the orthoboost-ghl-forms wiring plus the
     orthoboost-leads-connect backup, and keep thank-you.html as the redirect so
     it stays usable as the Ads/GA4/Meta conversion goal. */
  Array.prototype.forEach.call(document.querySelectorAll('form[data-consult-form]'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'One moment…'; }
      window.location.href = 'thank-you.html';
    });
  });
})();
