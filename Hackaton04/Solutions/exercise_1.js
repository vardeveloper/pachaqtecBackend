/**
 * Desarrollar una función en Javascript que genere una secuencia de Fibonacci hasta un número dado.
 */

function fibonacciSecuencia(hasta) {
    let secuencia = [0, 1]; // Inicializamos la secuencia con los primeros dos números: 0 y 1

    while (secuencia[secuencia.length - 1] < hasta) {
        let siguienteNum = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
        secuencia.push(siguienteNum);
    }

    return secuencia;
}

// Ejemplo de uso
let numeroDado = 100;
let secuenciaFibonacci = fibonacciSecuencia(numeroDado);

console.log(secuenciaFibonacci);
