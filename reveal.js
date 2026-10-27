(() => {
    // Header gets a soft shadow once the page has scrolled
    const header = document.querySelector('header');
    if (header) {
        const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Fade/slide content in as it enters the screen (skipped for reduced motion)
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll(
        '.projects-title, .project-box, .project-section, .annotated, .about-columns .column'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    targets.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();