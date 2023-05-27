function sumaNumerosImpares(n) {
    let suma = 0;
  
    for (let i = 1; i <= n; i += 2) {
      suma += i;
    }
  
    return suma;
  }
  const numero = 10;
  const resultado = sumaNumerosImpares(numero);
  console.log("La suma de los números impares menores o iguales a", numero, "es:", resultado);
  
  