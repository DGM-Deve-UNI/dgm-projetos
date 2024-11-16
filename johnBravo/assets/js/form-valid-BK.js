let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let data = document.querySelector('#data');
let feedbackData = document.querySelector('#feedbackData'); // Feedback para a data
let gen = document.querySelectorAll('input[name="inlineRadioOptions"]');
let cep = document.querySelector('#cep');
let feedbackCep = document.querySelector('#feedbackCep');
let endereco = document.querySelector('#endereco');
let feedbackEndereco = document.querySelector('#feedbackEndereco');
let numero = document.querySelector('#numero');
let feedbackNumero = document.querySelector('#feedbackNumero');
let email = document.querySelector('#email');
let cel = document.querySelector('#celular');
let tel = document.querySelector('#telFixo');
let login = document.querySelector('#login');
let senha = document.querySelector('#senha');
let confiSenha = document.querySelector('#confiSenha');

let validNome = false;
let validSobrenome = false;
let validEmail = false;
let validCep = false;
let validEndereco = false;
let validLogin = false;
let validSenha = false;
let validConfiSenha = false;
let validGenero = false;
let validTelefone = false;
let validDataNasc = false;

// Validação de Nome e Sobrenome
function validarCampo(input, feedback) {
    if (input.value.length === 0) {
        input.classList.remove('is-invalid', 'is-valid');
        feedback.textContent = ""; 
        return; 
    }
    if (!/^[a-zA-Z]*$/.test(input.value)) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Apenas letras são permitidas";
    } else if (input.value.length < 3) {
        input.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "Digite no mínimo 3 caracteres";
    } else {
        input.classList.remove('is-invalid');
        feedback.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = ""; 
        input.classList.add('is-valid'); 
    }
}

// Validação de Email
email.addEventListener('keyup', () => {
    if (email.value.length === 0) {
        email.classList.remove('is-invalid', 'is-valid');
        feedbackEmail.textContent = ""; 
        return;
    }
    if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email.value)) {
        email.classList.add('is-invalid');
        feedbackEmail.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = "Use um email válido!";
    } else {
        email.classList.remove('is-invalid');
        feedbackEmail.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = ""; 
        email.classList.add('is-valid'); 
    }
});

// Validação de Login
login.addEventListener('keyup', () => {
    if (login.value.length === 0) {
        login.classList.remove('is-invalid', 'is-valid');
        feedbackLogin.textContent = ""; 
        return; 
    }
    if (login.value.length <= 7) {
        login.classList.add('is-invalid');
        feedbackLogin.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackLogin.textContent = "O login deve ter 8 caracteres";
    } else {
        login.classList.remove('is-invalid');
        feedbackLogin.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackLogin.textContent = ""; 
        login.classList.add('is-valid'); 
    }
});

// Validação de Senha
senha.addEventListener('keyup', () => {
    if (senha.value.length === 0) {
        senha.classList.remove('is-invalid', 'is-valid');
        feedbackSenha.textContent = "";
        confiSenha.classList.remove('is-invalid', 'is-valid');
        feedbackConfiSenha.textContent = "";
        return;
    }
    if (senha.value.length < 6) {
        senha.classList.add('is-invalid');
        feedbackSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackSenha.textContent = "A senha deve ter 6 caracteres";
    } else {
        senha.classList.remove('is-invalid');
        feedbackSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackSenha.textContent = "";
        senha.classList.add('is-valid');
    }
    if (confiSenha.value.length > 0) {
        validarConfiSenha();
    }
});

// Validação de Confirmação de Senha
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
    }
}

// Validação de Nome e Sobrenome
nome.addEventListener('keyup', () => validarCampo(nome, feedbackNome));
sobrenome.addEventListener('keyup', () => validarCampo(sobrenome, feedbackSobrenome));

// Validação do CEP
cep.addEventListener('blur', () => {
    validCep = cep.classList.contains('is-valid');
});

// Validação do Endereço
endereco.addEventListener('input', () => {
    if (endereco.value.length === 0) {
        endereco.classList.add('is-invalid');
        feedbackEndereco.textContent = "Endereço é obrigatório.";
    } else {
        endereco.classList.remove('is-invalid');
        endereco.classList.add('is-valid');
        feedbackEndereco.textContent = "";
    }
});

