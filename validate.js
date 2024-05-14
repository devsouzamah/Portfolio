const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const mensagemTextarea = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value ===""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o email está preenchido
    if (emailInput.value ===""){
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se o assunto está preenchido
    if (assuntoInput.value ===""){
        alert("Por favor, informe qual é o assunto");
        return;
    }
    
    // Verifica se a mensagem está preenchida
    if (mensagemTextarea.value ===""){
        alert("Por favor, escreva uma mensagem");
        return;
    }

    //Se todos os campos estiverem preenchidos, envie o form
    form.submit();
});