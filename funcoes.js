function redir(){
    window.location.href = "https://emersonianb.github.io/CadastroProles/formulario.html"
}

function redir_ent(){
    window.location.href = "http://127.0.0.1:3000/entrar.html"
}

function redir_conc(){
    window.location.href = "file:///C:/Users/emers/Documents/Cadastro-Proles-main/Cadastro-Proles-main/inicial.html"
}

var radio = document.querySelector('.manual-bnt1')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if (cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}