const leia = require("readline-sync");
console.log("\n Codigo do Produto ------- Produto---------- Preço \n");
console.log("      1  ---------------- Cachorro-Quente---R$10.00 ");
console.log("      2  ---------------- X-Salada---------R$15.00 ");
console.log("      3  ---------------- X=Bacon----------R$18.00 ");
console.log("      4  ---------------- Bauru------------R$12.00 ");
console.log("      5  ---------------- Refrigerante------R$8.00 ");
console.log("      6  ---------------- Suco de Laranja---R$13.00 ");

let produto = leia.questionInt("Digite o codigo do seu produto: ");
let quantidade = leia.questionInt("Informe a quantidade desejada: ");
let valor;

switch (produto) {
  case 1:
    produto = "Cachorro-quente";
    valor = 10.0;
    break;
  case 2:
    produto = "X-Salada";
    valor = 15.0;
    break;
  case 3:
    produto = "X-Bacon";
    valor = 18.0;
    break;
  case 4:
    produto = "Bauru";
    valor = 12.0;
    break;
  case 5:
    produto = "Refrigerante";
    valor = 8.0;
    break;
  case 6:
    produto = "Suco de Laranja";
    valor = 13.0;
    break;
  default:
    console.log("Codigo invalida");
    process.exit(0);
}
let valorTotal = valor * quantidade;
console.log(`Seu produto: ${produto} e o valor total é R$${valorTotal}`);
