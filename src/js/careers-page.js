import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import {
    gsap,
    Power1,
    ScrollTrigger,
    Draggable,
    MotionPathPlugin,
    Flip,
    ScrollToPlugin
} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// gsap.from("#js-ball", {
//     duration: 1,
//     // repeat: 12,
//     // repeatDelay: 3,
//     // yoyo: true,
//     ease: "power1.inOut",
//     motionPath: {
//         path: "#js-path",
//         align: "#js-path",
//         // autoRotate: true,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true,
//         start: 1,
//         end: 0
//     }
// });
var bee = document.querySelector("#js-ball");
var scrollTweenObject;
var beeProps = gsap.getProperty(bee);

//MASCOT
const mascotFace = document.getElementById('mascot-face');

function createScrollTween() {
    scrollTweenObject = gsap.from(bee, {
        scrollTrigger: {
            trigger: ".career-sec01",
            pin: ".career-sec01",
            start: "top top",
            id: "scene",
            scrub: 1,
            //The end value decides the speed
            end: function() {
                // var worldHeight = world.offsetHeight;
                // return "+=" + worldHeight;
            }
        },
        motionPath: {
            path: "#js-path",
            align: "#js-path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0
        },
        ease: "linear",
        onUpdate: function() {}
    })
}

createScrollTween();

// PARALLEX
// gsap.set(".text-one", { xPercent: -200 }, { duration: 1 });
// gsap.set(".text-two", { xPercent: -200 }, { duration: 1 });
// gsap.set(".text-three", { xPercent: 100 }, { duration: 1 });

gsap.from(".text-one", {
    xPercent: "50%",
    ease: "none",
    scrollTrigger: {
        trigger: ".career-sec03",
        markers: true,
        pin: ".career-sec03",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1
    },
});