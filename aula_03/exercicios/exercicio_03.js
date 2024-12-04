const leia = require("readline-sync");
let nome = leia.question("Digite o seu nome e sobrenome: ");
let idade = leia.questionInt("Digite a sua idade: ");
let primeiraVezDoando = leia
  .question(
    "E sua primeira vez doando sangue? Responda S para sim e N para Nao "
  )
  .toUpperCase();
let confirmaPrimeiraVez;

primeiraVezDoando === "S"
  ? (confirmaPrimeiraVez = true)
  : (confirmaPrimeiraVez = false);

if (idade >= 18 && idade <= 60) {
  console.log(`${nome} está apta para doar sangue!
`);
} else if (idade > 60 && confirmaPrimeiraVez == true) {
  console.log(`${nome} não está apta para doar sangue!
`);
} else if (idade > 60 && confirmaPrimeiraVez == false) {
  console.log(`${nome} está apta para doar sangue!
`);
} else {
  console.log(`${nome} não está apta para doar sangue!
`);
}
