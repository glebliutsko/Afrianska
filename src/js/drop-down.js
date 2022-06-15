'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const dropDownMenus = document.querySelectorAll('.titled-links-list.titled-links-list_drop-down');
    
    function toggleMenu(menu) {
        menu.classList.toggle('titled-links-list_drop-down_collapsed');
    }


    for (let i = 0; i < dropDownMenus.length; i++) {
        let headerContainer = dropDownMenus[i].querySelector('.titled-links-list__header-container');
        headerContainer.addEventListener('click', () => {
            toggleMenu(dropDownMenus[i]);
        });
    }
});