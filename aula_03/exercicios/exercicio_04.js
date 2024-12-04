const leia = require("readline-sync");

let temColuna = leia
  .question("Digite se o animal e Vertebrado ou Invertebrado: ")
  .toLowerCase();

if (temColuna === "vertebrado") {
  let tipoAnimal = leia
    .question("Digite se o animal e uma Ave ou Mamifero: ")
    .toLowerCase();
  if (tipoAnimal === "ave") {
    let tipoDieta = leia
      .question("Digite se o animal e Carnivoro ou Onivoro: ")
      .toLowerCase();
    if (tipoDieta === "carnivoro") {
      console.log("Seu animal é uma Aguia");
    } else if (tipoDieta === "onivoro") {
      console.log("Seu animal é uma Pomba");
    }
  } else if (tipoAnimal === "mamifero") {
    let tipoDieta = leia
      .question("Digite se o animal e Herbivoro ou Onivoro: ")
      .toLowerCase();
    if (tipoDieta === "onivoro") {
      console.log("Seu animal é um Homem ");
    } else if (tipoDieta === "herbivoro") {
      console.log("Seu animal é uma Vaca ");
    }
  }
}
if (temColuna === "invertebrado") {
  let tipoAnimal = leia
    .question("Digite se o animal e um Inseto ou um Anelideo: ")
    .toLowerCase();
  if (tipoAnimal === "inseto") {
    let tipoDieta = leia
      .question("Digite se o animal e Herbivoro ou Hematofago: ")
      .toLowerCase();
    if (tipoDieta === "herbivoro") {
      console.log("Seu inseto é uma Lagarta");
    } else if (tipoDieta === "hematofago") {
      console.log("Seu inseto é uma Pulga");
    }
  }
  if (tipoAnimal === "anelideo") {
    let tipoDieta = leia
      .question("Digite se o animal e Onivoro ou Hematofago: ")
      .toLowerCase();
    if (tipoDieta === "onivoro") {
      console.log("Seu inseto é uma Minhoca");
    } else if (tipoDieta === "hematofago") {
      console.log("Seu inseto é uma Sanguesuga");
    }
  }
}
