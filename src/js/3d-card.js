import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import {
    gsap,
    ScrollTrigger,
    Draggable,
    MotionPathPlugin,
    Flip
} from "gsap/all";
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

!(function($doc, $win) {
    var screenWidth = $win.screen.width / 2,
        screenHeight = $win.screen.height / 2,
        $elems = $doc.getElementsByClassName("elem"),
        validPropertyPrefix = '',
        otherProperty = 'perspective(1000px)';
    // console.log("$elems", $elems.length);
    if ($elems.length > 0) {
        var elemStyle = $elems[0].style;
        if (typeof elemStyle.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else if (typeof elemStyle.MozTransform == 'string') {
            validPropertyPrefix = 'MozTransform';
        }

        $doc.addEventListener('mousemove', function(e) {
            var centroX = e.clientX - screenWidth,
                centroY = screenHeight - (e.clientY + 13),
                degX = centroX * 0.06,
                degY = centroY * 0.03,
                $elem

            for (var i = 0; i < $elems.length; i++) {
                $elem = $elems[i];
                $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)';
            };
        });
    }


})(document, window);