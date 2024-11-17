// Máscaras celular, telefone, cpf e cep OK
const maskTel = {
    cel(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\d{5})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },

    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    }
}
// Validação em tempo real para nome e sobrenome
document.getElementById('nome').addEventListener('input', (e) => {
    validarNome(e.target)
})

document.getElementById('sobrenome').addEventListener('input', (e) => {
    validarNome(e.target)
})

// Validação em tempo real para data de nascimento
document.getElementById('data').addEventListener('input', (e) => {
    validarIdade(e.target)
})

// Validação de Gênero
let gen = document.querySelectorAll('input[name="inlineRadioOptions"]');
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

// Validação em tempo real para CPF
document.getElementById('cpf').addEventListener('input', (e) => {
    validarCPF(e.target)
})

document.getElementById('email').addEventListener('input', (e) => {
    validarEmail(e.target);
});

// Aplicando máscaras aos campos
document.getElementById('cpf').addEventListener('input', (e) => {
    e.target.value = maskTel.cpf(e.target.value)
})

document.getElementById('celular').addEventListener('input', (e) => {
    const cel = e.target; // Referência ao campo de celular
    const valor = cel.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    // Limita a 11 caracteres
    if (valor.length > 11) {
        cel.value = valor.slice(0, 11); // Limita a 11 caracteres
    } else {
        cel.value = maskTel.cel(valor); // Aplica a máscara
    }

    // Validação visual e feedback
    const feedbackCel = document.getElementById('feedbackCel');
    
    if (valor.length === 0) {
        cel.classList.remove('is-valid', 'is-invalid');
        feedbackCel.textContent = "O número não pode ser vazio";
        feedbackCel.classList.add('invalid-feedback', 'ms-2', 'pt-1');
    } else if (valor.length < 11) {
        cel.classList.remove('is-valid');
        cel.classList.add('is-invalid');
        feedbackCel.textContent = "Celular inválido";
        feedbackCel.classList.add('invalid-feedback', 'ms-2', 'pt-1');
    } else if (valor.length === 11) {
        cel.classList.remove('is-invalid');
        cel.classList.add('is-valid');
        feedbackCel.textContent = "";
    }
});

// document.getElementById('telFixo').addEventListener('input', (e) => {
//     e.target.value = maskTel.phone(e.target.value)
// })
document.getElementById('telFixo').addEventListener('input', (e) => {
    const telFixo = e.target; // Referência ao campo de telefone fixo
    const valor = telFixo.value.replace(/\D/g, ''); // Remove tudo que não é número
    
    // Aplica a máscara de telefone fixo
    telFixo.value = maskTel.phone(valor);

    // Validação visual e feedback
    const feedbackTel = document.getElementById('feedbackTel');
    
    // O telefone fixo é opcional, então vamos validar se foi preenchido corretamente
    if (valor.length === 0) {
        telFixo.classList.remove('is-valid', 'is-invalid');
        feedbackTel.textContent = "O telefone não pode ser vazio";
        feedbackTel.classList.add('invalid-feedback', 'ms-2', 'pt-1');
    } else if (valor.length < 10 || valor.length > 11) {
        telFixo.classList.remove('is-valid');
        telFixo.classList.add('is-invalid');
        feedbackTel.textContent = "Telefone fixo inválido";
        feedbackTel.classList.add('invalid-feedback', 'ms-2', 'pt-1');
    } else {
        telFixo.classList.remove('is-invalid');
        telFixo.classList.add('is-valid');
        feedbackTel.textContent = "";
    }
});

document.getElementById('cep').addEventListener('input', (e) => {
    e.target.value = maskTel.cep(e.target.value)
})

let numero = document.querySelector('#numero');
let feedbackNumero = document.querySelector('#feedbackNumero');
// Validação do Número endereço
document.getElementById('numero').addEventListener('input', () => {
    if (numero.value.length > 4) {
        numero.value = numero.value.slice(0, 4);
    }
    const valor = numero.value;
    if (valor.length === 0) {
        numero.classList.remove('is-invalid', 'is-valid');
        // feedbackNumero.textContent = "";
    } else {
        numero.classList.add('is-valid');
        // feedbackNumero.textContent = "";
    }
});
// Validação em tempo real para login
document.getElementById('login').addEventListener('input', (e) => {
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
})

