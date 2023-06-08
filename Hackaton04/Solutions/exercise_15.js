/**
 * 15. Convertir un número decimal a binario.
 */

function decimalABinario(decimal) {
    if (decimal === 0) {
        return '0'; // Caso especial para el decimal igual a cero
    }

    let binario = '';
    while (decimal > 0) {
        let residuo = decimal % 2; // Obtenemos el residuo de dividir el decimal entre 2
        binario = residuo + binario; // Concatenamos el residuo al inicio del número binario
        decimal = Math.floor(decimal / 2); // Actualizamos el valor del decimal dividiéndolo entre 2 y redondeando hacia abajo
    }

    return binario;
}

// Ejemplo de uso
let numero = 42;
let resultado = decimalABinario(numero);

console.log(resultado);
