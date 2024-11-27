export function highlightMenu(selectedLink) {
    const navItems = document.querySelectorAll('.jb-nav-item');
    
    // Remover as classes de destaque de todos os itens
    navItems.forEach(item => {
        item.classList.remove('bg-warning', 'text-black', 'fw-bold');
        const navLink = item.querySelector('.jb-nav-link');
        if (navLink) {
            navLink.classList.add('text-white');
            navLink.classList.remove('fw-bold');
        }
    });

    // Agora, precisamos percorrer todos os links, não só os do navbar
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        // Se o link clicado corresponder ao link do navbar ou footer, marque o item correspondente
        if (link.getAttribute('href') === selectedLink.getAttribute('href')) {
            // Destaca o link e seu item correspondente
            const selectedItem = link.closest('.jb-nav-item');
            if (selectedItem) {
                selectedItem.classList.add('bg-warning', 'text-black', 'fw-bold');
                const navLink = selectedItem.querySelector('.jb-nav-link');
                if (navLink) {
                    navLink.classList.add('text-black');
                    navLink.classList.remove('text-white');
                }
            }
        }
    });

    // Armazena a URL da página atual no sessionStorage para manter o estado ativo
    sessionStorage.setItem('currentPage', selectedLink.getAttribute('href'));
}

// Função para restaurar a marcação do link ativo com base no sessionStorage
export function highlightMenuFromStorage() {
    const currentPage = sessionStorage.getItem('currentPage');
    
    if (currentPage) {
        // Verifica todos os links e marca o ativo
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                highlightMenu(link); // Marca o link como ativo
            }
        });
    }
}
