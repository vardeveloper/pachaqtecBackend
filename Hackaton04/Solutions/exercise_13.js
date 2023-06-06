/**
 * 13. Generar un número aleatorio entre un rango dado.
 */

function generarNumeroAleatorio(minimo, maximo) {
    let numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(numeroAleatorio);
}

// Ejemplo de uso
let min = 1;
let max = 100;
let resultado = generarNumeroAleatorio(min, max);

console.log(resultado);
