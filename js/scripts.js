/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // // Slider code
    // const slider = document.querySelector('.slider');
    // const images = slider.querySelectorAll('img');
    // const prevBtn = slider.querySelector('.prev');
    // const nextBtn = slider.querySelector('.next');
    // let currentIndex = 0;

    // function showImage(index) {
    //     images.forEach((image) => {
    //         image.classList.remove('active');
    //     });
    //     images[index].classList.add('active');
    //     currentIndex = index;
    // }

    // function nextImage() {
    //     let nextIndex = currentIndex + 1;
    //     if (nextIndex >= images.length) {
    //         nextIndex = 0;
    //     }
    //     showImage(nextIndex);
    // }

    // function prevImage() {
    //     let prevIndex = currentIndex - 1;
    //     if (prevIndex < 0) {
    //         prevIndex = images.length - 1;
    //     }
    //     showImage(prevIndex);
    // }
    // setInterval(nextImage, 3000);
    

});

