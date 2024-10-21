// === Máscara formulário ===
$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cel').mask('(+55) 00-0 0000-0000');
    $('#tel').mask('(+55) 00-0000-0000');
    $('#cep').mask('00000-000');
  
  // === Limitador de caracteres ===
    // --- Input "Number" --- \\
    $('#num-end').on('input', function() {
        if (this.value.length > 5) {
            this.value = this.value.slice(0, 5);
        }
    }); // --- Complemento <textarea> --- \\
        $('#comp').on('input', function() {
            if (this.value.length > 100) {
                this.value = this.value.slice(0, 100);
            }
        });
  });
  // === Feedback de envio ===
  function confirm(type) {
      iziToast.success({
      title: 'Cadastro realizado com sucesso! 😊',
      message: '',
      position: 'bottomCenter',
      timeout: 5000,
      theme: 'dark',
      color: '#fff',
      backgroundColor: type === 'success' ? '#1abc9c' : '#43b633',
    });
  }
  // Função de mostrar e ocultar senha e mudar ícone \\
  function togglePasswordVisibility(eyeIcon, inputField) {
    if (inputField.getAttribute('type') === 'password') {
      inputField.setAttribute('type', 'text');
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      inputField.setAttribute('type', 'password');
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  }
    let eyeIconSenha = document.querySelector('#eye-icon');
    let inputSenha = document.querySelector('#pass');
  
    eyeIconSenha.addEventListener('click', () => {
      togglePasswordVisibility(eyeIconSenha, inputSenha);
  });
  
    let eyeIconConfirmaSenha = document.querySelector('#eye-icon-confirm');
    let inputConfirmaSenha = document.querySelector('#conf-pass');
  
    eyeIconConfirmaSenha.addEventListener('click', () => {
      togglePasswordVisibility(eyeIconConfirmaSenha, inputConfirmaSenha);
  });
  // === Lista de validações === \\
  class Validator {
    constructor() {
      this.validations = [
        'required',
        'only-letters',
        'min-length',
        'login-length',
        'cpf-length',
        'cep-length',
        'max-length',
        'email-validate',
        'pass-valid',
        'equal',
        'terms-accepted',
        'gender-validate',
        'state-validate',
      ];
    }
  // Limpa as validações anteriores \\
    validate(form) {
      let currentValidations = form.querySelectorAll('.error-validation, .error-active, .error-selc');
        if (currentValidations.length > 0) {
          this.cleanValidations(currentValidations);
      }
      // Obtém os inputs do formulário \\
      let inputs = form.getElementsByTagName('input');
      let inputsArray = [...inputs];
      let isValid = true;
      // Verifica cada input com as validações disponíveis \\
      inputsArray.forEach((input) => {
        this.validations.forEach((validation) => {
          if (input.getAttribute('data-' + validation) !== null) {
            let method = validation.replace('-', '');
            let value = input.getAttribute('data-' + validation);
              if (typeof this[method] === 'function') {
                if (!this[method](input, value)) {
                  isValid = false;
              }
            }
          }
        });
      });
      // Verifica se o checkbox de termos e condições foi aceito \\
      let checkboxInput = form.querySelector('input[name="terms-accepted"]');
        if (checkboxInput !== null) {
          if (!this.termsAccepted(checkboxInput)) {
            isValid = false;
          }
      }
      // Verifica se o gênero foi selecionado \\
      let genderInput = form.querySelector('input[name="gen"]');
      if (genderInput !== null) {
        if (!this.validateGender(genderInput)) {
          isValid = false;
        }
      }
      // Verifica se o estado foi selecionado \\
      let stateInput = form.querySelector('#estados');
      if (stateInput !== null) {
        if (!this.validateState(stateInput)) {
          isValid = false;
        }
      }
      // Exibe mensagem de sucesso se tudo estiver válido \\
      if (isValid) {
        confirm('');
      }
    }
    // Valida se apenas letras são permitidas no campo \\
    onlyletters(input) {
      let re = /^[A-Za-zÀ-ÿ\s]+$/;
      let inputValue = input.value;
      let errorMessage = 'Este campo não aceita números nem caracteres especiais.';
        if (!re.test(inputValue)) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida o tamanho mínimo do campo \\
    minlength(input, minValue) {
      let inputLength = input.value.length;
      let errorMessage = `O nome deve conter no mínimo ${minValue} caracteres.`;
        if (inputLength < minValue) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida o tamanho mínimo do login \\
    loginLength(input, minValue) {
      let inputLength = input.value.length;
      let errorMessage = `O login deve conter no mínimo ${minValue} caracteres alfabéticos.`;
        if (inputLength < minValue) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida o tamanho mínimo do CPF
    cpfLength(input, minValue) {
      let inputLength = input.value.length;
      let errorMessage = `CPF inválido.`;
        if (inputLength < minValue) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida o tamanho mínimo do CEP \\
    ceplength(input, minValue) {
      let inputLength = input.value.length;
      let errorMessage = `CEP inválido.`;
        if (inputLength < minValue) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida o tamanho máximo do campo \\
    maxlength(input, maxValue) {
      let inputLength = input.value.length;
      let errorMessage = `O nome deve conter no máximo ${maxValue} caracteres.`;
        if (inputLength > maxValue) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Validação de e-mail \\
    emailValidate(input) {
      let re = /\S+@\S+\.\S+/;
      let email = input.value;
      let errorMessage = 'Insira um e-mail válido no padrão "seunome@email.com"';
        if (!re.test(email)) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Validação de gênero \\
    validateGender(input) {
      let isChecked = input.checked;
      let errorMessage = 'Selecione uma opção de gênero.';
      
      let genderInputs = document.querySelectorAll('input[name="gen"]');
      let isAnyChecked = Array.from(genderInputs).some(input => input.checked);
    
      if (!isAnyChecked) {
        this.printMessGen(input, errorMessage);
        return false;
      }
      
      return true;
    }  
    // Validação de estados \\
    validateState(input) {
      let selectedValue = input.value;
      let errorMessage = 'Selecione um estado válido.';
      if (selectedValue === '') {
        let inputParent = input.parentNode;
        this.printMess(inputParent, errorMessage);
        return false;
      }
      return true;
    }
    // Valida se o campo é obrigatório \\
    required(input) {
      let inputValue = input.value;
        if (inputValue === '') {
          let errorMessage = 'Este campo é obrigatório!';
            this.printMess(input, errorMessage);
              return false;
      }
      return true;
    }
    // Valida se dois campos são iguais \\
    equal(input, inputName) {
      let inputToCompare = document.getElementsByName(inputName)[0];
      let errorMessage = 'As senhas não correspondem! Digite a mesma senha.';
        if (input.value !== inputToCompare.value) {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Validação de senha \\
    passvalid(input) {
      let inputValue = input.value;
      let errorMessage = '';
        if (inputValue.length < 8) {
          errorMessage = 'A senha deve conter no mínimo 8 caracteres.';
        } else if (!/[A-Z]/.test(inputValue)) {
          errorMessage = 'A senha deve conter pelo menos uma letra maiúscula.';
        } else if (!/[a-z]/.test(inputValue)) {
          errorMessage = 'A senha deve conter pelo menos uma letra minúscula.';
        }
        if (errorMessage !== '') {
          this.printMess(input, errorMessage);
            return false;
      }
      return true;
    }
    // Valida se os termos e condições foram aceitos (checkbox) \\
    termsaccepted(input) {
      let isChecked = input.checked;
        if (!isChecked) {
          let errorMessage = 'Você deve aceitar os termos e condições.';
            this.printMessBox(input, errorMessage);
              return false;
      }
      return true;
    }
    // Exibe mensagem de erro para um campo específico \\
    printMess(input, msg) {
      let errorQnt = input.parentNode.querySelector('.error-validation');
        if (errorQnt === null) {
          let template = document.querySelector('.error-validation.template').cloneNode(true);
            template.textContent = msg;
          let inputParent = input.parentNode;
            template.classList.remove('template');
              inputParent.appendChild(template);
      }
    }
    // Exibe mensagem de erro para um checkbox específico \\
    printMessBox(input, msg) {
      let errorQnt = input.parentNode.querySelector('.error-active');
        if (errorQnt === null) {
          let errorCheckbox = document.querySelector('.error-active.error-checkbox').cloneNode(true);
            errorCheckbox.textContent = msg;
          let inputParent = input.parentNode;
            errorCheckbox.classList.remove('error-checkbox');
              inputParent.appendChild(errorCheckbox);
      }
    }
    // Exibe mensagem de erro para um radio específico \\
    printMessGen(input, msg) {
      let errorQnt = input.parentNode.querySelector('.error-selc');
        if (errorQnt === null) {
          let errorGen = document.querySelector('.error-selc.error-gen').cloneNode(true);
            errorGen.textContent = msg;
          let inputParent = input.parentNode;
            errorGen.classList.remove('error-gen');
              inputParent.appendChild(errorGen);
      }
    }
    // Limpa as mensagens de erro anteriores \\
    cleanValidations(validations) {
      validations.forEach((el) => el.remove());
    }
  }
  // Botões presentes no HTML \\
  let form = document.getElementById('form');
  let btnSubmit = document.querySelector('.btn-submit');
  let btnPassrest = document.querySelector('.btn-passrest');
  let btnClear = document.querySelector('.btn-clear');
  let validator = new Validator();
  // Botão de "Enviar" \\
  btnSubmit.addEventListener('click', function (event) {
      event.preventDefault();
        validator.validate(form);
  });
  // Botão de "Limpar" \\
  btnClear.addEventListener('click', function () {
    let currentValidations = form.querySelectorAll('.error-validation, .error-active, .error-selc');
      validator.cleanValidations(currentValidations);
  });
  
  // LocalStorage
  function enviar() {
    let nome = document.querySelector('#nome').value;
      let validNome = false
    let dataNascimento = document.querySelector('#date').value;
      let validdataNascimento = false
    let genero = document.querySelector('input[name="gen"]:checked').value;
      let validgenero = false
    let nomeMae = document.querySelector('#name-mae').value;
      let validnomeMae = false
    let cpf = document.querySelector('#cpf').value;
      let validcpf = false
    let celular = document.querySelector('#cel').value;
      let validcelular = false
    let telefone = document.querySelector('#tel').value;
      let validtelefone = false
    let email = document.querySelector('#email').value;
      let validemail = false
    let cep = document.querySelector('#cep').value;
      let validcep = false
    let endereco = document.querySelector('#end').value;
      let validendereco = false
    let numeroEndereco = document.querySelector('#num-end').value;
      let validnumeroEndereco = false
    let estados = document.querySelector('#estado').value;
      let validestados = false
    let cidade = document.querySelector('#cid').value;
      let validcidade = false
    let bairro = document.querySelector('#bairro').value;
      let validbairro = false
    let complemento = document.querySelector('#comp').value;
    let login = document.querySelector('#login').value;
      let validlogin = false
    let senha = document.querySelector('#pass').value;
      let validsenha = false
    let confPass = document.querySelector('#conf-pass').value;
      let validconfPass = false
    let termos = document.querySelector('#TermsAccepted').value;
      let validtermos = false
  
    // Verificar se a lista de usuários já existe no localStorage
    if(validNome && validdataNascimento && validgenero && validnomeMae 
      && validcpf && validcelular && validtelefone && validemail && validcep 
      && validendereco && validnumeroEndereco && validestados && validcidade 
      && validbairro && validlogin && validsenha && validconfPass && validtermos) {
      // alert('Cadastro realizado com sucesso!');
      // iziToast.success({
      //   title: 'Cadastro realizado com sucesso! 😊',
      //   message: '',
      //   position: 'bottomCenter',
      //   timeout: 5000,
      //   theme: 'dark',
      //   color: '#fff',
      //   backgroundColor: type === 'success' ? '#1abc9c' : '#43b633',
      // });
    } else {
      // alert('Campos vazios')
    }
  
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  
    setTimeout(()=>{
      window.location.href = './login.html'
    }, 5000)
  
    // Criar um objeto de usuário com os dados
    let usuario = {
      nome,
      dataNascimento,
      genero,
      nomeMae,
      cpf,
      celular,
      telefone,
      email,
      cep,
      endereco,
      numeroEndereco,
      estados,
      cidade,
      bairro,
      complemento,
      login,
      senha,
      confPass,
      termos,
    };
  
    // Adicionar o usuário à lista
    listaUser.push(usuario);
  
    // Salvar a lista atualizada no localStorage
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
  }