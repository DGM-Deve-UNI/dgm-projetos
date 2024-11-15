// Máscaras para telefone e celular
const maskTel = {
    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },
    
    cel(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\d{5})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },

    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },

    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }
}

// Função para validar a data de nascimento
function validarIdade(campo) {
    const dataNascimento = new Date(campo.value);
    const hoje = new Date();
    
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    
    if (idade < 18) {
        document.getElementById('feedbackData').textContent = 'Você deve ter pelo menos 18 anos';
        document.getElementById('feedbackData').className = 'text-danger';
        return false;
    } else if (idade > 85) {
        document.getElementById('feedbackData').textContent = 'Idade máxima permitida é 85 anos';
        document.getElementById('feedbackData').className = 'text-danger';
        return false;
    }
    
    document.getElementById('feedbackData').textContent = 'Idade válida';
    document.getElementById('feedbackData').className = 'text-success';
    return true;
}

// Aplicando máscaras aos campos
document.getElementById('telFixo').addEventListener('input', (e) => {
    e.target.value = maskTel.phone(e.target.value)
})

document.getElementById('celular').addEventListener('input', (e) => {
    e.target.value = maskTel.cel(e.target.value)
})

document.getElementById('cep').addEventListener('input', (e) => {
    e.target.value = maskTel.cep(e.target.value)
})

document.getElementById('cpf').addEventListener('input', (e) => {
    e.target.value = maskTel.cpf(e.target.value)
})

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

// Validação em tempo real para CPF
document.getElementById('cpf').addEventListener('input', (e) => {
    validarCPF(e.target)
})

// Validação em tempo real para login
document.getElementById('login').addEventListener('input', (e) => {
    if (e.target.value.length > 8) {
        e.target.value = e.target.value.slice(0, 8)
    }
    validarLogin()
})

// Validação em tempo real para senha e confirmação
document.getElementById('senha').addEventListener('input', validarSenha)
document.getElementById('confiSenha').addEventListener('input', validarSenha)

// Validação em tempo real para celular
document.getElementById('celular').addEventListener('input', (e) => {
    const valor = e.target.value.replace(/\D/g, '')
    if (valor.length === 11) {
        document.getElementById('feedbackCel').textContent = 'Celular válido'
        document.getElementById('feedbackCel').className = 'text-success'
    } else {
        document.getElementById('feedbackCel').textContent = 'Celular inválido'
        document.getElementById('feedbackCel').className = 'text-danger'
    }
})

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

// Validação de nome e sobrenome
function validarNome(campo) {
    const valor = campo.value
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,60}$/
    
    if (!regex.test(valor)) {
        document.getElementById(`feedback${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`).textContent = 
            'Nome deve conter apenas letras e ter entre 3 e 60 caracteres'
        document.getElementById(`feedback${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`).className = 'text-danger'
        return false
    }
    
    document.getElementById(`feedback${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`).textContent = 'Nome válido'
    document.getElementById(`feedback${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`).className = 'text-success'
    return true
}

// Validação de login
function validarLogin() {
    const login = document.getElementById('login').value
    
    if (login.length !== 8) {
        document.getElementById('feedbackLogin').textContent = 'O login deve ter exatamente 8 caracteres'
        document.getElementById('feedbackLogin').className = 'text-danger'
        return false
    }
    
    document.getElementById('feedbackLogin').textContent = 'Login válido'
    document.getElementById('feedbackLogin').className = 'text-success'
    return true
}

// Validação de senha
function validarSenha() {
    const senha = document.getElementById('senha').value
    const confSenha = document.getElementById('confiSenha').value
    
    if (senha.length !== 6) {
        document.getElementById('feedbackSenha').textContent = 'A senha deve ter exatamente 6 caracteres'
        document.getElementById('feedbackSenha').className = 'text-danger'
        return false
    }
    
    if (senha !== confSenha) {
        document.getElementById('feedbackConfiSenha').textContent = 'As senhas não coincidem'
        document.getElementById('feedbackConfiSenha').className = 'text-danger'
        return false
    }
    
    document.getElementById('feedbackSenha').textContent = 'Senha válida'
    document.getElementById('feedbackSenha').className = 'text-success'
    document.getElementById('feedbackConfiSenha').textContent = 'Senhas coincidem'
    document.getElementById('feedbackConfiSenha').className = 'text-success'
    return true
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
    
    // Array para armazenar mensagens de erro
    let erros = [];
    
    // Validações individuais
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
        erros.push("Selecione um gênero");
    }
    
    // Validação do email
    const email = document.getElementById('email').value;
    if (!email || !email.includes('@') || !email.includes('.')) {
        erros.push("Email inválido");
    }
    
    // Se houver erros, mostrar no modal
    if (erros.length > 0) {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modalMessage');
        modalMessage.innerHTML = 'Por favor, corrija os seguintes erros:<br>' + 
                               erros.map(erro => `- ${erro}`).join('<br>');
        modal.showModal();
        return;
    }
    
    // Se chegou aqui, todos os campos estão válidos
    // Coleta dos dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        dataNascimento: document.getElementById('data').value,
        genero: generoSelecionado.value,
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
    
    // Modal de sucesso
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = 'Cadastro realizado com sucesso!';
    modal.showModal();
    
    // Redirecionar após 2 segundos
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Função limpar
function limparSelecionados() {
    // Limpar inputs
    document.querySelectorAll('input').forEach(input => {
        input.value = ''
        input.disabled = false
    })
    
    // Limpar radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)
    
    // Limpar checkbox
    document.getElementById('checkbox').checked = false
    
    // Limpar feedback spans
    document.querySelectorAll('span[id^="feedback"]').forEach(span => {
        span.textContent = ''
        span.className = ''
    })
    
    // Habilitar campos de endereço
    const camposEndereco = ['endereco', 'bairro', 'cidade', 'estado']
    camposEndereco.forEach(campo => {
        const elemento = document.getElementById(campo)
        elemento.value = ''
        elemento.disabled = false
    })
    
    // Limpar textarea de complemento
    document.getElementById('complemento').value = ''
}

// Configuração do modal
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')

closeModal.onclick = function() {
    modal.close()
}

// Quando clicar fora do modal, fechar
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close()
    }
})

// Toggle visibilidade da senha
document.querySelectorAll('.fa-eye').forEach(icon => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target')
        const input = document.getElementById(targetId)
        input.type = input.type === 'password' ? 'text' : 'password'
        icon.classList.toggle('fa-eye-slash')
    })
})