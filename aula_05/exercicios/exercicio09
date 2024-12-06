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

    console.table(matrizInteiros)

    console.log(`Elementos da Diagonal Principal: ${matrizInteiros[0][0]}, ${matrizInteiros[1][1]}, ${matrizInteiros[2][2]}`)
    console.log(
    `Elementos da Diagonal Principal: ${matrizInteiros[0][2]}, ${matrizInteiros[1][1]}, ${matrizInteiros[2][0]}`
    );
    let somaDiagonalPrincipal = matrizInteiros[0][0]  + matrizInteiros[1][1] + matrizInteiros[2][2]
    let somaDiagonalSecundaria = matrizInteiros[0][2] + matrizInteiros[1][1] + matrizInteiros[2][0]

    console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
    console.log(
    `Soma dos Elementos da Diagonal Secundario: ${somaDiagonalSecundaria}`
    );
