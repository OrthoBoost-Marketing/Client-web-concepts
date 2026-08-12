/* ==========================================================================
   Romans Orthodontics — concept C
   Shared lead-form handler: attribution capture, validation, GHL webhook POST.

   Loaded by all 8 form pages:
     braces-for-kids, braces-for-adults, invisalign, early-treatment,
     retainers, airway-tmj, free-consult, contact

   Field contract: orthoboost-ghl-forms SKILL.md §1. The JSON keys below are
   case- and space-sensitive and must match the GHL merge fields exactly.
   Do not "tidy" `Full Name` into `full_name` — GHL reads it as
   {{inboundWebhookRequest.Full Name}} and a rename silently empties the contact.
   ========================================================================== */
(function () {
  'use strict';

  /* --- The ONE place the webhook lives. Phase 7 replaces this string. ----- */
  var WEBHOOK = 'https://services.leadconnectorhq.com/hooks/YWzz0CG4pZm6Q857GMG1/webhook-trigger/95Q2HVnDV7FNtHEq7X91';

  /* Leads platform backup (shadow mode): every lead is stored here first, then
     the site posts GHL itself and reports GHL's status back. Registration is a
     separate step on the platform — see orthoboost-leads-connect. */
  var BACKUP = 'https://leads.startorthoboost.com';
  var SITE_ID = 'romans-orthodontics';

  var CONFIRM = 'thank-you.html';
  var CALL_FALLBACK = 'or call us at (623) 320-1222';
  var STORE_KEY = 'roc_attr';
  var MIN_FILL_MS = 2500; /* faster than this = bot */

  /* URL query param -> webhook payload key. Note: lowercase `offer` in the
     URL becomes capitalized `Offer` in the payload. */
  var TRACK = {
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_content: 'utm_content',
    gclid: 'gclid',
    fbclid: 'fbclid',
    gbraid: 'gbraid',
    wbraid: 'wbraid',
    offer: 'Offer'
  };

  /* ---------------------------------------------------------------- store */
  function readStore() {
    try {
      var s = window.localStorage.getItem(STORE_KEY);
      return s ? JSON.parse(s) : {};
    } catch (e) { return {}; }
  }
  function writeStore(o) {
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(o)); } catch (e) {}
  }

  var params = new URLSearchParams(window.location.search);
  var store = readStore();
  var changed = false;
  Object.keys(TRACK).forEach(function (p) {
    var v = params.get(p);
    if (v) { store[p] = v; changed = true; }
  });
  if (changed) writeStore(store);

  /* URL wins (last touch), stored value is the fallback for visitors who
     landed on an ad page and converted somewhere else later. */
  function attr(p) { return params.get(p) || store[p] || ''; }

  /* ----------------------------------------------------------- error chrome */
  var STYLE_ID = 'roc-form-error-style';
  if (!document.getElementById(STYLE_ID)) {
    var st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent =
      '.roc-err{font-family:var(--font-body);font-size:15px;line-height:1.45;' +
      'color:var(--brand-ink,#6e3d21);margin:6px 0 0}' +
      '.roc-err[hidden]{display:none}' +
      '.roc-hp{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}';
    document.head.appendChild(st);
  }

  function errorSlot(field) {
    var slot = field.querySelector('.roc-err');
    if (!slot) {
      slot = document.createElement('p');
      slot.className = 'roc-err';
      slot.setAttribute('role', 'alert');
      slot.hidden = true;
      field.appendChild(slot);
    }
    return slot;
  }
  function clearErrors(form) {
    form.querySelectorAll('.roc-err').forEach(function (n) {
      n.hidden = true; n.textContent = '';
    });
    form.querySelectorAll('[aria-invalid]').forEach(function (n) {
      n.removeAttribute('aria-invalid');
    });
  }
  function fail(input, message) {
    var field = input.closest('.roc-field, .bfa-field, .fc-field, .ct-field') ||
                input.parentNode;
    var slot = errorSlot(field);
    slot.textContent = message;
    slot.hidden = false;
    input.setAttribute('aria-invalid', 'true');
    try { input.focus(); } catch (e) {}
    return false;
  }

  /* ------------------------------------------------------------ validation */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

  function digitsOf(s) { return (s || '').replace(/\D/g, ''); }

  function phoneProblem(raw) {
    var d = digitsOf(raw);
    if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
    if (d.length !== 10) return 'Please enter a 10 digit phone number, ' + CALL_FALLBACK + '.';
    if (d.charAt(0) === '0' || d.charAt(0) === '1') return 'That area code does not look right. Please check it, ' + CALL_FALLBACK + '.';
    if (/^(\d)\1{9}$/.test(d)) return 'Please enter a phone number we can actually reach you on, ' + CALL_FALLBACK + '.';
    return '';
  }

  function get(form, name) { return form.querySelector('[name="' + name + '"]'); }
  function val(el) { return el && el.value ? el.value.trim() : ''; }

  function validate(form) {
    clearErrors(form);

    var nameEl = get(form, 'full_name');
    var emailEl = get(form, 'email');
    var phoneEl = get(form, 'phone');
    var msgEl = get(form, 'message');

    if (nameEl && !val(nameEl)) {
      return fail(nameEl, 'Please tell us your name so we know who to ask for.');
    }
    if (emailEl) {
      var email = val(emailEl);
      if (!email) return fail(emailEl, 'Please add an email address, ' + CALL_FALLBACK + '.');
      /* checkValidity alone accepts a@b, so the TLD regex runs too. */
      if (!emailEl.checkValidity() || !EMAIL_RE.test(email)) {
        return fail(emailEl, 'That email address looks incomplete. Please check it, ' + CALL_FALLBACK + '.');
      }
    }
    /* A2P COMPLIANCE: phone must NOT be required on initial load. It becomes
       required only after launch. Leaving it blank is allowed; a number that IS
       supplied still has to be a real one. To re-require it at launch, restore:
         if (!phone) return fail(phoneEl, 'Please add a phone number, ' + CALL_FALLBACK + '.');
       and put the required attribute back on the input. */
    if (phoneEl) {
      var phone = val(phoneEl);
      if (phone) {
        var problem = phoneProblem(phone);
        if (problem) return fail(phoneEl, problem);
      }
    }
    if (msgEl && !val(msgEl)) {
      return fail(msgEl, 'Please add your question so we can answer it properly.');
    }
    return true;
  }

  /* --------------------------------------------------------------- payload */
  function buildPayload(form) {
    var nameEl = get(form, 'full_name');
    var emailEl = get(form, 'email');
    var phoneEl = get(form, 'phone');
    var msgEl = get(form, 'message');

    var fullName = val(nameEl);
    var email = val(emailEl);
    var phone = val(phoneEl);

    var data = {
      /* canonical GHL merge-field keys — exact capitalization, exact spacing */
      'Full Name': fullName,
      'Email': email,
      'Phone': phone,
      /* snake_case duplicates (site-launch-audit rule 18) — harmless, and they
         cover a mis-mapping on the GHL side */
      'full_name': fullName,
      'email': email,
      'phone': phone
    };

    Object.keys(TRACK).forEach(function (p) { data[TRACK[p]] = attr(p); });

    /* contact.html only: the single sanctioned free-text field. */
    if (msgEl) data['Message'] = val(msgEl);

    return data;
  }

  /* Exposed for automated verification only. */
  window.__rocBuildPayload = buildPayload;
  window.__rocValidate = validate;
  window.__rocWebhook = WEBHOOK;

  /* ---------------------------------------------------------------- submit */
  function done() { window.location.href = CONFIRM; }

  function wire(form) {
    form.setAttribute('novalidate', '');
    var loadedAt = Date.now();

    /* Honeypot: real people never fill this, bots fill everything. */
    if (!form.querySelector('[name="company_website"]')) {
      var hp = document.createElement('div');
      hp.className = 'roc-hp';
      hp.setAttribute('aria-hidden', 'true');
      hp.innerHTML = '<input type="text" name="company_website" tabindex="-1" autocomplete="off">';
      form.appendChild(hp);
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      var hpEl = get(form, 'company_website');
      var tooFast = (Date.now() - loadedAt) < MIN_FILL_MS;
      /* Bots get a clean success so they stop retrying. Nothing is POSTed. */
      if ((hpEl && hpEl.value) || tooFast) { done(); return; }

      if (!validate(form)) return;

      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

      var data = buildPayload(form);

      /* Shadow-mode backup. Fires BEFORE the GHL call so the lead is captured
         even if GHL drops it. Every call is wrapped so it can never block,
         delay or alter the GHL submit or the redirect. Until the site is
         registered on the platform this returns unknown_site, which is
         swallowed here by design. */
      var saved = null;
      try {
        saved = fetch(BACKUP + '/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.assign({ site_id: SITE_ID }, data)),
          keepalive: true
        }).then(function (r) { return r.json(); }).catch(function () { return null; });
      } catch (e) {}

      /* Reports GHL's own status back, so the dashboard can flag drops. */
      function report(ok, code) {
        if (!saved) return;
        try {
          saved.then(function (j) {
            if (!j || !j.id || !j.token) return;
            fetch(BACKUP + '/api/lead-result', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: j.id, token: j.token, ok: ok, code: code }),
              keepalive: true
            }).catch(function () {});
          }).catch(function () {});
        } catch (e) {}
      }

      /* GHL requires application/json; text/plain returns 200 and drops the body. */
      fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        keepalive: true
      }).then(function (res) {
        report(!!res.ok, res.status);
        done();
      }).catch(function () {
        report(false, 0);
        if (btn) { btn.disabled = false; btn.textContent = label; }
        done();
      });
    });
  }

  function init() {
    document.querySelectorAll('form').forEach(function (form) {
      if (!form.querySelector('input[type="email"]')) return;
      wire(form);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
