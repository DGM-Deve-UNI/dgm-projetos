let nome = document.querySelector('#nome')
let validNome = false
let sobrenome = document.querySelector('#sobrenome')
let validSobrenome = false

let data = document.querySelector('#data')
let gen = document.querySelector('input[name="inlineRadioOptions"]:checked')

let email = document.querySelector('#email')
let validEmail = false

let cel = document.querySelector('#celular')
let tel = document.querySelector('#telFixo')

let login = document.querySelector('#login')
let validLogin = false

let senha = document.querySelector('#senha')
let validSenha = false

let confiSenha = document.querySelector('#confiSenha')
let validConfiSenha = false

// Validação de Nome e sobrenome
function validarCampo(input, feedback) {
    // Verifica se o campo está vazio
    if (input.value.length === 0) {
        input.classList.remove('is-invalid', 'is-valid');
        feedback.textContent = ""; // Limpa a mensagem de feedback
        validNome = false
        return; // Sai da função se o campo estiver vazio
    }

    // Verifica se o valor contém apenas letras
    if (!/^[a-zA-Z]*$/.test(input.value)) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Apenas letras são permitidas";
        validNome = false

    } 
    // Verifica se o comprimento é menor que 3
    else if (input.value.length < 3) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Digite no mínimo 3 caracteres";
        validNome = false
    } else {
        input.classList.remove('is-invalid');
        feedback.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = ""; // Limpa a mensagem de feedback
        input.classList.add('is-valid'); // Adiciona classe se válido
        validNome = true
    }
}
//  ===================================================================
// function validatorEmail(email) {
//     let emailPattern =
//       /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//     return emailPattern.test(email);
//   }

email.addEventListener('keyup', () => {

    if (email.value.length === 0) {
        email.classList.remove('is-invalid', 'is-valid');
        feedbackEmail.textContent = ""; // Limpa a mensagem de feedback
        validEmail = false
        return;
    }

    if(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email.value)) {
        email.classList.add('is-invalid');
        feedbackEmail.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = "Use um email válido!";
        validEmail = false
    } else {
        email.classList.remove('is-invalid');
        feedbackEmail.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = ""; // Limpa a mensagem de feedback
        e0mail.classList.add('is-valid'); // Adiciona classe se válido
        validEmail = true
    }
})
//  ===================================================================
// Validação de login
login.addEventListener('keyup', () => {

    if (login.value.length === 0) {
        login.classList.remove('is-invalid', 'is-valid');
        feedbackLogin.textContent = ""; // Limpa a mensagem de feedback
        validLogin = false
        return; // Sai da função se o campo estiver vazio
    }

    if(login.value.length <= 7) {
        login.classList.add('is-invalid');
        feedbackLogin.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackLogin.textContent = "O login deve ter 8 caracteres";
        validLogin = false
    } else {
        login.classList.remove('is-invalid');
        feedbackLogin.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackLogin.textContent = ""; // Limpa a mensagem de feedback
        login.classList.add('is-valid'); // Adiciona classe se válido
        validLogin = true
    }
})
//  ===================================================================
// Validação do campo de senha
senha.addEventListener('keyup', () => {
    if (senha.value.length === 0) {
        senha.classList.remove('is-invalid', 'is-valid');
        feedbackSenha.textContent = "";
        confiSenha.classList.remove('is-invalid', 'is-valid'); // Reseta o campo de confirmação
        feedbackConfiSenha.textContent = "";
        validSenha = false
        return;
    }

    if (senha.value.length < 6) {
        senha.classList.add('is-invalid');
        feedbackSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackSenha.textContent = "A senha deve ter 6 caracteres";
        validSenha = false
    } else {
        senha.classList.remove('is-invalid');
        feedbackSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackSenha.textContent = "";
        senha.classList.add('is-valid');
        validSenha = true
    }

    // Validação do campo de confirmação de senha
    if (confiSenha.value.length > 0) {
        validarConfiSenha();
    }
});

// Validação do campo de confirmação de senha
confiSenha.addEventListener('keyup', validarConfiSenha);

function validarConfiSenha() {
    if (confiSenha.value.length === 0) {
        confiSenha.classList.remove('is-invalid', 'is-valid');
        feedbackConfiSenha.textContent = "";
        return;
    }

    if (confiSenha.value !== senha.value) {
        confiSenha.classList.add('is-invalid');
        feedbackConfiSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackConfiSenha.textContent = "As senhas não conferem";
    } else {
        confiSenha.classList.remove('is-invalid');
        feedbackConfiSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackConfiSenha.classList.add('valid-feedback', 'ms-2', 'pt-1');
        feedbackConfiSenha.textContent = "As senhas conferem";
        confiSenha.classList.add('is-valid');
    }
}
//  ===================================================================



// Adiciona eventos de keyup
nome.addEventListener('keyup', () => validarCampo(nome, feedbackNome));
sobrenome.addEventListener('keyup', () => validarCampo(sobrenome, feedbackSobrenome));




function cadastrar() {
    if ( validNome && validSobrenome && validEmail && validLogin && validSenha && validConfiSenha ){
        modalMessage.textContent = "Cadastro realizado com sucesso!";
        modal.showModal(); // Exibe o modal
        modal.classList.add('bg-success-subtle', 'border-success-subtle');
        modal.classList.remove('bg-danger-subtle', 'border-danger-subtle');

    } else {
        modalMessage.textContent = "Os campos não podem estar vazios!";
        modal.showModal(); // Exibe o modal
    }

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