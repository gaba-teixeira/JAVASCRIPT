// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa.
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const leia = require("readline-sync");

let n1 = leia.questionInt("Digite primeiro numero: ");
let n2 = leia.questionInt("Digite segundo numero: ");
let resultado1, resultado2;
if (n1 < n2) {
  for (i = n1; i < n2; i++) {
    resultado1 = i % 3;
    resultado2 = i % 5;
    if (resultado1 === 0 && resultado2 === 0)
      console.log(`${i} é multiplo de 3 e 5`);
  }
} else {
  console.log("Intervalo inválido!");
}
