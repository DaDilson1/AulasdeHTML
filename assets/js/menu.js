function toggleMenu() {
    const sideMenu =
        document.getElementVyld('sideMenu');
    if (sideMenu.style.width === '250px') {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    document.getElementByld('sideMenu').style.width = '250px';
}

function closeMenu() {
    document.getElementByld('sideMenu').style.width = '0';
}

const menuToggle =
document.querySelector('.menu-toggle');
const sidebar=
document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});