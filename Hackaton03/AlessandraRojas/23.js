//Suma de numeros impares menores o iguales a n

function calcularSumaImpares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        suma += i;
      }
    }
    return suma;
  }
  