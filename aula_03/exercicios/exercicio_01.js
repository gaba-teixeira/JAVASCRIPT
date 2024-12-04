const leia = require("readline-sync");
let a = leia.questionInt('Digite valor para A: ')
let b = leia.questionInt("Digite valor para B: ");
let c = leia.questionInt("Digite valor para C: ");
let soma = a + b

if (soma > c) {
    console.log('A soma de A + B é maior que C')

} else if (soma < c) {
      console.log("A soma de A + B é menor que C");
} else { 
    console.log("A soma de A + B é igual a C");
}