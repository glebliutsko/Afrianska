'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollPostion = 0;
    let isVisible = true;

    function headerVisibleControl(isVisibleNew) {
        if (isVisibleNew == isVisible)
            return;
        
        document.querySelector('.header').classList.toggle('header_hidden');
        isVisible = isVisibleNew;
    }

    window.addEventListener('scroll', (e) => {
        var st = window.pageYOffset;

        if (st > lastScrollPostion) {
            // down scroll
            headerVisibleControl(false);
        } else {
            // up scroll
            headerVisibleControl(true);
        }

        lastScrollPostion = st;
    });
});