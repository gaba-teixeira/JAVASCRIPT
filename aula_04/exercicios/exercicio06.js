const leia = require("readline-sync");
let somaNumero = 0;
let totalNumero = 0;
do {
  var numero = leia.questionInt("Digite um numero: ");
  if (numero % 3 === 0) {
    somaNumero += numero;
    totalNumero++;
  }
} while (numero != 0);

console.log(
  `A média de todos os números múltiplos de 3 é: ${somaNumero / totalNumero}`
);
