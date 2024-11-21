document.addEventListener('DOMContentLoaded', function() {
    // Elementos da navbar
    const loginBtn = document.getElementById('login-btn');
    const registroBtn = document.getElementById('registro-btn');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    // Função para atualizar a navbar
    const updateNavbar = () => {
        const userData = localStorage.getItem('userData');
        
        if (userData) {
            // Se o usuário estiver logado, esconder os botões de login e exibir o nome do usuário
            loginBtn.classList.add('d-none');
            registroBtn.classList.add('d-none');
            userInfo.classList.remove('d-none');
            
            // Definindo o nome do usuário na navbar
            userName.textContent = JSON.parse(userData).nome || 'Usuário';
        } else {
            // Caso contrário, mostrar os botões de login e cadastro
            loginBtn.classList.remove('d-none');
            registroBtn.classList.remove('d-none');
            userInfo.classList.add('d-none');
        }
    };

    // Evento de logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Limpar os dados de login do localStorage e atualizar a navbar
            localStorage.removeItem('userData');
            updateNavbar();  // Atualiza a navbar após logout
        });
    }

    // Chama a função para atualizar a navbar assim que a página carregar
    updateNavbar();
});
