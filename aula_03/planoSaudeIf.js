const leia = require("readline-sync");
let nome = leia.question("Digite o seu nome: \n ");
let idade = leia.questionInt("Digite sua idade: \n");
let valor;

if (idade < 0) {
  console.log("Idade Invalida");
     process.exit(0);
} else if (idade >= 0 && idade <= 10) {
  valor = 100.0;
} else if (idade > 10 && idade <= 29) {
  valor = 200.0;
} else if (idade > 29 && idade <= 49) {
  valor = 300.0;
} else if (idade > 49 && idade <= 59) {
  valor = 500.0;
} else if (idade > 59 && idade <= 65) {
  valor = 600.0;
} else {
  valor = 1000.0;
}

console.log(`O valor do plano de saude do(a) ${nome} é R$${valor.toFixed(2)}`);
