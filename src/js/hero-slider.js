import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import { gsap, Power1, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.hero-slider .swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
// });

const heroSwiper = new Swiper('.hero-slider .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1500,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.hero-slider .swiper-button-next',
        prevEl: '.hero-slider .swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.hero-slider .swiper-scrollbar',
    },
    on: {
        init: () => {
            gsap.to(".swiper-slide-active .inner h1", { y: -100, duration: 1 });
            gsap.to(".swiper-slide-active .inner p", { y: 50, duration: 1 });
            gsap.to(".swiper-slide-active .inner h1", {
                y: 100,
                stagger: { // wrap advanced options in an object
                    each: 0.1,
                    from: "center",
                    grid: "auto",
                    ease: "power2.inOut",
                    // repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
                }
            });
        }
    }
});


heroSwiper.on('init', function() {});

heroSwiper.on('slideChangeTransitionEnd', function() {
    gsap.to(".swiper-slide-next .inner h1", { y: 0, duration: 1 });
    gsap.to(".swiper-slide-next .inner p", { y: 0, duration: 1 });

    gsap.to(".swiper-slide-prev .inner h1", { y: 0, duration: 1 });
    gsap.to(".swiper-slide-prev .inner p", { y: 0, duration: 1 });
});
heroSwiper.on('slideChangeTransitionStart', function() {
    gsap.to(".swiper-slide-active .inner h1", { y: -100, duration: 1 });
    gsap.to(".swiper-slide-active .inner p", { y: 50, duration: 1 });
});