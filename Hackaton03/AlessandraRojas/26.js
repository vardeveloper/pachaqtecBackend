// Algoritmo para calcular el resto y cociente por medio de restas sucesivas

function calcularRestoCociente(dividendo, divisor) {
    let cociente = 0;
    while (dividendo >= divisor) {
      dividendo -= divisor;
      cociente++;
    }
    const resto = dividendo;
    return { cociente, resto };
  }
  

  