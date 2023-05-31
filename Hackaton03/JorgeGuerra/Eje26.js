// 26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
function calcularRestoCociente(dividendo, divisor) {

    let resto = dividendo;

    let cociente = 0;

 

    while (resto >= divisor) {

      resto -= divisor;

      cociente++;

    }

 

    return {

      resto: resto,

      cociente: cociente

    };

  }

  const resultado = calcularRestoCociente(40, 5);

console.log("Resto:", resultado.resto);

console.log("Cociente:", resultado.cociente);