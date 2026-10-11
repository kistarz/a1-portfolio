const petalBox = document.querySelector('.petals');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
if (petalBox && !reduceMotion) {
    const COUNT = 15;
    const COLORS = ['#e2788c', '#edd0ca', '#f0a3b2'];
 
    const rand = (min, max) => min + Math.random() * (max - min);
 
    for (let i = 0; i < COUNT; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
 
        petal.style.left = rand(0, 100) + '%';
        petal.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
 
        petal.style.setProperty('--size', rand(10, 22) + 'px');
        petal.style.setProperty('--fall-time', rand(9, 16) + 's');
        petal.style.setProperty('--sway-time', rand(2.5, 5) + 's');
        petal.style.setProperty('--delay', rand(-16, 0) + 's');
        petal.style.setProperty('--sway', rand(20, 60) + 'px');
        petal.style.setProperty('--rot-start', rand(-120, 0) + 'deg');
        petal.style.setProperty('--rot-end', rand(0, 240) + 'deg');
 
        petalBox.appendChild(petal);
    }
}
 