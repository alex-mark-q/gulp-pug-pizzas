const side_wrapper = document.querySelector('.mobile__popup');
const side_content = document.querySelector('.mobile__wrapper');
const open_btn = document.querySelector('.mobile__menu');
const close_btn = document.querySelector('.mobile__close');

open_btn.addEventListener('click', openMenu);
close_btn.addEventListener('click', closeMenu);
window.addEventListener('click', outsideClick);

function openMenu() {
  side_wrapper.classList.add('active');
  side_content.classList.add('slideIn');
  document.querySelector('body').style.overflow = 'hidden';
}

function closeMenu() {
  side_wrapper.classList.remove('active');
  side_content.classList.remove('slideIn');
  document.querySelector('body').style.overflow = 'auto';
}

function outsideClick(e) {
  if (e.target === side_wrapper) {
    closeMenu();
  }
}