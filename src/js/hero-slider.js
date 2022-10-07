// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

// import { gsap, Power1, ScrollTrigger, Draggable, MotionPathPlugin, Flip, ScrollToPlugin } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin, ScrollToPlugin);

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';
// // The Slideshow class.
// $(".total-item-count").append(" 0" + $(".slide").length);
// ///////////////////////////////////////////////////// The Slideshow class.
// class Slideshow {
//     constructor(el) {

//         this.DOM = { el: el };

//         this.config = {
//             slideshow: {
//                 delay: 3000,
//                 pagination: {
//                     duration: 3,
//                 }
//             }
//         };

//         // Set the slideshow
//         this.init();

//     }
//     init() {

//         var self = this;

//         // Charmed title
//         this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
//         this.DOM.slideTitle.forEach((slideTitle) => {
//             // charming(slideTitle);
//         });

//         // Set the slider
//         this.slideshow = new Swiper(this.DOM.el, {
//             loop: true,
//             autoplay: {
//                 delay: this.config.slideshow.delay,
//                 disableOnInteraction: false,

//             },
//             speed: 500,
//             preloadImages: true,
//             updateOnImagesReady: true,
//             // lazy: true,
//             // preloadImages: false,
//             pagination: {
//                 el: '.slideshow-pagination',
//                 clickable: true,
//                 bulletClass: 'slideshow-pagination-item',
//                 bulletActiveClass: 'active',
//                 clickableClass: 'slideshow-pagination-clickable',
//                 modifierClass: 'slideshow-pagination-',
//                 renderBullet: function(index, className) {

//                     var slideIndex = index,
//                         number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);

//                     var paginationItem = '<span class="slideshow-pagination-item">';
//                     paginationItem += '<span class="pagination-number">' + number + '</span>';
//                     paginationItem = (index <= 8) ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
//                     paginationItem += '</span>';

//                     return paginationItem;

//                 },
//             },

//             // Navigation arrows
//             navigation: {
//                 nextEl: '.slideshow-navigation-button.next',
//                 prevEl: '.slideshow-navigation-button.prev',
//             },

//             // And if we need scrollbar
//             scrollbar: {
//                 el: '.swiper-scrollbar',
//             },

//             on: {
//                 init: function() {
//                     self.animate('next');
//                 },
//             }

//         });

//         // Init/Bind events.
//         this.initEvents();

//     }
//     initEvents() {

//         this.slideshow.on('paginationUpdate', (swiper, paginationEl) => this.animatePagination(swiper, paginationEl));
//         //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

//         this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));

//         this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));

//     }
//     animate(direction = 'next') {

//         // Get the active slide
//         this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
//             this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'),
//             this.DOM.activeSlideTitle = this.DOM.activeSlide.querySelector('.slide-title'),
//             this.DOM.activeSlideTitleLetters = this.DOM.activeSlideTitle.querySelectorAll('span');

//         // Reverse if prev  
//         this.DOM.activeSlideTitleLetters = direction === "next" ? this.DOM.activeSlideTitleLetters : [].slice.call(this.DOM.activeSlideTitleLetters).reverse();

//         // Get old slide
//         this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
//         if (this.DOM.oldSlide) {
//             // Get parts
//             this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'),
//                 this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span');
//             // Animate
//             this.DOM.oldSlideTitleLetters.forEach((letter, pos) => {
//                 gsap.to(letter, {
//                     duration: .3,
//                     ease: Quart.easeIn,
//                     delay: (this.DOM.oldSlideTitleLetters.length - pos - 1) * .04,
//                     y: '50%',
//                     opacity: 0
//                 });
//             });
//         }

//         // Animate title
//         this.DOM.activeSlideTitleLetters.forEach((letter, pos) => {
//             gsap.to(letter, {
//                 duration: .6,
//                 ease: Back.easeOut,
//                 delay: pos * .05,
//                 startAt: { y: '50%', opacity: 0 },
//                 y: '0%',
//                 opacity: 1
//             });
//         });

//         // Animate background
//         gsap.to(this.DOM.activeSlideImg, {
//             duration: 1.5,
//             // ease: Expo.easeOut,
//             startAt: { x: direction === 'next' ? 200 : -200 },
//             x: 0,
//         });

//         //this.animatePagination()

//     }
//     animatePagination(swiper, paginationEl) {

//         // Animate pagination
//         this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
//         this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
//         this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');

//         // console.log(swiper.pagination);
//         // console.log(swiper.activeIndex);

//         // Reset and animate
//         gsap.set(this.DOM.paginationItemsLoader, { scaleX: 0 });
//         gsap.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
//             startAt: { scaleX: 0 },
//             scaleX: 1,
//         });


//     }

// }
// const slideshow = new Slideshow(document.querySelector('.slideshow'));

// ///////////////////////////////////////////////////// The Slideshow class.

// var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 1200,
//     grabCursor: true,
//     mousewheel: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     on: {
//         slideChangeTransitionStart: function() {
//             // Slide captions
//             // var this = this;
//             setTimeout(function() {
//                 var currentTitle = $(this.slides[this.activeIndex]).attr("data-title");
//                 var currentSubtitle = $(this.slides[this.activeIndex]).attr("data-subtitle");
//             }, 500);
//             gsap.to($(".current-title"), 0.4, { autoAlpha: 0, y: -40, ease: Power1.easeIn });
//             gsap.to($(".current-subtitle"), 0.4, { autoAlpha: 0, y: -40, delay: 0.15, ease: Power1.easeIn });
//         },
//         slideChangeTransitionEnd: function() {
//             // Slide captions
//             // var this = this;
//             var currentTitle = $(this.slides[this.activeIndex]).attr("data-title");
//             var currentSubtitle = $(this.slides[this.activeIndex]).attr("data-subtitle");
//             $(".slide-captions").html(function() {
//                 return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
//             });
//             gsap.from($(".current-title"), 0.4, { autoAlpha: 0, y: 40, ease: Power1.easeOut });
//             gsap.from($(".current-subtitle"), 0.4, { autoAlpha: 0, y: 40, delay: 0.15, ease: Power1.easeOut });
//         }
//     }
// });

// // Slide captions
// var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
// var currentSubtitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
// $(".slide-captions").html(function() {
//     return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
// });