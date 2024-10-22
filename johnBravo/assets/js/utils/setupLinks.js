import { loadPage } from './loadPage.js';
import { highlightMenu } from './highlightMenu.js';

export function setupLinks(contentDiv) {
    const links = document.querySelectorAll('nav a, footer a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (link.id === 'login-btn' || link.id === 'registro-btn') {
                window.location.href = link.getAttribute('href');
                return;
            }

            const url = link.getAttribute('href');
            loadPage(url, contentDiv);
            highlightMenu(link);
            sessionStorage.setItem('currentPage', url);
        });
    });
}