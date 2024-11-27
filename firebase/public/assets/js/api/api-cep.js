document.getElementById("cep").addEventListener("blur", function() {
    // Remove tudo que não for número
    let cep = this.value.replace(/\D/g, '');

    // Adiciona o hífen após o quinto número, se necessário
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        this.value = cep; // Atualiza o valor do input com o CEP formatado
    }

    // Referências aos campos de feedback
    let feedbackCep = document.querySelector('#feedbackCep');
    let fields = ['endereco', 'bairro', 'cidade', 'estado'];

    // Chama a API apenas se o CEP tiver 8 números (sem o hífen)
    if (cep.replace('-', '').length === 8) {
        fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!("erro" in data)) {
                // Preencher os campos com os valores retornados pela API
                document.getElementById("endereco").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;

                // Atualiza o feedback visual e desabilita os campos
                fields.forEach(field => {
                    const inputField = document.getElementById(field);
                    inputField.classList.add('is-valid');
                    inputField.classList.remove('is-invalid');
                    inputField.disabled = true; // Desabilita o campo
                    inputField.dispatchEvent(new Event('input'));
                });

                // Limpa feedback do CEP
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                feedbackCep.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
                feedbackCep.textContent = "";
            } else {
                // CEP não encontrado
                limparCampos(fields);
                this.classList.add('is-invalid');
                feedbackCep.classList.add('invalid-feedback', 'ms-2', 'pt-1');
                feedbackCep.textContent = "CEP não encontrado.";
                // Simula evento de blur para atualizar labels
                fields.forEach(field => {
                    const inputField = document.getElementById(field);
                    inputField.classList.remove('is-valid', 'is-invalid');
                    inputField.dispatchEvent(new Event('blur'));
                });
            }
        })
        .catch(error => {
            // Erro ao buscar endereço
            console.error("Erro ao buscar o CEP:", error);
            limparCampos(fields);
            this.classList.add('is-invalid');
            feedbackCep.classList.add('invalid-feedback', 'ms-2', 'pt-1');
            feedbackCep.textContent = "Erro ao buscar endereço.";
            fields.forEach(field => {
                const inputField = document.getElementById(field);
                inputField.classList.remove('is-valid', 'is-invalid');
                inputField.dispatchEvent(new Event('blur')); 
            });
        });
    } else {
        // CEP inválido
        limparCampos(fields);
        this.classList.add('is-invalid');
        feedbackCep.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackCep.textContent = "CEP inválido.";
        fields.forEach(field => {
            const inputField = document.getElementById(field);
            inputField.classList.remove('is-valid', 'is-invalid');
            inputField.dispatchEvent(new Event('blur')); 
        });
    }
});

// Função para limpar campos de endereço
function limparCampos(fields) {
    fields.forEach(field => {
        const inputField = document.getElementById(field);
        inputField.value = "";
        inputField.classList.remove('is-valid', 'is-invalid');
        inputField.disabled = false;
        
        // Simula o evento de input para atualizar label
        inputField.dispatchEvent(new Event('input'));
    });
}