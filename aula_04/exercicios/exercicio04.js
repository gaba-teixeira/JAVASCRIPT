const leia = require("readline-sync");

let devBackend = 0;
let mulheresFrontend = 0;
let homensMaiores40 = 0;
let naoBinariosFullstack = 0;
let totalPessoas = 0;
let somaIdade =0;
let continua = "S";

while (continua === "S") {
  let idade = leia.questionInt("Digite a idade: ");
  let identidadeDeGenero = leia.questionInt(
    "Digite o numero correspondente a sua identidade de genero:\n 1 - Mulher Cis \n 2 - Homem Cis\n 3 - Nao Binario \n 4 - Mulher Trans \n 5 - Homem Trans \n 6 - Outros: \n"
  );
  let pessoaDesenvolvedora = leia.questionInt(
    "Digite o numero correspondente a seu cargo:\n 1 - Backend \n 2 - Frontend \n 3 - Mobile \n 4 - FullStack \n"
  );

  totalPessoas++;
  somaIdade += idade;

  if (pessoaDesenvolvedora === 1) {
    devBackend++;
  } else if (
    identidadeDeGenero === 1 ||
    (identidadeDeGenero === 4 && pessoaDesenvolvedora === 2)
  ) {
    mulheresFrontend++;
  } else if (
    identidadeDeGenero === 2 ||
    (identidadeDeGenero === 5 && idade > 40 && pessoaDesenvolvedora === 3)
  ) {
    homensMaiores40++;
  } else if (
    identidadeDeGenero === 3 &&
    idade < 30 &&
    pessoaDesenvolvedora === 4
  ) {
    naoBinariosFullstack++;
  }

  continua = leia.question("Deseja continuar? (S/N): ").toUpperCase();
}

console.log(
  `Número de pessoas desenvolvedoras Backend: ${devBackend}
`
);
console.log(
  `O número de Mulheres Cis e Trans desenvolvedoras Frontend :${mulheresFrontend}`
);
console.log(
  `O número de Homens Cis e Trans desenvolvedoras Mobile, maiores de 40: ${homensMaiores40}`
);
console.log(
  `O número de Nao Binarios desenvolvedoras FullStack, menores de 30: ${naoBinariosFullstack}`
);
console.log(`Número de pessoas desenvolvedoras total:  ${totalPessoas}
`);
console.log(
  `A média de idade das pessoas que responderam à pesquisa: ${
    somaIdade / totalPessoas
  }`
);
