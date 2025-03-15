const menuButton = document.querySelector('.menu-button');
const fullScreenMenu = document.querySelector('.full-screen-menu');
const closeMenu = document.querySelector('.close-menu');

if (menuButton && fullScreenMenu && closeMenu) {
    menuButton.addEventListener('click', () => fullScreenMenu.classList.toggle('show'));
    closeMenu.addEventListener('click', () => fullScreenMenu.classList.remove('show'));
    fullScreenMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => fullScreenMenu.classList.remove('show'));
    });
}

const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll(`a[href="${currentPath}"]`).forEach(a => {
    a.parentElement.classList.add('active');
});