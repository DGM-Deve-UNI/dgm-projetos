// Função para ajustar o formato do CPF
function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Função para validar CPF sem modal
function validarCPF(cpf) {	
    let valorCPF = cpf.value.replace(/[^\d]+/g,'');	
    
    // Resetar a validação quando o campo for vazio
    if (valorCPF === '') {
        cpf.classList.remove('is-invalid', 'is-valid');
        return;
    }

    // Elimina CPFs inválidos conhecidos	
    if (valorCPF.length != 11 || 
        valorCPF == "00000000000" || 
        valorCPF == "11111111111" || 
        valorCPF == "22222222222" || 
        valorCPF == "33333333333" || 
        valorCPF == "44444444444" || 
        valorCPF == "55555555555" || 
        valorCPF == "66666666666" || 
        valorCPF == "77777777777" || 
        valorCPF == "88888888888" || 
        valorCPF == "99999999999") {
        cpf.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedback.textContent = "CPF inválido!";
        cpf.classList.remove('is-valid');
        return false;
    }

    // Valida o 1º dígito	
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(valorCPF.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev != parseInt(valorCPF.charAt(9))) {
        cpf.classList.add('is-invalid');
        cpf.classList.remove('is-valid');
        return false;
    }

    // Valida o 2º dígito	
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(valorCPF.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev != parseInt(valorCPF.charAt(10))) {
        cpf.classList.add('is-invalid');
        cpf.classList.remove('is-valid');
        return false;
    }

    // Se for válido, adiciona a classe de sucesso
    cpf.classList.remove('is-invalid');
    cpf.classList.add('is-valid');
    return true;
}

// Função para limpar a validação ao clicar em "Limpar"
function limparValid() {
    let cpfInput = document.getElementById('cpf');
    cpfInput.classList.remove('is-invalid', 'is-valid');
}