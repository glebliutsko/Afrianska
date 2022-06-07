'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const buttonOpen = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.popup-menu');
    const overlay = document.querySelector('.popup-menu__grey-overlay');

    function openMenu() {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('popup-menu_enable');
        }, 10);
    }

    function closeMenu() {
        menu.classList.remove('popup-menu_enable');
        document
            .querySelector('.popup-menu__navigation')
            .addEventListener('transitionend', () => {
                menu.style.display = 'none';
            }, {once : true});
    }

    buttonOpen.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
})