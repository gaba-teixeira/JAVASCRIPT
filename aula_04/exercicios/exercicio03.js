// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

const leia = require("readline-sync");
let contadorMenor21 = 0;
let contadorMaior50 = 0;
let idade = leia.questionInt("Digite a idade: ");

while (idade >= 0) {
  if (idade < 21) {
      contadorMenor21++;}
  if (idade > 50){ contadorMaior50++;}
  idade = leia.questionInt("Digite a idade: ");
}
console.log(`\n Total de pessoas menores de 21 anos: ${contadorMenor21} \n

Total de pessoas maiores de 50 anos: ${contadorMaior50}
`);