// Validação do Número
numero.addEventListener('input', () => {
    if (numero.value.length > 4) {
        numero.value = numero.value.slice(0, 4);
    }
    const valor = numero.value;
    if (valor.length === 0) {
        numero.classList.remove('is-invalid', 'is-valid');
        feedbackNumero.textContent = "";
    } else {
        numero.classList.add('is-valid');
        feedbackNumero.textContent = "";
    }
});

// Validação de Gênero
gen.forEach(input => {
    input.addEventListener('change', () => {
        validGenero = Array.from(gen).some(radio => radio.checked);
        gen.forEach(r => {
            r.classList.remove('is-invalid', 'is-valid');
        });
        if (validGenero) {
            input.classList.add('is-valid');
        } else {
            input.classList.add('is-invalid');
        }
    });
});

// Validação de Telefone
tel.addEventListener('input', () => {
    validTelefone = tel.value.length > 0 || cel.value.length > 0;
    if (tel.value.length === 0) {
        tel.classList.remove('is-invalid', 'is-valid');
        feedbackNumero.textContent = "";
    } else {
        tel.classList.add('is-valid');
        feedbackNumero.textContent = "";
    }
});

// Validação da Data de Nascimento
data.addEventListener('blur', () => {
    const dataNasc = new Date(data.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    if (isNaN(dataNasc.getTime())) {
        feedbackData.textContent = "Data inválida.";
        feedbackData.classList.add('is-invalid');
        data.classList.add('is-invalid');
        validDataNasc = false;
    } else if (idade < 18 || idade > 85) {
        feedbackData.textContent = `Idade inválida: ${idade} anos.`;
        data.classList.add('is-invalid');
        validDataNasc = false;
    } else {
        feedbackData.textContent = `Idade válida: ${idade} anos.`;
        data.classList.add('is-valid');
        validDataNasc = true;
    }
});

// Botão de limpar campos
document.getElementById("clearBtn").addEventListener("click", function() {
    document.querySelectorAll('input[type="text"], input[type="number"], input[type="password"], select').forEach(input => {
        input.value = "";
        input.classList.remove('is-valid', 'is-invalid');
        if (input.type === 'date') {
            input.dispatchEvent(new Event('blur')); // Simula o evento blur
        }
    });

    // Limpa feedback de validação
    feedbackData.textContent = "";
    validDataNasc = false;
    data.classList.remove('is-valid', 'is-invalid');
});

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").close();
});


// Função para cadastrar
function cadastrar() {
    if (validNome && validSobrenome && validEmail && validCep && validEndereco && validLogin && validSenha && validConfiSenha && validGenero && validTelefone && validDataNasc) {
        // Aqui vai a lógica do modal de sucesso
    } else {
        // Aqui vai a lógica do modal de erro
    }
}

// Botão de limpar campos
document.getElementById("clearBtn").addEventListener("click", function() {
    document.querySelectorAll('input[type="text"], input[type="number"], input[type="password"], select').forEach(input => {
        input.value = "";
        input.classList.remove('is-valid', 'is-invalid');
        input.disabled = false;
        if (input.type === 'date') {
            input.dispatchEvent(new Event('blur')); // Simula o evento blur
        }
    });

    document.querySelectorAll('.invalid-feedback, .valid-feedback').forEach(feedback => {
        feedback.textContent = "";
    });

    validCep = false;
    validGenero = false;
    validTelefone = false;
    validDataNasc = false;

    feedbackData.textContent = "";
    data.classList.remove('is-valid', 'is-invalid');
});

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").close();
});

// Função mostrar/ocultar senha
function passViewInputs(event) {
    let targetId = event.target.getAttribute('data-target');
    let inputPass = document.getElementById(targetId);
    
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    } else {
        inputPass.setAttribute('type', 'password');
        event.target.classList.add('fa-eye');
        event.target.classList.remove('fa-eye-slash');
    }
}

let passViewIcon = document.querySelectorAll('#eye-icon');
passViewIcon.forEach(icon => {
    icon.addEventListener('click', passViewInputs);
});

// Botão de enviar formulário
document.querySelector('#submitBtn').addEventListener('click', cadastrar);
