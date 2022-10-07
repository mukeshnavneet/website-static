import $ from 'jquery';
window.jQuery = $;
window.$ = $;


// // or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";
// import ScrollMagic from 'scrollmagic'
// var controller = new ScrollMagic.Controller();

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {});