const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

if (hamburger && mobileMenu && closeMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('show'));
    closeMenu.addEventListener('click', () => mobileMenu.classList.remove('show'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('show'));
    });
}

const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll(`a[href="${currentPath}"]`).forEach(a => {
    a.parentElement.classList.add('active');
});