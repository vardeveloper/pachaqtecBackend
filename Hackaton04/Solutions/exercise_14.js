/**
 * 14. Encontrar la suma de los números pares en un arreglo.
 */

function sumaNumerosPares(arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            suma += arreglo[i];
        }
    }

    return suma;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = sumaNumerosPares(numeros);

console.log(resultado);
