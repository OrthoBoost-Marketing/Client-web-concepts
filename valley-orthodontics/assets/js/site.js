'use strict';
// Valley Orthodontics homepage concepts: menu, mobile action bar, reveal motion.
// No form handling lives here: the homepage books by phone by rule; the
// appointment page will carry the form and its delivery.
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 1100px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}
closeMenu();
mobile.addEventListener('change', closeMenu);
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.hidden = !opening;
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (mobile.matches && !event.target.closest('.header')) closeMenu();
});

// Hide the sticky action bar while the schedule section (big phone, hours,
// directions) is on screen, so two booking surfaces never compete.
const bar = document.querySelector('.mobile-bar');
const schedule = document.querySelector('#schedule');
if (bar && schedule && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    if (!bar.contains(document.activeElement)) bar.hidden = entries[0].isIntersecting;
  }, { threshold: 0.2 }).observe(schedule);
}

// Reveal: content is visible without JS. With JS, sections fade up once as
// they enter; a fallback timer reveals everything if the observer never fires
// (hidden tabs, headless renderers). Reduced-motion users get no transition.
const reveals = document.querySelectorAll('.reveal');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce || !('IntersectionObserver' in window)) {
  reveals.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach(el => io.observe(el));
  setTimeout(() => reveals.forEach(el => el.classList.add('in')), 1800);
}
