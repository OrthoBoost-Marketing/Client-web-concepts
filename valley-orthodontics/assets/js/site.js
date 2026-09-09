'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 1100px)');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}
menuButton.hidden = false;
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
// Avoid competing booking actions while the main booking panel is in view.
const bookingBar = document.querySelector('.mobile-booking');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    const visible = entries[0].isIntersecting;
    // Keep a keyboard user's focused control available until focus leaves it.
    if (!bookingBar.contains(document.activeElement)) bookingBar.hidden = visible;
  }, {threshold: 0.15}).observe(document.querySelector('.booking-card'));
}
// TODO: Keep submission blocked until both approved delivery endpoints are configured and tested.
document.querySelector('#consultation-form').addEventListener('submit', event => {
  event.preventDefault();
});
