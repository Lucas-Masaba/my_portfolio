const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');

function openMenu(mobileMenu, mainTag) {
  if (mobileMenu == null) return;
  mobileMenu.classList.add('active');
  mainTag.classList.add('blur');
}

function closeMenu(mobileMenu) {
  if (mobileMenu == null) return;
  mobileMenu.classList.remove('active');
  mainTag.classList.remove('blur');
}
openMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
    openMenu(mobileMenu, mainTag);
  });
});

closeMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = button.closest('.mobile-menu');
    closeMenu(mobileMenu);
  });
});