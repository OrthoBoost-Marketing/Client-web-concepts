/* OrthoBoost lead capture + attribution (Siouxland Orthodontics, concept-2).
 *
 * Loaded on every page. It only binds to forms that contain an email input, so
 * the site search form and any other form are left alone.
 *
 * Captures utm_* / click ids on first landing, persists them for 90 days
 * (sessionStorage + cookie), then posts them alongside the contact fields to
 * the GoHighLevel inbound webhook and redirects to the confirmation page.
 *
 * ############################################################################
 * # REQUIRED BEFORE LAUNCH: replace WEBHOOK with the real GoHighLevel        #
 * # inbound-webhook URL from Ty. While it reads PASTE_..., every submission   #
 * # is silently discarded and the lead is LOST. Do not go live like this.     #
 * ############################################################################
 *
 * The payload contract is case- and space-sensitive and must match the GHL
 * workflow mapping exactly: 'Full Name', 'Email', 'Phone', lowercase utm_*
 * and click ids, and capitalised 'Offer'. Content-Type must be
 * application/json — text/plain returns 200 but GHL will not parse it.
 *
 * 'Phone' is always sent E.164 ('+17122762766') regardless of how it was
 * typed, so GHL can dial/text it and dedupe against existing contacts.
 */
(function () {
  var WEBHOOK = 'PASTE_CLIENT_WEBHOOK_URL_HERE';
  var CONFIRM = 'appointment-confirmation.html';
  var OFFER = 'free-consult';

  var TRACK = {
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_content: 'utm_content',
    gclid: 'gclid',
    fbclid: 'fbclid',
    gbraid: 'gbraid',
    wbraid: 'wbraid',
  };
  var KEY = 'ob_attr';

  function setCookie(n, v, d) {
    var e = new Date();
    e.setTime(e.getTime() + d * 864e5);
    document.cookie = n + '=' + v + ';expires=' + e.toUTCString() + ';path=/;SameSite=Lax';
  }
  function getCookie(n) {
    var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)');
    return m ? m[1] : '';
  }
  function readStore() {
    try { var s = sessionStorage.getItem(KEY); if (s) return JSON.parse(s); } catch (e) {}
    var c = getCookie(KEY);
    if (c) { try { return JSON.parse(decodeURIComponent(c)); } catch (e) {} }
    return {};
  }
  function writeStore(o) {
    var v = JSON.stringify(o);
    try { sessionStorage.setItem(KEY, v); } catch (e) {}
    setCookie(KEY, encodeURIComponent(v), 90);
  }

  var store = readStore();
  var params = new URLSearchParams(location.search);
  var changed = false;
  Object.keys(TRACK).forEach(function (p) {
    var val = params.get(p);
    if (val) { store[p] = val; changed = true; }
  });
  if (changed) writeStore(store);

  function attr(p) {
    return new URLSearchParams(location.search).get(p) || store[p] || '';
  }
  function val(el) { return el && el.value ? el.value.trim() : ''; }

  /* ---- validation -------------------------------------------------------
   * NANP rules: 10 digits, area code and exchange both start 2-9. A leading
   * country code 1 is tolerated and stripped. This rejects 555-0100 style
   * placeholders and typo'd short numbers without rejecting real ones.
   */
  var PHONE_RE = /^[2-9]\d{2}[2-9]\d{6}$/;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

  function digits(s) { return String(s || '').replace(/\D/g, ''); }

  // Returns the bare 10 NANP digits, or '' when the input is not usable.
  function normPhone(raw) {
    var d = digits(raw);
    if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
    return PHONE_RE.test(d) ? d : '';
  }

  // Progressive display formatting for as-you-type: 7122 -> (712) 2
  function fmtPhone(d) {
    if (!d) return '';
    if (d.length <= 3) return '(' + d;
    if (d.length <= 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3);
    return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6, 10);
  }

  function fieldOf(el) {
    return (el && el.closest && el.closest('.field')) || (el && el.parentNode);
  }
  function setErr(el, msg) {
    var f = fieldOf(el);
    if (!f) return;
    f.classList.add('has-err');
    var p = f.querySelector('.err-msg');
    if (!p) {
      p = document.createElement('p');
      p.className = 'err-msg';
      p.id = (el.id || el.name || 'field') + '-err';
      p.setAttribute('role', 'alert');
      f.appendChild(p);
    }
    p.textContent = msg;
    el.setAttribute('aria-invalid', 'true');
    el.setAttribute('aria-describedby', p.id);
  }
  function clearErr(el) {
    var f = fieldOf(el);
    if (!f || !f.classList.contains('has-err')) return;
    f.classList.remove('has-err');
    var p = f.querySelector('.err-msg');
    if (p) p.textContent = '';
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  }

  function buildPayload(form, phone10) {
    var two = form.querySelectorAll('.two input');
    var data = {
      'Full Name': (val(two[0]) + ' ' + val(two[1])).trim(),
      'Email': val(form.querySelector('input[type=email]')),
      'Phone': '+1' + phone10,
    };
    Object.keys(TRACK).forEach(function (p) { data[p] = attr(p); });
    data['Offer'] = OFFER;
    return data;
  }

  function done() { location.href = CONFIRM; }

  var forms = document.querySelectorAll('form');
  Array.prototype.forEach.call(forms, function (form) {
    if (!form.querySelector('input[type=email]')) return; // lead forms only
    form.setAttribute('novalidate', '');

    var two = form.querySelectorAll('.two input');
    var emailEl = form.querySelector('input[type=email]');
    var phoneEl = form.querySelector('input[type=tel]');

    // Clear a field's error as soon as the visitor starts correcting it.
    Array.prototype.forEach.call(form.querySelectorAll('input'), function (el) {
      el.addEventListener('input', function () { clearErr(el); });
    });

    if (phoneEl) {
      phoneEl.setAttribute('inputmode', 'tel');
      phoneEl.addEventListener('input', function () {
        // Only reformat while typing at the end, so mid-string edits are not
        // fought by the caret jumping to the end.
        var atEnd;
        try { atEnd = phoneEl.selectionStart === phoneEl.value.length; }
        catch (e) { atEnd = true; }
        if (!atEnd) return;
        var d = digits(phoneEl.value);
        if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
        phoneEl.value = fmtPhone(d.slice(0, 10));
      });
      phoneEl.addEventListener('blur', function () {
        if (phoneEl.value.trim() && !normPhone(phoneEl.value)) {
          setErr(phoneEl, 'Please enter a 10-digit US phone number, like (712) 276-2766.');
        }
      });
    }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      var bad = null;
      function fail(el, msg) { setErr(el, msg); if (!bad) bad = el; }

      if (!val(two[0])) fail(two[0], 'Please enter your first name.');
      if (!val(two[1])) fail(two[1], 'Please enter your last name.');

      if (!val(emailEl)) fail(emailEl, 'Please enter your email address.');
      else if (!EMAIL_RE.test(val(emailEl))) fail(emailEl, 'That email address does not look right.');

      var phone10 = normPhone(val(phoneEl));
      if (!val(phoneEl)) fail(phoneEl, 'Please enter a phone number so we can reach you.');
      else if (!phone10) fail(phoneEl, 'Please enter a 10-digit US phone number, like (712) 276-2766.');

      if (bad) { bad.focus(); return; }

      var data = buildPayload(form, phone10);

      var btn = form.querySelector('button[type=submit]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        keepalive: true,
      }).then(done).catch(done);
    });
  });
})();
