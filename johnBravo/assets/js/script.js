import { loadPage } from './utils/loadPage.js';
import { setupLinks } from './utils/setupLinks.js';
import { highlightMenu } from './utils/highlightMenu.js';
import { setTheme } from './utils/theme.js';
import { setupAccessibility } from './utils/accessibility.js';
import { handleScrollToTopButton, scrollToTop } from './utils/scrollToTop.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    const initialPage = sessionStorage.getItem('currentPage') || 'assets/html/pages/home.html';
    loadPage(initialPage, contentDiv);
    setupLinks(contentDiv);
    
    const currentLink = [...document.querySelectorAll('nav a, footer a')].find(link => link.getAttribute('href') === initialPage);
    if (currentLink) {
        highlightMenu(currentLink);
    }

    // --- Seção de Dark Mode ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlTag = document.documentElement;
    const darkModeIcon = darkModeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme, darkModeToggle, darkModeIcon, htmlTag);

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme, darkModeToggle, darkModeIcon, htmlTag);
    });

    // Configura o botão de rolar para o topo
    handleScrollToTopButton();
    document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);


    // --- Seção de Acessibilidade ---
    const increaseFontBtn = document.getElementById('increase-font-btn');
    const decreaseFontBtn = document.getElementById('decrease-font-btn');
    let fontSize = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16;
    setupAccessibility(fontSize, increaseFontBtn, decreaseFontBtn);

    // --- Fechar o menu ao clicar e alternar o ícone ---
    const links = document.querySelectorAll('nav a, footer a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            closeNavbar(navbarCollapse, navbarToggler); // Fecha o menu e alterna o ícone
        });
    });
});