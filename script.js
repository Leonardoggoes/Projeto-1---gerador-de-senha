let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#botao");
let sizePassword = document.querySelector("#valor");
let senha = document.querySelector("#senha");
let campoSenha = document.querySelector("#campo-senha");

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let sen = "";
    for(let i = 0, n = charSet.length; i<sliderElement.value; ++i){
        sen += charSet.charAt(Math.floor(Math.random()* n));
    }
    senha.innerHTML = sen;
    campoSenha.classList.remove("hide");
    novaSenha = sen;
}

function copiarSenha(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada");
}

