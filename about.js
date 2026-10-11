const slides = document.querySelectorAll('.carousel .slide');
const prev8tn = document.querySelector('.carousel-button--previous');
const next8tn = document.querySelector('.carousel-button--next');
let current = 0;

function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {slide.hidden = i !== current;});
}

prev8tn.addEventListener('click', () => showSlide(current-1));
next8tn.addEventListener('click', () => showSlide(current+1));