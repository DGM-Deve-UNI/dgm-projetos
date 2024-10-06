// Função para ajustar o formato do CPF
function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Função para validar CPF com modal
function validarCPF(cpf) {	
    cpf = cpf.value.replace(/[^\d]+/g,'');	
    if (cpf === '') return false;

    // Referência ao modal e à mensagem
    let modal = document.getElementById('modal');
    let modalMessage = document.getElementById('modalMessage');
	
    // Elimina CPFs inválidos conhecidos	
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999") {
        modalMessage.textContent = "CPF inválido.";
        modal.showModal(); // Exibe o modal
        return false;
    }

    // Valida o 1º dígito	
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) {
        modalMessage.textContent = "CPF inválido.";
        modal.showModal(); // Exibe o modal
        return false;
    }

    // Valida o 2º dígito	
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) {
        modalMessage.textContent = "CPF inválido.";
        modal.showModal(); // Exibe o modal
        return false;
    }
    return true;
}

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").close(); // Fecha o modal
});