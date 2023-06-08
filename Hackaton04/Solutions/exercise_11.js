/**
 * 11. Verificar si un año dado es bisiesto.
 */

function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true; // El año es divisible por 4 y no es divisible por 100, o es divisible por 400 (es bisiesto)
    } else {
        return false; // El año no es bisiesto
    }
}

// Ejemplo de uso
let year = 2024;
let resultado = esBisiesto(year);

console.log(resultado);
