const menuIcon = document.getElementById('menu-icon');
const responsiveMenu = document.getElementById('menu-responsive');
const header = document.getElementById('header');

menuIcon.addEventListener('click', () => {
    if (menuIcon.classList.contains('bx-menu')) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
        responsiveMenu.style.display = 'flex';
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
        responsiveMenu.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        responsiveMenu.style.display = 'none';
        menuIcon.classList.replace('bx-x', 'bx-menu');
    }
});