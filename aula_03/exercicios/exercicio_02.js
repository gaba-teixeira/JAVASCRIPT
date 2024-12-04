const leia = require("readline-sync");
let numero = leia.questionInt('Digite um numero: ')
resto = numero % 2

if (resto === 0 && numero >= 0){
    console.log(`O numero ${numero} é par e positivo!`);
} else if ( resto === 0 && numero <= 0) {
    console.log(`O numero ${numero} é par e negativo!`);

} else if (resto != 0 && numero >= 0){
    console.log(`O numero ${numero} é impar e positivo!`);

}else {
    console.log(`O numero ${numero} é impar e negativo!`);

}

