document.getElementById('cep').addEventListener('blur', function() {

    // Remove caracteres não numéricos

    const cep = this.value.replace(/\D/g, ''); 
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById('endereco').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;

          } else {
            alert('CEP não encontrado.');
          }
        })
        .catch(error => {
          console.error('Erro:', error);
          alert('Erro ao buscar endereço.');
        });
    } else {
      alert('CEP inválido.');
    }
  });
  
