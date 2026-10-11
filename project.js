const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const INTERVAL = 4000;
let current = 0;
let timer = null;


function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === current);
        slide.setAttribute('aria-hidden', i !== current);
    });
}

function start() {
    if (timer || slides.length < 2) return;
    timer = setInterval(() => showSlide(current + 1), INTERVAL);
}
 
function stop() {
    clearInterval(timer);
    timer = null;
}
 
showSlide(0);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    start();
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
}