// Validação em tempo real para senha e confirmação
document.getElementById('senha').addEventListener('input', validarSenha)
document.getElementById('confiSenha').addEventListener('input', validarSenha)

// Validação de nome e sobrenome
function validarNome(campo) {
    const valor = campo.value;
    const feedback = document.getElementById(`feedback${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`);
    
    // Limpar a classe de erro ou sucesso antes de começar a validação
    campo.classList.remove('is-invalid', 'is-valid');
    feedback.classList.remove('invalid-feedback', 'valid-feedback', 'ms-2', 'pt-1');
    feedback.textContent = ""; // Limpar o texto de feedback anterior

    let fieldValid = true;

    // Validar se o campo não está vazio
    if (valor.length === 0) {
        feedback.textContent = `${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)} não pode estar vazio`;
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        campo.classList.add('is-invalid');
        fieldValid = false;
    }
    // Validar se o nome contém apenas letras (incluindo caracteres especiais permitidos) e tem o tamanho adequado
    else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(valor)) {
        feedback.textContent = `${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)} deve conter apenas letras e espaços`;
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        campo.classList.add('is-invalid');
        fieldValid = false;
    }
    // Validar a quantidade mínima de caracteres
    else if (valor.length < 3) {
        feedback.textContent = `${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)} deve ter pelo menos 3 caracteres`;
        feedback.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        campo.classList.add('is-invalid');
        fieldValid = false;
    }
    // Se estiver válido
    else {
        feedback.textContent = `${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)} válido`;
        feedback.classList.add('valid-feedback', 'ms-2', 'pt-1');
        campo.classList.add('is-valid');
    }

    return fieldValid; // Retorna se o campo está válido ou não
}
// Função para validar a data de nascimento OK
function validarIdade(campo) {
    const dataNascimento = new Date(campo.value);
    const hoje = new Date();

     // Verifica se o ano de nascimento está vazio
     if (!campo.value || isNaN(dataNascimento.getFullYear())) {
        feedbackData.textContent = "Idade inválida: Ano de nascimento não informado.";
        feedbackData.classList.add('invalid-feedback', 'ms-2', 'mt-0');
        data.classList.add('is-invalid', 'mb-0');
        feedbackData.classList.remove('valid-feedback');
        data.classList.remove('is-valid');
        return false;
    }
    
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    
    if (idade < 18) {
        feedbackData.textContent = "Você deve ter pelo menos 18 anos";
        feedbackData.classList.add('invalid-feedback', 'ms-2', 'mt-0');
        data.classList.add('is-invalid', 'mb-0');
        feedbackData.classList.remove('valid-feedback');
        data.classList.remove('is-valid');
        return false;
    } else if (idade > 85) {
        feedbackData.textContent = "Idade máxima permitida é 85 anos";
        feedbackData.classList.add('invalid-feedback', 'ms-2', 'mt-0');
        data.classList.add('is-invalid', 'mb-0');
        feedbackData.classList.remove('valid-feedback');
        data.classList.remove('is-valid');
        return false;
    } else if (idade < 18 || idade > 85) {
        feedbackData.textContent = `Idade inválida: ${idade} anos.`;
        feedbackData.classList.add('invalid-feedback', 'ms-2', 'mt-0');
        data.classList.add('is-invalid', 'mb-0');
        feedbackData.classList.remove('valid-feedback');
        data.classList.remove('is-valid');
        return false;
    } else {
        feedbackData.textContent = `Idade válida: ${idade} anos.`;
        feedbackData.classList.add('valid-feedback', 'ms-2', 'mt-0');
        data.classList.add('is-valid', 'mb-0');
        feedbackData.classList.remove('invalid-feedback');
        data.classList.remove('is-invalid');
        return true;
    }
}

// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.value.replace(/[^\d]/g, '')
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        document.getElementById('feedbackCPF').textContent = 'CPF inválido'
        document.getElementById('feedbackCPF').className = 'text-danger'
        return false
    }
    
    let soma = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    
    let resto = 11 - (soma % 11)
    let digito1 = resto === 10 || resto === 11 ? 0 : resto
    
    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    
    resto = 11 - (soma % 11)
    let digito2 = resto === 10 || resto === 11 ? 0 : resto
    
    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
        document.getElementById('feedbackCPF').textContent = 'CPF válido'
        document.getElementById('feedbackCPF').className = 'text-success'
        return true
    }
    
    document.getElementById('feedbackCPF').textContent = 'CPF inválido'
    document.getElementById('feedbackCPF').className = 'text-danger'
    return false
}

