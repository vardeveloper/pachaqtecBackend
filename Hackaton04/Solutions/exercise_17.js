/**
 * 17. Eliminar elementos duplicados de un arreglo.
 */

function eliminarDuplicados(arreglo) {
    let arregloSinDuplicados = [];

    for (let i = 0; i < arreglo.length; i++) {
        if (arregloSinDuplicados.indexOf(arreglo[i]) === -1) {
            arregloSinDuplicados.push(arreglo[i]);
        }
    }

    return arregloSinDuplicados;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 2, 1, 3, 5];
let resultado = eliminarDuplicados(numeros);

console.log(resultado);
