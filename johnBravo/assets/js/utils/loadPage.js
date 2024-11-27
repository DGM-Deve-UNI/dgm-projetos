import { loadMap } from './loadMap.js';
import { refreshDynamicLinks } from './setupLinks.js';

export function loadPage(url, contentDiv) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a página');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
            window.scrollTo(0, 0);
            
            // Recarrega os links dinâmicos
            refreshDynamicLinks(contentDiv);
            
            // Verifica se a página de contatos foi carregada
            if (url.includes('contatos.html')) {
                loadMap();
            }
            // Verifica se a página carregada é 'agendar.html'
            if (url.includes('agendar.html')) {
                loadAgendarScript();
            }
        })
        .catch(error => console.error('Erro:', error));
}

function loadAgendarScript() {
    if (!window.agendarScriptLoaded) {
        window.agendarScriptLoaded = true;
        
        const script = document.createElement('script');
        script.src = 'assets/js/agendar.js';
        script.onload = () => {
            console.log('Script agendar.js carregado com sucesso!');
        };
        script.onerror = () => {
            console.error('Erro ao carregar o script agendar.js');
        };
        
        document.head.appendChild(script);
    }
}