// Validação de Email
function validarEmail(campo) {
    const email = campo.value;
    const feedbackEmail = document.getElementById('feedbackEmail'); // Referência ao feedback do email

    // Limpar o feedback e as classes de erro antes de começar a validação
    campo.classList.remove('is-invalid', 'is-valid');
    feedbackEmail.classList.remove('invalid-feedback', 'valid-feedback', 'ms-2', 'pt-1');
    feedbackEmail.textContent = ""; // Limpar texto de feedback anterior

    // Verificar se o campo está vazio
    if (email.length === 0) {
        campo.classList.remove('is-invalid', 'is-valid');
        feedbackEmail.textContent = "";
        return; // Se o campo estiver vazio, não faz a validação
    }

    // Validação de email com expressão regular
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regexEmail.test(email)) {
        campo.classList.add('is-invalid');
        feedbackEmail.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = "Use um email válido!";
    } else {
        campo.classList.remove('is-invalid');
        feedbackEmail.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        feedbackEmail.textContent = ""; // Limpar o feedback
        campo.classList.add('is-valid');
    }
}

// Validação de login
function validarLogin() {
    const login = document.getElementById('login').value
    
    if (login.length !== 8) {
        // document.getElementById('feedbackLogin').textContent = 'O login deve ter exatamente 8 caracteres'
        // document.getElementById('feedbackLogin').className = 'text-danger'
        return false
    }
    
    // document.getElementById('feedbackLogin').textContent = 'Login válido'
    // document.getElementById('feedbackLogin').className = 'text-success'
    return true
}
// Validação de senha
function validarSenha() {
    const senha = document.getElementById('senha');
    const confSenha = document.getElementById('confiSenha');
    const feedbackSenha = document.getElementById('feedbackSenha');
    const feedbackConfiSenha = document.getElementById('feedbackConfiSenha');
    
    // Resetando os feedbacks ao começar a validação
    senha.classList.remove('is-invalid', 'is-valid');
    feedbackSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1', 'valid-feedback', 'text-success');
    feedbackConfiSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1', 'valid-feedback', 'text-success');
    feedbackSenha.textContent = "";
    feedbackConfiSenha.textContent = "";

    // Validação para a senha
    if (senha.value.length === 0) {
        feedbackSenha.textContent = "Campo de senha vazio!";
        feedbackSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        senha.classList.add('is-invalid');
        return false;
    }
    
    if (senha.value.length < 6) {
        feedbackSenha.textContent = "A senha deve ter pelo menos 6 caracteres";
        feedbackSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        senha.classList.add('is-invalid');
        return false;
    }
    
    // Validação para o campo de confirmação da senha
    if (confSenha.value !== "" && senha.value !== confSenha.value) {
        feedbackConfiSenha.textContent = "As senhas não coincidem";
        feedbackConfiSenha.classList.add('invalid-feedback', 'ms-2', 'pt-1');
        confSenha.classList.add('is-invalid');
        return false;
    }

    // Se a senha for válida
    if (senha.value.length >= 6) {
        feedbackSenha.textContent = "Senha válida";
        feedbackConfiSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        confSenha.classList.remove('is-invalid');
        feedbackSenha.classList.add('valid-feedback', 'ms-2', 'pt-1');
        senha.classList.add('is-valid');
    }

    // Se as senhas coincidirem
    if (senha.value === confSenha.value) {
        feedbackConfiSenha.textContent = "Senhas coincidem";
        feedbackConfiSenha.classList.remove('invalid-feedback', 'ms-2', 'pt-1');
        confSenha.classList.remove('is-invalid');
        feedbackConfiSenha.classList.add('valid-feedback', 'ms-2', 'pt-1');
        confSenha.classList.add('is-valid');
    }

    return true;
}

