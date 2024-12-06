const leia = require("readline-sync");
let somaNumero = 0;
do{
var numero = leia.questionInt("Digite um numero: ");
if (numero > 0)
somaNumero+= numero
} while(numero != 0);

console.log(`A soma dos números positivos é: ${somaNumero}`);
