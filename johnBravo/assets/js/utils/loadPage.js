import { loadMap } from './loadMap.js'; // Importa a função loadMap

export function loadPage(url, contentDiv) {
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

            // Verifica se a página carregada é 'agendar.html'
            if (url.includes('agendar.html')) {
                loadAgendarScript(); // Chama função para carregar o JS da página agendar
            }
        })
        .catch(error => console.error('Erro:', error));
}

function loadAgendarScript() {
    // Verifique se o script já foi carregado para evitar carregamento duplicado
    if (!window.agendarScriptLoaded) {
        window.agendarScriptLoaded = true;
        
        const script = document.createElement('script');
        script.src = 'assets/js/agendar.js'; // Caminho do seu agendar.js
        script.onload = () => {
            console.log('Script agendar.js carregado com sucesso!');
        };
        script.onerror = () => {
            console.error('Erro ao carregar o script agendar.js');
        };
        
        document.head.appendChild(script);
    }
}