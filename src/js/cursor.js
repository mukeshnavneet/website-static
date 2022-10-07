import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});
Splitting();

// hover events for social links
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function(event) {
        cursor.classList.add("linkhover");
    });
    links[i].addEventListener("mousemove", function(event) {
        cursor.classList.add("linkhover");
    });
    links[i].addEventListener("mouseout", function(event) {
        cursor.classList.remove("linkhover");
    });
}




let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mousemove", function(event) {
        cursor.classList.add("active");
    });
    cards[i].addEventListener("mouseover", function(event) {
        cursor.classList.add("active");
    });

    cards[i].addEventListener("mouseout", function(event) {
        cursor.classList.remove("active");
    });
    cards[i].addEventListener(
        "click",
        function(i) {
            body.classList.add("active");
            iframe.setAttribute("src", frames[i]);
            let penDebug = frames[i];
            let penFull = penDebug.replace("debug", "pen");
            penLink.setAttribute("href", penFull);
        }.bind(null, i)
    );
}


// Pull out the preloader

document.addEventListener("DOMContentLoaded", function() {
    body.classList.add("loaded");
});