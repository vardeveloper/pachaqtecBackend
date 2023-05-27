function calcularMediaNumeros() {
    let suma = 0;
    let cantidad = 0;
  
    while (true) {
      const numero = parseFloat(prompt("Ingresa un número positivo (ingresa un número negativo para terminar):"));
  
      if (numero < 0) {
        break;
      }
  
      suma += numero;
      cantidad++;
    }
  
    if (cantidad === 0) {
      return 0;
    }
  
    const media = suma / cantidad;
    return media;
  }
  const resultado = calcularMediaNumeros();
  console.log("La media de los números ingresados es:", resultado);
  