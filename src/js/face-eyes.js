// document.querySelector('body').addEventListener('mousemove', eyeball);

// function eyeball() {
//     let eye = document.querySelectorAll('.eye');
//     eye.forEach(function(eye) {
//         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
//         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
//         let radian = Math.atan2(event.pageX - x, event.pageY - y);
//         // console.log("LOG", radian);
//         let rot = (radian * (180 / Math.PI) * -1) + 270;
//         eye.style.transform = "rotate(" + rot + "deg)";
//     })
// }

// Option 2
// clientX 
// clientY 

document.querySelector('body').addEventListener('mousemove', (e) => {
    // console.log(e);
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const faceBox = document.getElementById('face');
    // console.log("faceBox", faceBox);
    if (faceBox !== null) {

        const rekt = faceBox.getBoundingClientRect();
        const faceBoxX = rekt.left + rekt.width / 2;
        const faceBoxY = rekt.top + rekt.height / 2;
        const angleDeg = angle(mouseX, mouseY, faceBoxX, faceBoxY);
        let eye = document.querySelectorAll('.eye');

        eye.forEach((eye) => {
            eye.style.transform = `rotate(${-90 + angleDeg}deg)`
        })
    }

});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); //range (-PI, PI)
    const deg = rad * 180 / Math.PI; // rads to degs, range (-180, 180)
    return deg
}