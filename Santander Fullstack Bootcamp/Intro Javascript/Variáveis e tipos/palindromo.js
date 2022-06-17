//Solução 1
function verificaPalindromo(string) {
  if (!string) {
    return;
  }

  return string.split("").reverse().join() === string;  
}

//Solução 2
function verificaPalindromo2(string) {
  if (!string) {
    return "string não existe";
  }

  for (let i = 0; i < string.length / 2; i++) {
    const element = string[i];
    if(element !== string[string.length - 1 - i]) {
      return "String não é palíndromo";
    }
    return "String é palíndromo";
  }
}