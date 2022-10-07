import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

$(function() {})

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");