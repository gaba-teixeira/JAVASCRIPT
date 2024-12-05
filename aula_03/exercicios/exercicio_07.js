const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite primeiro numero: ");
let n2 = leia.questionFloat("Digite segundo numero: ");
let codigo = leia.questionInt(
  "Digite o codigo da operacao: \n 1 - SOMA \n 2 - SUBTRACAO \n 3 - MULTIPLICACAO \n 4 - MULTIPLICACAO \n  "
);
let resultado;
let operador;

switch (codigo) {
  case 1:
    operador = "+";
    resultado = n1 + n2;
    break;
  case 2:
    operador = "-";
    resultado = n1 - n2;
    break;
  case 3:
    operador = "*";
    resultado = n1 * n2;
    break;
  case 4:
    operador = "/";
    resultado = n1 / n2;
    break;
  default:
    console.log("Operacao invalida");
    process.exit(0);
}
console.log(`${n1} ${operador} ${n2} = ${resultado}`);