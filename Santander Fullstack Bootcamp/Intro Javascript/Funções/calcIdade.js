const pessoa1 = {
  nome: "Maria",
  idade: 30
};

const pessoa2 = {
  nome: "Carla",
  idade: 26
};

const animal = {
  nome: "Fiona",
  idade: 5,
  raca: "Pug"
};


function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} 
          anos de idade.`;
};

console.log(calculaIdade.call(pessoa2, 30));
// Resultado: Daqui a 30 anos, Carla terá 56 anos de idade.

console.log(calculaIdade.apply(pessoa1, [60]));
// Resultado: Daqui a 60 anos, Carla terá 90 anos de idade.