const form=
document.getElementById('loginForm');
    const emailnput=
    document.getElementById('email');
    const passwordinput=
    document.getElementById('password');
    const  emailError=
    document.getElementById('emailError');
    const passwordError=
    document.getElementById('passwordError');

    form.addEventListener('submit',
        function(event){
        event.preventDefault();

        let valid = true;

        //validação do email
        if(!emailInput.validity.vadio){
            emailError.style.display='block';
            valid=false;
        }else{
            emailError.style.display='none';
        }

        //validação da senha
        if(passwordInput.validity.valid){
            passwordError.style.display='none';
        }
        
        if(!valid){
            alert('login efetuado com sucesso!');
            form.reset();
        }
        });