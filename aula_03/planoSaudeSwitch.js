const leia = require("readline-sync");
let nome = leia.question("Digite o seu nome: \n ");
console.log(
  "Faixa Etárias: \n 1 - Idade entre 0 a 10 anos \n 2 - Idade entre 11 a 29 anos \n 3 - Idade entre 30 a 45 anos \n 4 - Idade entre 46 a 59 anos \n 5 - Idade entre 60 a 65 anos \n 6 - Idade maior que 65 anos \n"
);

let faixaEtaria = leia.questionInt("Digite sua faixa etária: \n");
let valor;

switch (faixaEtaria) {
  case 1:
    valor = 100.0;
    break;
  case 2:
    valor = 200.0;
    break;
  case 3:
    valor = 300.0;
    break;
  case 4:
    valor = 500.0;
    break;
  case 5:
    valor = 600.0;
    break;
  case 6:
    valor = 1000.0;
    break;
    default: console.log('Idade invalida')
     process.exit(0);
}

console.log(`O valor do plano de saude do(a) ${nome} é R$${valor.toFixed(2)}`);
