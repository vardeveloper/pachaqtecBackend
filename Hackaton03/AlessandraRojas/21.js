// calcular el factorial de un número.

function calcularFactorial(numero) {
    let factorial = 1;
  
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  