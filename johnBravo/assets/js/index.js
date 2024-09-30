document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar conteúdo da página
    function loadPage(url) {
        fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            loadCSS(url); // Carrega o CSS correspondente

            // Rola para o topo da página
            window.scrollTo(0, 0);
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
    }

    // Função para carregar o CSS correspondente
    function loadCSS(url) {
        const cssUrl = url.replace('.html', '.css'); // Supondo que o CSS tenha o mesmo nome do HTML
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.head.appendChild(link);
    }

    // Função para adicionar evento de clique aos links
    function addLinkEventListeners(selector) {
        document.querySelectorAll(selector).forEach(link => {
            const url = link.getAttribute('href'); // Obtém o URL da página

            if (!link.id) {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Evita o comportamento padrão do link
                    loadPage(url); // Carrega a página
                });
            }
        });
    }

    // Adiciona eventos de clique aos links do navbar e do footer
    addLinkEventListeners('nav a'); // Links do navbar
    addLinkEventListeners('footer a'); // Links do footer

    // Carrega a página inicial ou o conteúdo padrão
    loadPage('assets/html/pages/home.html');
});