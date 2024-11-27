import { loadPage } from './loadPage.js';
import { highlightMenu } from './highlightMenu.js';
import { closeNavbar } from './closeNavMenu.js';

// Função para configurar links dinâmicos
function setupDynamicLinks(contentDiv) {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.dynamic-links');
        if (link) {
            e.preventDefault();
            
            // Verifica se é um link de login/registro
            if (link.id === 'login-btn' || link.id === 'registro-btn') {
                window.location.href = link.getAttribute('href');
                return;
            }

            const url = link.getAttribute('href');
            if (url) {
                loadPage(url, contentDiv);

                // Após carregar o conteúdo, chama a função para destacar o item correto
                highlightMenu(link);

                sessionStorage.setItem('currentPage', url);
            }
        }
    });
}

// Função para recarregar os links dinâmicos após carregar novo conteúdo
export function refreshDynamicLinks(contentDiv) {
    setupDynamicLinks(contentDiv);
}

// Função original modificada para incluir setupDynamicLinks
export function setupLinks(contentDiv, navbarCollapse, navbarToggler) {
    const menuLinks = document.querySelectorAll('nav a, footer a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (link.id === 'login-btn' || link.id === 'registro-btn') {
                window.location.href = link.getAttribute('href');
                return;
            }
            
            const url = link.getAttribute('href');
            loadPage(url, contentDiv);

            // Após carregar a página, destaca o item de menu
            highlightMenu(link);

            sessionStorage.setItem('currentPage', url);
            closeNavbar(navbarCollapse, navbarToggler);
        });
    });

    setupDynamicLinks(contentDiv);
}
