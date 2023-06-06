//Desarrollar una función que genere una secuencia de Fibonacci hasta un número dado.

function fibonacci(n) {
    let sequencia = [];
    let a = 0;
    let b = 1;
  
    while (a <= n) {
      sequencia.push(a);
      let temp = a;
        a = b;
        b = temp + b;
    }
  
    return sequencia;
  }