// Configuração do modal
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')

closeModal.onclick = function() {
    modal.close()
}

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").close();
});

// Quando clicar fora do modal, fechar
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close()
    }
})