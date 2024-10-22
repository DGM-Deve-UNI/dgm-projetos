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
        })
        .catch(error => console.error('Erro:', error));
}

