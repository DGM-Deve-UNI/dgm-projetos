// Função para mostrar o modal com título, mensagem e cor
function mostrarModal(titulo, mensagem, corFundo, corBorda) {
    // Atualiza o título e a mensagem do modal
    document.getElementById('modalLabel').innerText = titulo;
    document.getElementById('modalMessage').innerHTML = mensagem;

    // Modal
    let modalElement = document.getElementById('modal');
    
    // Criar nova instância do modal (utilizando o MDB)
    let modal = new mdb.Modal(modalElement);

    // Modal Header e Botão
    let modalHeader = document.getElementById('modal-header');
    let btn = document.getElementById('btn-modal');

    // Limpar as classes antigas do modal header
    modalHeader.className = 'modal-header rounded-8 rounded-bottom-0 border'; // Reseta as classes do header

    // Limpar as classes antigas do botão
    btn.className = 'btn btn-rounded border border-2'; // Reseta as classes do botão
    
    // Adicionar as classes de cor passadas no parâmetro
    modalHeader.classList.add(corFundo, 'text-white'); // Cabeçalho
    btn.classList.add(corFundo, 'text-white'); // Botão

    // Exibe o modal
    modal.show();

    // Garantir que o backdrop e a classe "fade" sejam removidos ao fechar o modal
    modalElement.addEventListener('hidden.mdb.modal', function () {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    });
}

// Função de login com validação
async function login(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pega os valores inseridos nos campos de email (ou usuário) e senha
    const loginInput = document.getElementById('email-login').value;
    const senhaInput = document.getElementById('senha').value;

    // Obtém os dados do usuário armazenados no localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Se os dados do usuário estiverem salvos no localStorage
    if (userData) {
        // Verifica se o login e senha inseridos correspondem aos dados salvos
        if ((userData.email === loginInput || userData.login === loginInput) && userData.senha === senhaInput) {
            // Login bem-sucedido
            mostrarModal("Sucesso", "Login realizado com sucesso!", 'bg-success', 'border-success');

            // Gerar o token de login
            let token = Math.random().toString(16).substring(2); // Criação do token

            // Armazenar o token e os dados do usuário no localStorage
            localStorage.setItem('token', token); // Armazenar o token
            localStorage.setItem('userData', JSON.stringify(userData)); // Armazenar os dados do usuário

            // Redireciona para a página inicial (substitua pelo link real)
            setTimeout(() => {
                window.location.href = '../../../index.html';
            }, 2000);
        } else {
            // Se as credenciais não corresponderem
            mostrarModal("Erro de Login", "Usuário ou senha incorretos. Tente novamente.", 'bg-danger', 'border-danger');
        }
    } else {
        // Se não houver dados salvos no localStorage (nenhum cadastro)
        mostrarModal("Erro de Login", "Nenhum usuário cadastrado. Por favor, registre-se primeiro.", 'bg-warning', 'border-warning');
    }
}

// Adiciona o evento de login no formulário
document.getElementById('loginBtn').addEventListener('click', login);
