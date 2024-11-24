// Função para fechar o modal e depois voltar para a página anterior
export function fecharEVoltar() {
    var modalElement = document.querySelector('.modal.show');
    if (modalElement) {
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    }
    
    // Usar um pequeno atraso para garantir que o modal feche primeiro
    setTimeout(function() {
        history.back();
    }, 300);
}

// Função para limpar os campos do modal
export function limparCampos() {
    document.getElementById("typeEmail").value = "";
}
