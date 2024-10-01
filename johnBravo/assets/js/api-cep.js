// document.getElementById("cep").addEventListener("blur", function() {
//     // Remove tudo que não for número
//     let cep = this.value.replace(/\D/g, '');

//     // Adiciona o hífen após o quinto número, se necessário
//     if (cep.length > 5) {
//         cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
//         this.value = cep; // Atualiza o valor do input com o CEP formatado
//     }

//     // Chama a API apenas se o CEP tiver 8 números (sem o hífen)
//     if (cep.length === 9) {
//         fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(response => response.json())
//             .then(data => {
//                 if (!("erro" in data)) {
//                     // Preencher os campos com os valores retornados pela API
//                     document.getElementById("endereco").value = data.logradouro;
//                     document.getElementById("bairro").value = data.bairro;
//                     document.getElementById("cidade").value = data.localidade;
//                     document.getElementById("estado").value = data.uf;

//                     // Simular a interação manual adicionando a classe 'active' nos labels
//                     document.getElementById("endereco").dispatchEvent(new Event('input'));
//                     document.getElementById("bairro").dispatchEvent(new Event('input'));
//                     document.getElementById("cidade").dispatchEvent(new Event('input'));
//                     document.getElementById("estado").dispatchEvent(new Event('input'));
//                 } else {
//                     alert("CEP não encontrado.");
//                 }
//             })
//             .catch(error => console.error("Erro ao buscar o CEP:", error));
//     }
// });

// document.getElementById("cep").addEventListener("blur", function() {
//     // Remove tudo que não for número
//     let cep = this.value.replace(/\D/g, '');

//     // Adiciona o hífen após o quinto número, se necessário
//     if (cep.length > 5) {
//         cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
//         this.value = cep; // Atualiza o valor do input com o CEP formatado
//     }

//     // Chama a API apenas se o CEP tiver 8 números (sem o hífen)
//     if (cep.length === 9) {
//         fetch(`https://viacep.com.br/ws/${cep}/json/`)

//             .then(response => response.json())
//             .then(data => {
//                 if (!("erro" in data)) {
//                     // Preencher os campos com os valores retornados pela API
//                     document.getElementById("endereco").value = data.logradouro;
//                     document.getElementById("bairro").value = data.bairro;
//                     document.getElementById("cidade").value = data.localidade;
//                     document.getElementById("estado").value = data.uf;

//                     // Simular a interação manual adicionando a classe 'active' nos labels
//                     document.getElementById("endereco").dispatchEvent(new Event('input'));
//                     document.getElementById("bairro").dispatchEvent(new Event('input'));
//                     document.getElementById("cidade").dispatchEvent(new Event('input'));
//                     document.getElementById("estado").dispatchEvent(new Event('input'));
//                 } else {
//                     // Exibir o modal de erro usando <dialog>
//                     let cepModal = document.getElementById('cepModal');
//                     cepModal.showModal(); // Exibe o diálogo
//                 }
//             })
//             .catch(error => console.error("Erro ao buscar o CEP:", error));
//     }
// });

// // Fechar o modal ao clicar no botão "Fechar"
// document.getElementById("closeModal").addEventListener("click", function() {
//     document.getElementById("cepModal").close(); // Fecha o diálogo
// });

document.getElementById("cep").addEventListener("blur", function() {
    // Remove tudo que não for número
    let cep = this.value.replace(/\D/g, '');

    // Adiciona o hífen após o quinto número, se necessário
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        this.value = cep; // Atualiza o valor do input com o CEP formatado
    }

    // Referência ao modal e à mensagem
    let cepModal = document.getElementById('cepModal');
    let modalMessage = document.getElementById('modalMessage');

    // Chama a API apenas se o CEP tiver 8 números (sem o hífen)
    if (cep.length === 9) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
            .then(data => {
                if (!("erro" in data)) {
                    // Preencher os campos com os valores retornados pela API
                    document.getElementById("endereco").value = data.logradouro;
                    document.getElementById("bairro").value = data.bairro;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("estado").value = data.uf;

                    // Simular a interação manual adicionando a classe 'active' nos labels
                    document.getElementById("endereco").dispatchEvent(new Event('input'));
                    document.getElementById("bairro").dispatchEvent(new Event('input'));
                    document.getElementById("cidade").dispatchEvent(new Event('input'));
                    document.getElementById("estado").dispatchEvent(new Event('input'));
                } else {
                    // CEP não encontrado
                    modalMessage.textContent = "CEP não encontrado.";
                    cepModal.showModal(); // Exibe o modal
                }
            })
            .catch(error => {
                // Erro ao buscar endereço
                console.error("Erro ao buscar o CEP:", error);
                modalMessage.textContent = "Erro ao buscar endereço.";
                cepModal.showModal(); // Exibe o modal
            });
    } else {
        // CEP inválido
        modalMessage.textContent = "CEP inválido.";
        cepModal.showModal(); // Exibe o modal
    }
});

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("cepModal").close(); // Fecha o modal
});