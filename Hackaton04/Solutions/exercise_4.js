/**
 * 4. Desarrollar una función que encuentre el número más frecuente en un arreglo de números.
 */

function obtenerNumeroMasFrecuente(arreglo) {
    if (arreglo.length === 0) {
        return null; // Si el arreglo está vacío, retornamos null
    }

    let contador = {}; // Objeto para contar la frecuencia de cada número

    // Iteramos sobre el arreglo y contamos la frecuencia de cada número
    for (let i = 0; i < arreglo.length; i++) {
        let numero = arreglo[i];
        if (contador[numero]) {
            contador[numero]++;
        } else {
            contador[numero] = 1;
        }
    }

    let numeroMasFrecuente;
    let maxFrecuencia = 0;

    // Iteramos sobre las propiedades del objeto contador para encontrar el número más frecuente
    for (let numero in contador) {
        if (contador[numero] > maxFrecuencia) {
            numeroMasFrecuente = numero;
            maxFrecuencia = contador[numero];
        }
    }

    return parseInt(numeroMasFrecuente);
}

// Ejemplo de uso
let numeros = [5, 10, 2, 8, 5, 3, 10, 5, 8];
let resultado = obtenerNumeroMasFrecuente(numeros);

console.log(resultado);
