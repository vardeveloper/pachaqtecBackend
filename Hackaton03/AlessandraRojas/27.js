//determinar la media de una lista indefinida de números positivos (finaliza al ingresar un número negativo)

function calcularMedia() {
    let suma = 0;
    let i = 0;
    let numero = parseInt(prompt('Ingresa un número positivo (ingresa un número negativo para terminar):'));
    
    while (numero >= 0) {
      suma += numero;
      i++;
      numero = parseInt(prompt('Ingresa otro número positivo (ingresa un número negativo para terminar):'));
    }
  
    if (i === 0) {
      return 0;
    } else {
      return suma / contador;
    }
  }
  