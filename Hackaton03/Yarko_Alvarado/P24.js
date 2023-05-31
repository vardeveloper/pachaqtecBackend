function sumaNumerosPares() {
    let suma = 0;
  
    for (let i = 2; i <= 1000; i += 2) {
      suma += i;
    }
  
    return suma;
  }
  
  const resultado = sumaNumerosPares();
  console.log("La suma de los números pares hasta 1000 es:", resultado);