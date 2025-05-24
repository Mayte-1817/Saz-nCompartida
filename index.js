const btnOpenMenu = document.querySelector('.btn-menu-responsive');
const btnCloseMenu = document.querySelector('.btn-close');

const menuMobile = document.querySelector('.menu-mobile');

// Eventos
btnOpenMenu.addEventListener('click', () => {
    menuMobile.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});
document.querySelectorAll('.btn-favorite').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('active');
    });
});

