const leia = require("readline-sync");
let vetorStrings = [
  "Boxer",
  "Pastor Alemão",
  "Pinscher",
  "Husky Siberiano",
  "Corgi",
];

let vetorInteiros = [1, 4, 5, 7, 6, 9, 2, 3, 8, 10];

// for (let i = 0; i < vetorStrings.length; i++) {
//   console.log(vetorStrings[i]);
// }

// for (let i = 0; i < vetorInteiros.length; i++) {
//   vetorInteiros[i] = leia.questionInt("Digite um valor: ");
// }


console.table(vetorStrings.sort());
console.table(vetorInteiros.sort((a,b) => a -b));
