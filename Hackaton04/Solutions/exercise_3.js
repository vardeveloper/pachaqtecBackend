/**
 * Encontrar el número más grande en un arreglo.
 */

function obtenerNumeroMasGrande(arreglo) {
    if (arreglo.length === 0) {
        return null; // Si el arreglo está vacío, retornamos null
    }

    let numeroMasGrande = arreglo[0]; // Asignamos el primer elemento como el número más grande

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMasGrande) {
            numeroMasGrande = arreglo[i]; // Si encontramos un número mayor, lo asignamos como el número más grande
        }
    }

    return numeroMasGrande;
}

// Ejemplo de uso
let numeros = [5, 10, 2, 8, 3];
let resultado = obtenerNumeroMasGrande(numeros);

console.log(resultado);
