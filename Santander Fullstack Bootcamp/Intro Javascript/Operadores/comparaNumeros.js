function comparaNumero(num1, num2) {
  if (!num1 || !num2) {    
    return 'Defina dois números';
  }

  if (num1 !== num2) {
    return 'Informe somente números';
  }
  
  igualdade = num1 === num2 ? 'são iguais' : 'não são iguais';
  soma = num1 + num2;

  intervalo1 = soma >= 10 ? 'é maior ou igual 10' : 'é menor que 10';
  intervalo2 = soma >= 20 ? 'é maior ou igual 20' : 'é menor que 20';

  return `Os números ${num1} e ${num2} ${igualdade}. Sua soma ${intervalo1} e ${intervalo2}`;
}

console.log(comparaNumero(null,11));
