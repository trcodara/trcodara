// Efeito de rolagem do menu superior
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 175, 255, 0.15)';
    } else {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        header.style.boxShadow = 'none';
    }
});

// Animação de entrada dos cards na tela
const targets = document.querySelectorAll('.card, .passo, .portfolio-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

targets.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});