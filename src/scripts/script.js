// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Executa apenas uma vez
        }
    });
}, observerOptions);

// Captura os elementos que precisam ser animados e os observa
document.querySelectorAll('.animate-on-scroll, .slide-in-right').forEach((el) => {
    observer.observe(el);
});