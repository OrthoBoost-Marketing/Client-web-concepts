'use strict';
// Valley Orthodontics homepage concepts: menu, mobile action bar, one motion moment.
// No form handling lives here: the homepage books by phone by rule; the
// appointment page will carry the form and its delivery.

// Stagger indexes first, then opt in to motion, so the hero entrance runs once in order.
document.querySelectorAll('.hero-copy > *, .moment > *, .moment tr').forEach((el) => {
  el.style.setProperty('--i', [...el.parentElement.children].indexOf(el));
});
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 1100px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = !open && mobile.matches;
  document.body.classList.toggle('nav-open', open && mobile.matches);
}
setMenu(false);
mobile.addEventListener('change', () => { setMenu(false); syncDropdowns(); });
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
// A dropdown trigger must not close the drawer it just opened.
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && !event.target.closest('.dd-trigger')) setMenu(false);
});

// Nav dropdowns. Desktop opens on hover and focus, which is CSS. Under 1100 the
// trigger becomes an accordion so a thumb can open it without navigating away.
const dropdowns = [...document.querySelectorAll('.nav-dd')];
function syncDropdowns() {
  dropdowns.forEach((dd) => {
    const trigger = dd.querySelector('.dd-trigger');
    if (mobile.matches) {
      trigger.setAttribute('aria-expanded', dd.dataset.open === 'true' ? 'true' : 'false');
    } else {
      dd.dataset.open = 'false';
      trigger.removeAttribute('aria-expanded');
    }
  });
}
dropdowns.forEach((dd) => {
  const trigger = dd.querySelector('.dd-trigger');
  trigger.addEventListener('click', (event) => {
    if (!mobile.matches) return;
    event.preventDefault();
    dd.dataset.open = dd.dataset.open === 'true' ? 'false' : 'true';
    trigger.setAttribute('aria-expanded', dd.dataset.open);
  });
});
syncDropdowns();
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) { setMenu(false); menuButton.focus(); }
});
document.addEventListener('click', (event) => {
  if (mobile.matches && !event.target.closest('.header')) setMenu(false);
});

// Hide the sticky action bar while the schedule section (big phone, hours,
// directions) is on screen, so two booking surfaces never compete.
const bar = document.querySelector('.mobile-bar');
const schedule = document.querySelector('#schedule');
if (bar && schedule && 'IntersectionObserver' in window) {
  new IntersectionObserver((entries) => {
    if (!bar.contains(document.activeElement)) bar.hidden = entries[0].isIntersecting;
  }, { threshold: 0.2 }).observe(schedule);
}

// The one observed moment: the concept's signature device settles in when it
// first enters the viewport. Visible without JS; a timer forces it in if the
// observer never fires (hidden tabs, headless renderers).
const moment = document.querySelector('.moment');
if (moment) {
  const settle = () => moment.classList.add('in');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { settle(); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(moment);
    setTimeout(settle, 1800);
  } else {
    settle();
  }
}
