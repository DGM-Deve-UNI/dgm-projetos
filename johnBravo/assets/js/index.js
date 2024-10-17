document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Função para carregar conteúdo da página
    function loadPage(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar a página');
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data; // Carrega a seção
                window.scrollTo(0, 0); // Rola para o topo

                // Verifica se a página de contatos foi carregada
                if (url.includes('contatos.html')) {
                    loadMap(); // Chama a função para carregar o mapa
                }
            })
            .catch(error => console.error('Erro:', error));
    }

    function loadMap() {
        // Inicializa o mapa com OpenStreetMap e Leaflet.js
        var map = L.map('map').setView([-22.9068, -43.1729], 13); // Localização fictícia no Rio de Janeiro

        // Adiciona o tile do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adiciona um marcador no local fictício
        L.marker([-22.9068, -43.1729]).addTo(map)
            .bindPopup('Rua São João, 456 - Endereço Fictício')
            .openPopup();
    }

    // Função para fechar o menu de navegação (colapso)
    function closeNavbar() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show'); // Fecha o menu
            navbarToggler.classList.add('collapsed'); // Volta o ícone ao estado inicial
        }
    }

    // Função para configurar os links
    function setupLinks() {
        const links = document.querySelectorAll('nav a, footer a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                if (link.id === 'login-btn' || link.id === 'registro-btn') {
                    window.location.href = link.getAttribute('href');
                    return;
                }

                const url = link.getAttribute('href');
                loadPage(url);
                highlightMenu(link);
                sessionStorage.setItem('currentPage', url);

                // Fecha o menu se estiver em modo mobile
                closeNavbar();
            });
        });
    }

    function highlightMenu(selectedLink) {
        const navItems = document.querySelectorAll('.jb-nav-item');
        navItems.forEach(item => {
            item.classList.remove('bg-warning', 'text-black', 'fw-bold');
            item.querySelector('.jb-nav-link').classList.add('text-white');
            item.querySelector('.jb-nav-link').classList.remove('fw-bold');
        });
        const selectedItem = selectedLink.closest('li');
        if (selectedItem) {
            selectedItem.classList.add('bg-warning', 'text-black', 'fw-bold');
            selectedItem.querySelector('.jb-nav-link').classList.add('text-black');
            selectedItem.querySelector('.jb-nav-link').classList.remove('text-white');
        }
    }

    const initialPage = sessionStorage.getItem('currentPage') || 'assets/html/pages/home.html';
    loadPage(initialPage);
    setupLinks();
    const currentLink = [...document.querySelectorAll('nav a, footer a')].find(link => link.getAttribute('href') === initialPage);
    if (currentLink) {
        highlightMenu(currentLink);
    }
  
    // --- Seção de Dark Mode ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlTag = document.documentElement;
    const darkModeIcon = darkModeToggle.querySelector('i');

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
        localStorage.setItem('theme', mode); // Armazena a preferência do tema
    }

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });

    // --- Seção de Acessibilidade (Aumentar e diminuir o texto) ---
    const increaseFontBtn = document.getElementById('increase-font-btn');
    const decreaseFontBtn = document.getElementById('decrease-font-btn');
    let fontSize = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16;

    document.body.style.fontSize = `${fontSize}px`; // Aplica o tamanho da fonte salvo

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem('fontSize', fontSize); // Armazena o tamanho da fonte
    });

    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2);
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem('fontSize', fontSize); // Armazena o tamanho da fonte
    });
});