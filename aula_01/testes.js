const leia = require("readline-sync");
let n1 = leia.questionInt("Digite primeiro valor: ");
let n2 = leia.questionInt("Digite segundo valor: ");

console.log("A variavel N1 possui o valor: ", n1);
console.log("A variavel N1 possui o valor: ", n2);
console.log("A soma dos dois valores é: ", n1 + n2);
console.log("A subtração dos dois valores é: ", n1 - n2);
console.log("A multiplicação dos dois valores é: ", n1 * n2);
console.log("A divisão dos dois valores é: ", n1 / n2);
console.log("A potenciação dos dois valores é: ", Math.pow(n1, n2));
console.log("A raiz quadrada do primeiro valor é: ", Math.sqrt(n1));


