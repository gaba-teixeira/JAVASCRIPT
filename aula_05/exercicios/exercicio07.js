const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroDesejaEncontrar = leia.questionInt(
  "Digite o número que você deseja encontrar: "
);
let validaNumero = false;
for (i = 0; i < 10; i++) {
  if (vetor[i] === numeroDesejaEncontrar) {
    console.log(
      `O número ${numeroDesejaEncontrar} está localizado na posição: ${vetor.indexOf(
        numeroDesejaEncontrar
      )}`
    );
    validaNumero = true;
  }
}
if (!validaNumero) {
  console.log(`O número ${numeroDesejaEncontrar} não foi encontrado!`);
}
