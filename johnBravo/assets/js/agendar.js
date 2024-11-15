document.addEventListener("DOMContentLoaded", function () {
    // Função para avançar nas etapas do formulário
    function nextStep(currentStep) {
        if (validateStep(currentStep)) {
            document.getElementById("step" + currentStep).classList.remove("active");
            document.getElementById("step" + (currentStep + 1)).classList.add("active");
            updateProgressBar(currentStep + 1);
            
            // Se a etapa 3 for ativada, aplicar a máscara no campo WhatsApp
            if (currentStep + 1 === 3) {
                applyWhatsappMask(); // Chama a função para aplicar a máscara
            }
        }
    }

    // Função para voltar nas etapas do formulário
    function prevStep(currentStep) {
        document.getElementById("step" + currentStep).classList.remove("active");
        document.getElementById("step" + (currentStep - 1)).classList.add("active");
        updateProgressBar(currentStep - 1);
    }

    // Função para atualizar a barra de progresso
    function updateProgressBar(step) {
        const progress = (step / 3) * 100;
        document.querySelector(".progress-bar").style.width = `${progress}%`;
        document.querySelector(".progress-bar").innerText = `Passo ${step} de 3`;
    }

    // Validação do formulário por etapa
    function validateStep(step) {
        let valid = true;
        if (step === 1) {
            const service = document.getElementById("service");
            const professional = document.getElementById("professional");
            if (service.value === "" || professional.value === "") {
                valid = false;
                showModal("Atenção", "Selecione o serviço e o profissional.");
            }
        } else if (step === 2) {
            const date = document.getElementById("date");
            const time = document.getElementById("time");
            if (date.value === "" || time.value === "") {
                valid = false;
                date.classList.add("is-invalid");
                time.classList.add("is-invalid");
                showModal("Atenção", "Preencha a data e o horário.");
            } else {
                date.classList.remove("is-invalid");
                time.classList.remove("is-invalid");
                date.classList.add("is-valid");
                time.classList.add("is-valid");
            }
        } else if (step === 3) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const whatsapp = document.getElementById("whatsapp");
            
            const namePattern = /^[A-Za-zÀ-ÿ\s]{3,30}$/;
            const whatsappPattern = /^\(\d{2}\) \d{5}-\d{4}$/;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            // Validação do nome
            if (!namePattern.test(name.value)) {
                valid = false;
                name.classList.add("is-invalid");
                name.classList.remove("is-valid");
                showModal("Atenção", "O nome deve conter entre 3 e 30 caracteres.");
                return valid;
            } else {
                name.classList.remove("is-invalid");
                name.classList.add("is-valid");
            }

            // Validação do e-mail
            if (!emailPattern.test(email.value)) {
                valid = false;
                email.classList.add("is-invalid");
                email.classList.remove("is-valid");
                showModal("Atenção", "Por favor, insira um e-mail válido.");
                return valid;
            } else {
                email.classList.remove("is-invalid");
                email.classList.add("is-valid");
            }

            // Validação do WhatsApp
            if (!whatsappPattern.test(whatsapp.value)) {
                valid = false;
                whatsapp.classList.add("is-invalid");
                whatsapp.classList.remove("is-valid");
                showModal("Atenção", "Preencha o WhatsApp no formato correto (ex: (11) 12345-6789).");
                return valid;
            } else {
                whatsapp.classList.remove("is-invalid");
                whatsapp.classList.add("is-valid");
            }
        }
        return valid;
    }

    // Máscara para o campo de WhatsApp
    function applyWhatsappMask() {
        const whatsappInput = document.getElementById("whatsapp");
        if (whatsappInput) {
            whatsappInput.removeEventListener("input", maskWhatsapp); // Remove qualquer listener anterior para evitar duplicação
            whatsappInput.addEventListener("input", maskWhatsapp); // Adiciona o listener com a máscara
        }
    }

    // Função de máscara do WhatsApp
    function maskWhatsapp(e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
        e.target.value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // Aplica a máscara
    }

    // Validação da data e carregamento de horários disponíveis
    function validateDate() {
        const dateInput = document.getElementById("date");
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        const dayOfWeek = selectedDate.getDay();
        const isWeekend = (dayOfWeek === 6 || dayOfWeek === 0);

        if (selectedDate < today || isWeekend) {
            dateInput.classList.add("is-invalid");
            showModal("Atenção", "Escolha uma data válida em um dia útil.");
        } else {
            dateInput.classList.remove("is-invalid");
            loadAvailableTimes();
        }
    }

    // Carregar horários válidos com base na data selecionada
    function loadAvailableTimes() {
        const timeSelect = document.getElementById("time");
        timeSelect.innerHTML = ""; // Limpa os horários

        const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
        times.forEach((time) => {
            const option = document.createElement("option");
            option.value = time;
            option.text = time;
            timeSelect.add(option);
        });
    }

    // Exibir o resumo do agendamento
    function showSummary() {
        if (validateStep(3)) {
            document.getElementById("summary-service").innerText = document.getElementById("service").selectedOptions[0].text;
            document.getElementById("summary-professional").innerText = document.getElementById("professional").selectedOptions[0].text;
            document.getElementById("summary-date").innerText = document.getElementById("date").value;
            document.getElementById("summary-time").innerText = document.getElementById("time").value;
            document.getElementById("summary-name").innerText = document.getElementById("name").value;
            document.getElementById("summary-email").innerText = document.getElementById("email").value;
            document.getElementById("summary-whatsapp").innerText = document.getElementById("whatsapp").value;
            document.getElementById("summary-notes").innerText = document.getElementById("notes").value;
            document.getElementById("summary-price").innerText = `R$ ${document.getElementById("service").selectedOptions[0].dataset.price},00`;

            document.querySelector(".form-step.active").classList.remove("active");
            document.getElementById("summary").classList.add("active");
        }
    }

    // Editar o agendamento
    function editForm() {
        document.getElementById("summary").classList.remove("active");
        document.getElementById("step3").classList.add("active");
        updateProgressBar(3);
    }

    // Função para exibir o modal
    function showModal(title, message) {
        const modalTitle = document.getElementById("modalTitle");
        const modalBody = document.getElementById("modalBody");
        modalTitle.textContent = title;
        modalBody.textContent = message;
        const modal = new bootstrap.Modal(document.getElementById("successModal"));
        modal.show();
    }

    // Função para exibir o modal de erro
    function showErrorModal(title, message) {
        const modalTitle = document.getElementById("modalTitle");
        const modalBody = document.getElementById("modalBody");
        const confirmButton = document.getElementById("confirmButton");
        const cancelButton = document.getElementById("cancelButton");

        modalTitle.textContent = title;
        modalBody.textContent = message;

        // Esconde os botões "Confirmar" e "Cancelar"
        confirmButton.classList.add("d-none");
        cancelButton.classList.add("d-none");

        // Exibe apenas o botão "Fechar"
        const modal = new bootstrap.Modal(document.getElementById("successModal"));
        modal.show();
    }

    // Função para finalizar o agendamento (exibir modal de confirmação)
    function finishBooking() {
        if (validateStep(3)) {
            const modalTitle = document.getElementById("modalTitle");
            const modalBody = document.getElementById("modalBody");
            const closedButton = document.getElementById("closedButton");
            const confirmButton = document.getElementById("confirmButton");
            const cancelButton = document.getElementById("cancelButton");

            modalTitle.textContent = "Confirmação de Agendamento";
            modalBody.textContent = "Deseja confirmar o agendamento?";
            closedButton.classList.add("d-none");
            confirmButton.classList.remove("d-none");
            cancelButton.classList.remove("d-none");

            const modal = new bootstrap.Modal(document.getElementById("successModal"));
            modal.show();
        }
    }

    // Confirmar o agendamento no modal
    function confirmBooking() {
        const closedButton = document.getElementById("closedButton");
        const confirmButton = document.getElementById("confirmButton");
        const cancelButton = document.getElementById("cancelButton");
        showModal("Sucesso!", "Agendamento confirmado!");
        closedButton.classList.remove("d-none");
        confirmButton.classList.add("d-none");
        cancelButton.classList.add("d-none");
        setTimeout(() => {
            window.location.reload(); // Redefine o formulário após confirmação
        }, 2000);
    }

    // Cancelar o agendamento no modal
    function cancelBooking() {
        const modal = bootstrap.Modal.getInstance(document.getElementById("successModal"));
        modal.hide();
    }

    // Atribuir funções ao escopo global para serem chamadas no HTML
    window.nextStep = nextStep;
    window.prevStep = prevStep;
    window.validateDate = validateDate;
    window.showSummary = showSummary;
    window.editForm = editForm;
    window.finishBooking = finishBooking;
    window.confirmBooking = confirmBooking;
    window.cancelBooking = cancelBooking;

    // Aplica a máscara no carregamento inicial, caso o campo esteja presente
    applyWhatsappMask();
});
