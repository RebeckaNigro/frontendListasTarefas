// Funções de animação existentes
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Animações de troca entre login e cadastro
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Apenas redireciona para a página menuTarefas.html
document.getElementById("btnEntrar").addEventListener("click", function() {
    window.location.href = "menuTarefas.html"; // Redireciona diretamente
});

// Se você ainda quiser manter a lógica de validação de login, pode adicionar aqui a API depois.

// Função de login
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Obtendo valores dos inputs
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    // Objeto de login
    const loginData = {
        email: email,
        senha: senha
    };

    const apiUrl = "https://6849-2804-d59-8d00-7800-78a4-e207-1a8-e78c.ngrok-free.app "; // Link público gerado pelo ngrok

    try {
        // Requisição à API usando o link público para validar login
        const response = await fetch(`${apiUrl}/api/usuarios/validar-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            alert("Login bem-sucedido!");
            // Redireciona para o menu de tarefas
            window.location.href = "menuTarefas.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro ao tentar fazer login. Verifique sua conexão e tente novamente.");
    }
});
