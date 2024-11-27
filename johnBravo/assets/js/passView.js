function cadastrar() {

    modalMessage.textContent = "Botão clicado.";
    modal.showModal(); // Exibe o modal
}

// Função mostrar/ocultar senha
function passViewInputs(event) {
    // Obtém o ID do input alvo a partir do atributo data-target
    let targetId = event.target.getAttribute('data-target');
    let inputPass = document.getElementById(targetId);
    
    // Alterna o tipo do input
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        event.target.classList.remove('fa-eye')
        event.target.classList.add('fa-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password');
        event.target.classList.add('fa-eye')
        event.target.classList.remove('fa-eye-slash')
    }
}
// Selecionando o ícone de visualização da senha
let passViewIcon = document.querySelectorAll('#eye-icon');
// Adicionando o evento de clique aos ícones
passViewIcon.forEach(icon => {
    icon.addEventListener('click', passViewInputs);
});
// ========================================================