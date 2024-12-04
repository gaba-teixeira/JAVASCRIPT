const leia = require("readline-sync");

let nome = leia.question("Digite o seu nome: ");
let codigoCargo = leia.questionInt("Digite o codigo do seu cargo: ");
let salario = leia.questionFloat("Digite o seu salario: ");
let porcentualReajuste;

let cargo;

switch (codigoCargo) {
  case 1:
    porcentualReajuste = 0.1;
    cargo = "Gerente";
    break;
  case 2:
    porcentualReajuste = 0.07;
    cargo = "Vendedor";
    break;
  case 3:
    porcentualReajuste = 0.09;
    cargo = "Supervisor";
    break;
  case 4:
    porcentualReajuste = 0.06;
    cargo = "Motorista";

    break;
  case 5:
    porcentualReajuste = 0.05;
    cargo = "Estoquista";

    break;
  case 6:
    porcentualReajuste = 0.08;
    cargo = "Tecnico de TI";

    break;
  default:
    console.log("Cargo invalida");
    process.exit(0);
}
let novoSalario = salario + salario * porcentualReajuste;

console.log(
  `Nome do Colaborador: ${nome} \n Cargo: ${cargo} \n Novo Salario: ${new Intl.NumberFormat(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ).format(novoSalario)}`
);
