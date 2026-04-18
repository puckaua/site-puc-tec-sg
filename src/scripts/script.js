// Controla a abertura e fechamento do menu de navegação em telas menores.
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animações de scroll: revela elementos gradualmente conforme o usuário rola a página.
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // O elemento é considerado visível quando 15% dele está na tela.
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // A animação só precisa ocorrer uma vez. Desativar o observer melhora a performance.
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleciona todos os elementos que devem ser animados ao aparecer na tela.
document.querySelectorAll('.animate-on-scroll, .slide-in-right').forEach((el) => {
    observer.observe(el);
});

// Carrossel de logos infinito: duplica os logos para criar um efeito de rolagem contínua.
const track = document.querySelector('.logos-track');
if (track) {
    const originalLogos = Array.from(track.children);

    // A animação CSS (`scroll-carousel`) move o carrossel em -20% do seu tamanho total.
    // Para que o loop seja perfeito e sem interrupções, precisamos de 5 conjuntos de logos
    // preenchendo o track (100% / 20% = 5).
    // Como 1 conjunto já existe no HTML, clonamos os logos mais 4 vezes.
    for (let i = 0; i < 4; i++) {
        originalLogos.forEach(logo => {
            track.appendChild(logo.cloneNode(true));
        });
    }
}