// // or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// Section Pinning
gsap.utils.toArray(".sec").forEach((section) => {
    // Check if section has horizontal scrolling
    if (section.dataset.type === "horizontal") {
        const cards = section.querySelector(".section__cards");
        const card = section.querySelector(".section__card");

        gsap.to(cards, {
            x: () => { return -cards.scrollWidth + card.offsetWidth; },
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: () => "center center",
                end: () => `+=${cards.scrollWidth - card.offsetWidth}`,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

        // Use standard vertical scroll pinning
    } else {
        ScrollTrigger.create({
            // markers: true,
            trigger: section,
            start: () => "top top",
            // pin: true,
            anticipatePin: 1
        });
    }
});


let links = gsap.utils.toArray(".menu-inner .menu-item a");
if (links > 0) {
    links.forEach(a => {
        let element = document.querySelector(a.getAttribute("href")),
            linkST = ScrollTrigger.create({
                trigger: element,
                start: "top top"
            });
        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => self.isActive && setActive(a)
        });
        a.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
        });
    });
}

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}