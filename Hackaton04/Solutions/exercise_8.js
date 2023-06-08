/**
 * 8. Ordenar un arreglo de números de forma ascendente.
 */

function ordenarAscendente(arreglo) {
    return arreglo.sort(function (a, b) {
        return a - b;
    });
}

// Ejemplo de uso
let numeros = [5, 2, 8, 1, 3, 10];
let resultado = ordenarAscendente(numeros);

console.log(resultado);
