let nome = document.querySelector('#nome')
// let feedbackNome = document.querySelector('#feedbackNome')
let sobrenome = document.querySelector('#sobrenome')
// let feedbackSobrenome = document.querySelector('#feedbackSobrenome')
let data = document.querySelector('#data')
let gen = document.querySelector('input[name="inlineRadioOptions"]:checked')

let email = document.querySelector('#email')
let cel = document.querySelector('#celular')
let tel = document.querySelector('#telFixo')

let login = document.querySelector('#login')
let senha = document.querySelector('#senha')
let confiSenha = document.querySelector('#confiSenha')


// Validação de Nome e sobrenome
function validarCampo(input, feedback) {
    // Verifica se o campo está vazio
    if (input.value.length === 0) {
        input.classList.remove('is-invalid', 'is-valid');
        feedback.textContent = ""; // Limpa a mensagem de feedback
        return; // Sai da função se o campo estiver vazio
    }

    // Verifica se o valor contém apenas letras
    if (!/^[a-zA-Z]*$/.test(input.value)) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Apenas letras são permitidas";
    } 
    // Verifica se o comprimento é menor que 3
    else if (input.value.length < 3) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Digite no mínimo 3 caracteres";
    } else {
        input.classList.remove('is-invalid');
        feedback.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = ""; // Limpa a mensagem de feedback
        input.classList.add('is-valid'); // Adiciona classe se válido
    }
}

// Adiciona eventos de keyup
nome.addEventListener('keyup', () => validarCampo(nome, feedbackNome));
sobrenome.addEventListener('keyup', () => validarCampo(sobrenome, feedbackSobrenome));




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