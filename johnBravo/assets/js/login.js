// Função para mostrar o modal com título, mensagem e cor
function mostrarModal(titulo, mensagem, cor) {
    // Atualiza o título e a mensagem do modal
    document.getElementById('modalLabel').innerText = titulo;
    document.getElementById('modalMessage').innerHTML = mensagem;

    // Modal
    let modalElement = document.getElementById('modal');
    
    // Criar nova instância do modal (utilizando o MDB)
    let modal = new mdb.Modal(modalElement);

    // Modal Header e Botão
    let modalHeader = document.querySelector('.modal-header');
    let btn = document.getElementById('btn');

    // Limpar as classes antigas do modal header e do botão
    modalHeader.classList.remove('bg-success', 'bg-danger', 'bg-primary');
    modalHeader.classList.remove('border-success', 'border-danger', 'border-primary');
    btn.classList.remove('btn-success', 'btn-danger', 'btn-primary');

    // Adicionar as classes de cor passadas no parâmetro
    modalHeader.classList.add(cor, 'text-white'); // Cabeçalho
    btn.classList.add(cor, 'text-white'); // Botão

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
    const loginInput = document.getElementById('form2Example17').value;
    const senhaInput = document.getElementById('senha').value;

    // Obtém os dados do usuário armazenados no localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Se os dados do usuário estiverem salvos no localStorage
    if (userData) {
        // Verifica se o login e senha inseridos correspondem aos dados salvos
        if ((userData.email === loginInput || userData.login === loginInput) && userData.senha === senhaInput) {
            // Login bem-sucedido
            mostrarModal("Sucesso", "Login realizado com sucesso!", 'sucesso');

            // Redireciona para a página inicial (substitua pelo link real)
            setTimeout(() => {
                window.location.href = '../../../index.html';
            }, 2000);
        } else {
            // Se as credenciais não corresponderem
            mostrarModal("Erro de Login", "Usuário ou senha incorretos. Tente novamente.", 'erro');
        }
    } else {
        // Se não houver dados salvos no localStorage (nenhum cadastro)
        mostrarModal("Erro de Login", "Nenhum usuário cadastrado. Por favor, registre-se primeiro.", 'erro');
    }
}



// Função para exibir o modal com a mensagem
function mostrarModal(titulo, mensagem, corFundo, corBorda) {
    const modalTitle = document.getElementById('modalLabel');
    const modalMessage = document.getElementById('modalMessage');
    const modal = new mdb.Modal(document.getElementById('modal')); // Inicializando o modal com o MDB

    // Ajustando o conteúdo do modal
    modalTitle.textContent = titulo;
    modalMessage.innerHTML = mensagem;

    // Adicionando as classes de estilo para o fundo e a borda
    // const modalElement = document.getElementById('modal');
    // modalElement.classList.add(corFundo);
    // modalElement.classList.add(corBorda);

    // Exibindo o modal
    modal.show();
}

// Adiciona o evento de login no formulário
document.getElementById('loginBtn').addEventListener('click', login);
