// Função para exibir o botão após rolar 300px
export function handleScrollToTopButton() {
    window.onscroll = function() {
        const btn = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    };
}

// Função para rolar até o topo
export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}