/**
 * 19. Encontrar el número más pequeño y el número más grande en una cadena de texto.
 */

function encontrarMinMax(cadena) {
    let numeros = cadena.match(/\d+(\.\d+)?/g);

    if (!numeros || numeros.length === 0) {
        return null; // No se encontraron números en la cadena
    }

    let min = +numeros[0];
    let max = +numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        let numero = +numeros[i];
        if (numero < min) {
            min = numero;
        }
        if (numero > max) {
            max = numero;
        }
    }

    return {
        minimo: min,
        maximo: max
    };
}

// Ejemplo de uso
let cadena = "Los números en la cadena son: 5, 2.5, 10, -3, 8";
let resultado = encontrarMinMax(cadena);

console.log(resultado);
