// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:

const leia = require("readline-sync");
let n1 = leia.questionInt("Digite o 1 numero: ");
let n2 = leia.questionInt("Digite o 2 numero: ");
let n3 = leia.questionInt("Digite o 3 numero: ");
let n4 = leia.questionInt("Digite o 4 numero: ");
let n5 = leia.questionInt("Digite o 5 numero: ");
let n6 = leia.questionInt("Digite o 6 numero: ");
let n7 = leia.questionInt("Digite o 7 numero: ");
let n8 = leia.questionInt("Digite o 8 numero: ");
let n9 = leia.questionInt("Digite o 9 numero: ");
let n10 = leia.questionInt("Digite o 10 numero: ");
let contadorPar = 0;
let contadorImpar = 0;

for (i = 1; i <= 10; i++) {
  numero = eval("n" + i);
  if (numero % 2 === 0) {
    contadorPar++;
  } else {
    contadorImpar++;
  }
}
console.log(` \n Total de números pares: ${contadorPar} \n
Total de números ímpares: ${contadorImpar}`);
