const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDECOUNT = slides.length;

let currentslide= 0;

left.addEventListener("click", function() {
    currentslide--
    if (currentslide <0) {
        currentslide = SLIDECOUNT -1;
    }
    updateCarousel()
});



right.addEventListener("click", function() {
    currentslide++
    if (currentslide > SLIDECOUNT -1) {
        currentslide = 0;
    }
    updateCarousel()
});



function updateCarousel() {
    carousel.style.transform = `translateX(${
        -currentslide * slides[0].offsetWidth
     }px)`;

     document.body.style.background = `#${slides[currentslide].
    getAttribute("data-bg")}`
}
