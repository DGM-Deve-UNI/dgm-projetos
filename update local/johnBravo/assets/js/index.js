// ==== Carregar páginas no "main" do "index.html" ==== \\
document.addEventListener('DOMContentLoaded', ()=>{
    // Função para carregar conteúdo da página \\
    function loadPage(url) {
        fetch(url)
        .then(response=> response.text())
        .then(data=> {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error=> console.error('Erro ao carregar a página:', error));
    }
    document.querySelectorAll('nav a').forEach(link => {
        const url = link.getAttribute('href'); // Obtém o URL da página

        if (!link.id) {
            link.addEventListener('click',(e)=> {
                e.preventDefault(); // Evita o comportamento padrão do link
                loadPage(url); //Carrega a página
            });
        }
    });
    // Carrega a página inicial ou o conteúdo padrão
    loadPage('assets/html/home.html');
});

// inputs login efeito
