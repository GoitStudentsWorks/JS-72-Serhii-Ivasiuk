import { refs } from './utility/refs';

let isMenuOpen = false;
refs.mobMenuBtn.addEventListener('click', toggleMenu);

export function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  refs.mobMenuEl.classList.toggle('is-open');
  refs.mobMenuBtn.classList.toggle('is-open');
  onWidestScreen();
  // прокрутка сторінки
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  window
    .matchMedia('(max-width: 768px)')
    .removeEventListener('change', onTurnScreen);
}
function onWidestScreen() {
  // закриття меню при ширших екранах
  window
    .matchMedia('(max-width: 768px)')
    .addEventListener('change', onTurnScreen);
}
function onTurnScreen(e) {
  if (!e.matches && isMenuOpen) {
    refs.mobMenuEl.classList.toggle('is-open');
    refs.mobMenuBtn.classList.toggle('is-open');
    isMenuOpen = false;
    document.body.style.overflow = '';
  }
}

activePage();

function activePage() {
  if (window.location.pathname === '/') {
    refs.mainPageEl.forEach(el => el.classList.add('is-active-now'));
    refs.listPageEl.forEach(el => el.classList.remove('is-active-now'));
  } else {
    refs.mainPageEl.forEach(el => el.classList.remove('is-active-now'));
    refs.listPageEl.forEach(el => el.classList.add('is-active-now'));
  }
}