// Consulta CEP
async function consultaCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const camposEndereco = ['endereco', 'bairro', 'cidade', 'estado']
    
    // Desabilitar campos antes da consulta
    camposEndereco.forEach(campo => {
        document.getElementById(campo).disabled = true
    })
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.erro) {
            document.getElementById('feedbackCep').textContent = 'CEP não encontrado'
            document.getElementById('feedbackCep').className = 'text-danger'
            // Habilitar campos se CEP não encontrado
            camposEndereco.forEach(campo => {
                document.getElementById(campo).disabled = false
            })
            return false
        }
        
        document.getElementById('endereco').value = data.logradouro
        document.getElementById('bairro').value = data.bairro
        document.getElementById('cidade').value = data.localidade
        document.getElementById('estado').value = data.uf
        
        document.getElementById('feedbackCep').textContent = 'CEP válido'
        document.getElementById('feedbackCep').className = 'text-success'
        
        // Manter campos desabilitados se CEP for válido
        camposEndereco.forEach(campo => {
            document.getElementById(campo).disabled = true
        })
        
        return true
    } catch (error) {
        document.getElementById('feedbackCep').textContent = 'Erro ao consultar CEP'
        document.getElementById('feedbackCep').className = 'text-danger'
        // Habilitar campos em caso de erro
        camposEndereco.forEach(campo => {
            document.getElementById(campo).disabled = false
        })
        return false
    }
}
// Event listener para CEP
document.getElementById('cep').addEventListener('blur', (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    if (cep.length === 8) {
        consultaCEP(cep)
    }
})

// Função principal de cadastro
async function cadastrar(event) {
    event.preventDefault();

    let erros = [];
    let genero;

    // Validação dos campos (mantendo a lógica que você me enviou)
    if (!validarNome(document.getElementById('nome'))) {
        erros.push("Nome inválido");
    }

    if (!validarNome(document.getElementById('sobrenome'))) {
        erros.push("Sobrenome inválido");
    }

    if (!validarCPF(document.getElementById('cpf'))) {
        erros.push("CPF inválido");
    }

    const celular = document.getElementById('celular').value;
    if (celular.replace(/\D/g, '').length !== 11) {
        erros.push("Celular inválido");
    }

    const telefoneFixo = document.getElementById('telFixo').value;
    if (telefoneFixo && (telefoneFixo.replace(/\D/g, '').length < 10 || telefoneFixo.replace(/\D/g, '').length > 11)) {
        erros.push("Telefone fixo inválido");
    }

    if (!validarLogin()) {
        erros.push("Login inválido");
    }

    if (!validarSenha()) {
        erros.push("Senha inválida ou senhas não coincidem");
    }

    if (!validarIdade(document.getElementById('data'))) {
        erros.push("Data de nascimento inválida");
    }

    // Validação do endereço
    const camposEndereco = {
        'cep': document.getElementById('cep').value,
        'endereco': document.getElementById('endereco').value,
        'numero': document.getElementById('numero').value,
        'bairro': document.getElementById('bairro').value,
        'cidade': document.getElementById('cidade').value,
        'estado': document.getElementById('estado').value
    };

    for (let [campo, valor] of Object.entries(camposEndereco)) {
        if (!valor.trim()) {
            erros.push(`Campo ${campo} é obrigatório`);
        }
    }

    // Validação do gênero
    const generoSelecionado = document.querySelector('input[name="inlineRadioOptions"]:checked');
    if (!generoSelecionado) {
        erros.push("Por favor, selecione um gênero.");
    } else {
        genero = generoSelecionado.nextElementSibling.textContent.trim();
    }

    // Validação do email
    const email = document.getElementById('email').value;
    if (!email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        erros.push("Email inválido");
    }

    // Obtendo o botão de cadastro
    const btnCadastrar = document.getElementById('submitBtn');

    // Se houver erros, mostramos no modal
    if (erros.length > 0) {
        // Adiciona os atributos do MDB para abrir o modal
        btnCadastrar.setAttribute('data-mdb-ripple-init', '');
        btnCadastrar.setAttribute('data-mdb-modal-init', '');
        btnCadastrar.setAttribute('data-mdb-target', '#modal');

        mostrarModal("Erro de Cadastro", erros.join("<br>"), 'bg-danger', 'border-danger-subtle');
    } else {
        // Se o cadastro for bem-sucedido, coletamos os dados
        const formData = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            dataNascimento: document.getElementById('data').value,
            genero: genero,
            cpf: document.getElementById('cpf').value,
            email: email,
            celular: celular,
            telefoneFixo: document.getElementById('telFixo').value,
            endereco: {
                cep: camposEndereco.cep,
                logradouro: camposEndereco.endereco,
                numero: camposEndereco.numero,
                bairro: camposEndereco.bairro,
                cidade: camposEndereco.cidade,
                estado: camposEndereco.estado,
                complemento: document.getElementById('complemento').value
            },
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        };

        // Salvar no localStorage
        localStorage.setItem('userData', JSON.stringify(formData));

        // Remover os atributos do botão de cadastro para impedir a abertura do modal de erro
        btnCadastrar.removeAttribute('data-mdb-ripple-init');
        btnCadastrar.removeAttribute('data-mdb-modal-init');
        btnCadastrar.removeAttribute('data-mdb-target');

        // Modal de sucesso
        mostrarModal("Cadastro Realizado", "Seu cadastro foi realizado com sucesso!", 'bg-success', 'border-success-subtle');

        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}

