const leia = require("readline-sync");

//Dados usuarios
const usuario = "user@gmail.com";
const senha = "user1234";
const isAdmin = false;
const isGerente = true;
const isBlock = true;

console.log("Tela de Login");

let usuarioLogin = leia.question("\nDigite seu usuario: ");
let senhaUsuario = leia.question("\nDigite sua senha: ", {
  hideEchoBack: true,
});

if ( usuarioLogin === usuario && senhaUsuario === senha){
    var message = 'Seja bem vinde'
}else {
    var message = 'Acesso Negado'
}

console.log(message)

if (isBlock) {
    console.log("Usuario liberado")
}else {
    console.log("Usuario Inativo")
}

if (isAdmin || isGerente)
    console.log("Acesso ao portal admin liberado")