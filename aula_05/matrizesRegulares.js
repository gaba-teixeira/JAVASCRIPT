const leia = require("readline-sync");

//Declarar linhas da matriz     
let matrizInteiros = new Array(3);

//Declarar colunas da matriz
for (let indice = 0; indice < matrizInteiros.length; indice++) {
  matrizInteiros[indice] = Array(3);
}

//Percorrer e prencher a matriz com dados
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (
    let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
    matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ");
  }
}

//Vizualizar a tabela
console.table(matrizInteiros);
