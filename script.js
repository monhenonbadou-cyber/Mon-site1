// Interaction : Apparition au défilement (Scroll Reveal)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
