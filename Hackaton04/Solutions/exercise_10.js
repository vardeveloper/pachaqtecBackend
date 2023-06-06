/**
 * 10. Calcular la media de un arreglo de números.
 */

function calcularMedia(arreglo) {
    if (arreglo.length === 0) {
        return null; // Si el arreglo está vacío, retornamos null
    }

    let suma = arreglo.reduce(function (a, b) {
        return a + b;
    }, 0);

    let media = suma / arreglo.length;
    return media;
}

// Ejemplo de uso
let numeros = [5, 10, 2, 8, 3];
let resultado = calcularMedia(numeros);

console.log(resultado);
