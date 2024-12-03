
//Exercicio 01

/*const leia = require('readline-sync')
let salario = leia.questionFloat('Digite o seu salario: ')
let abono = leia.questionFloat('Digite o abono: ')
let novoSalario = salario + abono 
console.log(`Seu novo salário é: ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(novoSalario)}`)

  //Exercicio 02

  const leia = require("readline-sync");
  let nota1 = leia.questionFloat('Digite a nota 1: ')
  let nota2 = leia.questionFloat("Digite a nota 2: ");
  let nota3 = leia.questionFloat("Digite a nota 3: ");
  let nota4 = leia.questionFloat("Digite a nota 4: ");
  let media = (nota1 + nota2 + nota3 + nota4) / 4
  console.log(`Sua média é: ${media.toFixed(1)}`)



//Exercio 3
const leia = require("readline-sync");
let salarioBruto = leia.questionFloat('Entre o valor do seu salário: ')
let adicionalNoturno = leia.questionFloat("Entre o valor do seu adicional noturno: ");
let horasExtras = leia.questionFloat("Entre o valor da sua hora extra: ");
let desconto = leia.questionFloat("Entre o valor a ser descontado: ");
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto
console.log(`Seu salário liquido é  ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(salarioLiquido)}`)*/

//Exercicio 04

const leia = require("readline-sync");
let n1 = leia.questionFloat('Digite valor para n1: ')
let n2 = leia.questionFloat("Digite valor para n2: ");
let n3 = leia.questionFloat("Digite valor para n3: ");
let n4 = leia.questionFloat("Digite valor para n4: ");
let diferenca = (n1 * n2) - (n3 * n4)
console.log(`A diferença entre os valores é: ${diferenca}`)
