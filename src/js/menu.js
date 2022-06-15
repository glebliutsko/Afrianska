'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const buttonOpen = document.querySelector('.header__burger-button');
    const buttonClose = document.querySelector('.popup-menu__close-button');
    
    const menu = document.querySelector('.popup-menu');
    const overlay = document.querySelector('.popup-menu__grey-overlay');

    function openMenu(e) {
        console.log(e);
        menu.classList.remove('popup-menu_disabled');
    }

    function closeMenu(e) {
        menu.classList.add('popup-menu_disabled');
    }

    buttonOpen.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu);
})