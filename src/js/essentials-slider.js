import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import {
    gsap,
    ScrollTrigger,
    Draggable,
    MotionPathPlugin,
    Flip,
    ScrollToPlugin
} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// core version + navigation, pagination modules:
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles

// The Slideshow class.

/* SWIPER */
// var swiper = new Swiper(".essentials-slider-container", {
//     loop: true,
//     crossFade: true,
//     // If we need pagination
//     pagination: {
//         el: '.essentials-slider-container .swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.essentials-slider-container .swiper-button-next',
//         prevEl: '.essentials-slider-container .swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

/* GSAP */
let tl = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

tl.from(".product-name", { duration: 0.5, x: 0, y: -50, opacity: 0 }, 0);
tl2.from(".product-img", { duration: 0.5, x: 0, y: 50, opacity: 0 }, 0);
tl3.from(".product-details .btn", { duration: 0.5, x: 0, y: 50, opacity: 0 }, 0);

swiper.on("init", function() {
    /* do something */
    tl.play();
    tl2.play();
    tl3.play();
});

/* swiper events */
swiper.on("slideChange", function() {
    tl.restart();
    tl.play();
    tl2.restart();
    tl2.play();
    tl3.restart();
    tl3.play();
});