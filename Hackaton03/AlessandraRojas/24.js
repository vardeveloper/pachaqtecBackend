//suma de todos los números pares hasta el 1000.

function calcularSumaPares() {
    let suma = 0;
    for (let i = 1; i <= 1000; i++) {
      if (i % 2 === 0) {
        suma += i;
      }
    }
    return suma;
  }
  