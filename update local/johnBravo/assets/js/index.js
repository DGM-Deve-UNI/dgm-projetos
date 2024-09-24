document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar conteúdo da página
    function loadPage(url) {
        fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            loadCSS(url); // Carrega o CSS correspondente
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

    document.querySelectorAll('nav a').forEach(link => {
        const url = link.getAttribute('href'); // Obtém o URL da página

        if (!link.id) {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita o comportamento padrão do link
                loadPage(url); // Carrega a página
            });
        }
    });

    // Carrega a página inicial ou o conteúdo padrão
    loadPage('assets/html/pages/home.html');
});