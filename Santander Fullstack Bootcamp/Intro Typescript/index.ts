//Importar bibliotecas


function soma(a: number, b: number) {
  return a + b;  
}
//interfaces => contrato para implementar as suas classes

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;  
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio'| 'grande'
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: "terrestre", 
  domestico: false,
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: "terrestre",
  domestico: false,
  visaoNoturna: true,  
}

// types => estrutura de dados para parâmentros de classe ou função. Possibilita 
// usar mais de uma interface
type iDomestico = IFelino | ICanino;

const animalDomestico: iDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: "médio",
  tipo: "terrestre",
  visaoNoturna: false
}

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement
  console.log(i.value);
})

//Generic types
//T = identiifca item generico
//exemplo
function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1,2,3], 0);

//condicionais a partir de parâmetros
interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo?: 'gerente' | 'coordenador' | 'supervisor';
// ? = define dado como opcional
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    //rediccionar para área de administração
  }
  // redirecionar para a área de usuário
}

