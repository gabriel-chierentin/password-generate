let sliderElement = document.querySelector("#slider");
let sliderSenha = document.querySelector("#sliderSenha");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let tipoSenha = document.querySelector("#tipoSenha");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let passText = document.querySelector("#passText");

let veryWeak = 'abcdefghijklmnopqrstuvwxyz';
let weak = 'abcdefghijklmnopqrstuvwxyz0123456789';
let numbers = '0123456789';
let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let symbols = '!@#$%&*';
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
let charset2 = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

let novaSenha = '';
var funcSelection = 'muitoFraca';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

sliderSenha.oninput = function() {
    tipoSenha.innerHTML = this.value;
    if(this.value == '1'){
        tipoSenha.innerHTML = 'Força da senha: Muito fraca';
        funcSelection = 'muitoFraca';
    } else if (this.value == '2'){
        tipoSenha.innerHTML = 'Força da senha: Fraca';
        funcSelection = 'fraca';
    } else if(this.value == '3') {
        tipoSenha.innerHTML = 'Força da senha: Média';
        funcSelection = 'media';
    } else if(this.value == '4') {
        tipoSenha.innerHTML = 'Força da senha: Forte';
        funcSelection = 'forte';
    }
}    

function generatePassword(){
    let pass = '';
    
    if(funcSelection == 'muitoFraca'){
        for(let i = 0, n = veryWeak.length; i < sliderElement.value; ++i){
                pass += veryWeak.charAt(Math.floor(Math.random() * n));
        } 

        passText.innerHTML = `A senha ${"muito fraca"} contém apenas letras minúsculas.`

    } else if (funcSelection == 'fraca'){
        for(let i = 0, n = weak.length; i < sliderElement.value; ++i){
            pass += weak.charAt(Math.floor(Math.random() * n));
        } 

        passText.innerHTML = 'A senha fraca pode conter letras minúsculas e números.'

    } else if (funcSelection == 'media'){
        for(let i = 0, n = charset2.length; i < sliderElement.value; ++i){
            pass += charset2.charAt(Math.floor(Math.random() * n));
        } 

        passText.innerHTML = 'A senha de força média pode conter letras minúsuclas, símbolos e números. '

    } else if (funcSelection == 'forte'){
        let nCharset = charset.length;
        let nCapitalLetters = capitalLetter.length;
        let nSymbol = symbols.length;
        let nVWeak = veryWeak.length;
        let nNumb = numbers.length;
        
        let char1 = capitalLetter.charAt(Math.floor(Math.random() * nCapitalLetters))
        let char2 = symbols.charAt(Math.floor(Math.random() * nSymbol))
        let char3 = veryWeak.charAt(Math.floor(Math.random() * nVWeak))
        let char4 = numbers.charAt(Math.floor(Math.random() * nNumb))
        
        pass += `${char1}${char2}${char3}${char4}`;
        
        for(let i = 4; i < sliderElement.value; ++i){
            pass += charset.charAt(Math.floor(Math.random() * nCharset));
        }
        
        passText.innerHTML = 'A senha forte contém, pelo menos: <br> 1 letra maiúscula<br>1 símbolo<br>1 letra minúscula<br>1 número';
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    sliderSenha.oninput();
}

