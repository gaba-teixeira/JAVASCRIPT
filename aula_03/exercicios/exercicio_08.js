const leia = require("readline-sync");

let codigoOperacao = leia.questionInt("Digite o codigo da operacao: ");
let saldoInicial = 1000.0;
let operacao;
let novoSaldo;
let saque;
let deposito;

switch (codigoOperacao) {
  case 1:
    operacao = "Saldo";
    console.log(
      `Operação: ${operacao} \n Saldo = ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(saldoInicial)}`
    );
    break;
  case 2:
    operacao = "Saque";
    let saque = leia.questionFloat("Digite o valor do saque: ");
    if (saque > saldoInicial) {
      console.log(`Operação: ${operacao} \n Saldo insuficiente`);
    } else {
      console.log(
        `Operação: ${operacao} \n Novo Saldo: ${new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(saldoInicial - saque)}`
      );
    }
    break;
  case 3:
    operacao = "Deposito";
    let deposito = leia.questionFloat("Digite o valor do deposito: ");
    novoSaldo = saldoInicial + deposito;
    console.log(
      `Operação: ${operacao} \n Novo Saldo: ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(novoSaldo)}`
    );
    break;
  default:
    console.log("Operacao invalida");
    process.exit(0);
}
