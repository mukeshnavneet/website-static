import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import { gsap, Power1, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

//gsap.fromTo(".box", {opacity: 0}, {opacity: 0.5, duration: 1});
gsap.fromTo(".green-crl", { translateX: -200 }, { duration: 0.75, yPercent: 200 });
gsap.fromTo(".blue-crl", { translateX: 0 }, { duration: 0.5, yPercent: 200 });
gsap.fromTo(".yellow-crl", { translateX: 200 }, { duration: 0.75, yPercent: 200 });

// gsap.set(".green-crl", { yPercent: 200 });
// gsap.set(".yellow-crl", { yPercent: 200 });
// gsap.set(".blue-crl", { yPercent: 200 });

gsap.to(".green-crl", {
    translateX: 0,
    translateY: 50,
    translateY: window.innerHeight / 1.25,
    ease: "none",
    scrollTrigger: {
        trigger: ".all-circls",
        markers: false,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1
    },
});

gsap.to(".yellow-crl", {
    translateX: 0,
    translateY: -50,
    translateY: window.innerHeight / 1.25,
    ease: "none",
    scrollTrigger: {
        trigger: ".all-circls",
        markers: false,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1
    },
});

gsap.to(".blue-crl", {
    translateX: 0,
    translateY: window.innerHeight / 1.25,
    ease: "none",
    scrollTrigger: {
        trigger: ".all-circls",
        markers: false,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1
    },
});

/////////////////////////////////////////////////////////////

gsap.to(".blue-crl", {
    scale: 4,
    ease: "none",
    scrollTrigger: {
        trigger: ".section-01",
        markers: false,
        start: "center top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1
    },
});
/////////////////////////////////////////////////////////////
// gsap.to(".green-crl", {
//     yPercent: 5,
//     ease: "none",
//     scrollTrigger: {
//         // markers: true,
//         trigger: ".clusterGreat",
//         scrub: 1
//     },
// });

// IMAGE & SVG ANIMATION
gsap.set(".unsplash-img", { xPercent: 100 });
gsap.to(".unsplash-img", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        markers: false,
        trigger: ".img-container",
        scrub: 1
    },
});

// IMAGE ANIMATION
gsap.set(".bg-img", { translateY: '-50%' });
gsap.to(".bg-img", {
    translateY: '0%',
    ease: "none",
    scrollTrigger: {
        markers: false,
        trigger: ".img-sec",
        scrub: 1
    },
});