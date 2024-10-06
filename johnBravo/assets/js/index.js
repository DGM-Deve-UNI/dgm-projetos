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

    // --- Seção de Dark Mode ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlTag = document.documentElement;
    const darkModeIcon = darkModeToggle.querySelector('i'); // Referência ao ícone dentro do botão

    // Função para alternar entre temas claro e escuro
    function setTheme(mode) {
        if (mode === 'dark') {
            htmlTag.setAttribute('data-bs-theme', 'dark');
            darkModeToggle.classList.add('active');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            document.querySelector('link[rel="icon"]').setAttribute('href', './assets/imgs/icons/dark/icon.png');
        } else {
            htmlTag.setAttribute('data-bs-theme', 'light');
            darkModeToggle.classList.remove('active');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            document.querySelector('link[rel="icon"]').setAttribute('href', './assets/imgs/icons/light/icon.png');
        }
    }

    // Detectar o tema do navegador e aplicá-lo automaticamente
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(userPreference);

    // Alternar entre modo claro e escuro ao clicar no botão
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });

    // --- Seção de Acessibilidade (Aumentar e diminuir o texto) ---
    const increaseFontBtn = document.getElementById('increase-font-btn');
    const decreaseFontBtn = document.getElementById('decrease-font-btn');
    let fontSize = 16; // Tamanho padrão

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
    });

    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2); // Não permitir que a fonte fique muito pequena
        document.body.style.fontSize = `${fontSize}px`;
    });
});