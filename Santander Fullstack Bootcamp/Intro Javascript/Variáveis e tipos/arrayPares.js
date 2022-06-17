function substituiPares(array) {  
  if (!array) return "Array vazio";  
  if (!array.length) return "Array vazio";

  for (let i = 0; i < array.length; i++) {    
    if (array[i] === 0) {
      console.log('Já é zero!');
    }
    else if (array[i] % 2 === 0) {
      array[i] = 0;
      console.log(`Substituindo ${array[i]} por 0...`);
    }    
  }
  return array;
}

let arr = [1, 3, 4, 20, 50, 67, 123, 256];
console.log(substituiPares(arr));