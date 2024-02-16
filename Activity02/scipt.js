var nomeGlobal;
var mensagemGlobal;
var = emailGlobal;

function conferirMensagemWhatsApp(){
var nome = document.getElementById("nome").value;
var mensagem = document.getElementById("mensagem").value;
var email = document.getElementById("email").value

nomeGlobal = nome;
mensagemGlobal = mensagem;
emailGlobal = email;

document.getElementById("confNome").textContent = nome;
document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541999999999"

    var linkWhatsApp = "https://wa.me/" +
     numeroTelefone + 
     "?text=Nome: " + 
     nomeGlobal +
     " - " +
     mensagemGlobal;

    window.open(linkWhatsApp, "_blank");
}