// Função para mostrar o modal com título e mensagem
function mostrarModal(titulo, mensagem, cor) {
    // Atualiza o título e a mensagem do modal
    document.getElementById('modalLabel').innerText = titulo;
    document.getElementById('modalMessage').innerHTML = mensagem;

    // Modal
    let modalElement = document.getElementById('modal');
    
    // Criar nova instância do modal
    let modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);

    // Modal Header
    let modalHeader = document.querySelector('.modal-header');
    let btn = document.getElementById('btn');

    // Limpar as classes antigas
    modalHeader.classList.remove('bg-success', 'border-success-subtle', 'border-danger-subtle', 'bg-danger', 'text-white');
    btn.classList.remove('bg-success', 'bg-danger', 'text-white', 'btn-secondary');

    // Adicionar as classes de acordo com o tipo (erro ou sucesso)
    modalHeader.classList.add(cor, 'text-white');
    btn.classList.add(cor, 'text-white');

    // Exibe o modal
    modal.show();

    // Garantir que o backdrop e a classe "fade" sejam removidos ao fechar o modal
    modalElement.addEventListener('hidden.bs.modal', function () {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    });
}

// Função limpar
// limpar tudo \\
document.getElementById("clearBtn").addEventListener("click", function() {
    // Limpa o campo de gênero e remove validações
    const genero = document.querySelector("input[name='genero']");
    if (genero) {
        genero.checked = false;  // Desmarca o gênero selecionado
        genero.classList.remove("is-invalid", "is-valid");
    }

    // Limpa o campo de celular e remove validações
    const celular = document.getElementById("celular");
    if (celular) {
        celular.value = "";
        celular.classList.remove("is-invalid", "is-valid");
    }

    // Limpa o campo de telefone e remove validações
    const telefone = document.getElementById("telefone");
    if (telefone) {
        telefone.value = "";
        telefone.classList.remove("is-invalid", "is-valid");
    }
    
    // Limpa o campo de e-mail e remove validações
    const email = document.getElementById("email");
    if (email) {
        email.value = "";
        email.classList.remove("is-invalid", "is-valid");
    }
    
    const estado = document.getElementById("estado");
    if (estado) {
        estado.value = "";
        estado.classList.remove("is-invalid", "is-valid");
    }
    // Habilitar campos de endereço
    const camposEndereco = ['endereco', 'bairro', 'cidade', 'estado']
    camposEndereco.forEach(campo => {
        const elemento = document.getElementById(campo)
        elemento.value = ''
        elemento.disabled = false
    })

    // Limpa todos os campos de entrada restantes
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
        input.classList.remove("is-invalid", "is-valid");
    });

    // Limpa todas as mensagens de erro
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });
});
// limpar tudo \\

// Configuração do modal
// const modal = document.getElementById('modal')
// const closeModal = document.getElementById('closeModal')

// closeModal.onclick = function() {
//     modal.close()
// }

// // Fechar o modal ao clicar no botão "Fechar"
// document.getElementById("closeModal").addEventListener("click", function() {
//     document.getElementById("modal").close();
// });

// // Quando clicar fora do modal, fechar
// modal.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         modal.close()
//     }
// })