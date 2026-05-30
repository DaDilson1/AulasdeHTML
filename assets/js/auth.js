// LÓGICA DO LOGIN
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    // Estas variáveis só existem aqui dentro!
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        console.log('Login submetido!');
        // Faca alguma coisa com os dados do formulario
    });
}

// LÓGICA DO CADASTRO (Registo)
// Lembra-te de mudar o ID no HTML para 'registerForm' como combinámos!
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    // Como estamos noutro bloco, podemos reutilizar os nomes sem dar erro!
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        console.log('Cadastro submetido!');
        // Faca alguma coisa com os dados do formulario
    });
}