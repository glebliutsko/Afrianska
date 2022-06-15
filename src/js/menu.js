'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const buttonOpen = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.popup-menu');
    const overlay = document.querySelector('.popup-menu__grey-overlay');

    function openMenu() {
        menu.classList.remove('popup-menu_disabled');
    }

    function closeMenu() {
        menu.classList.add('popup-menu_disabled');
    }

    buttonOpen.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
})