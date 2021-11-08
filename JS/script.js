const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');

openMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
        openMenu(mobileMenu);
    })
})

closeMobileMenu.forEach(button => {
    button.addEventListener('click', () => {
        const mobileMenu = button.closest('.mobile-menu')
        closeMenu(mobileMenu);
    })
})

function openMenu(mobileMenu) {
    if(mobileMenu == null) return
    mobileMenu.classList.add('active');
}
 
function closeMenu(mobileMenu) {
    if(mobileMenu == null) return
    mobileMenu.classList.remove('active');
}