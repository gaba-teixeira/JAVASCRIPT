let nome = "Gabriela";
let profissao = "Pessoa Desenvolvedora";
let salario = 3500.4;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("\nProfissao: ", profissao);

console.log(
  "Salario Liquido: ",
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    salario + bonus * salario
  )
);
console.log(
  `O Salario Bruto do coloborador ${nome} é ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(salario)}`
);
