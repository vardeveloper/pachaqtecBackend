/**
 * 6. Calcular la suma de los dígitos de un número.
 */

function sumaDigitos(numero) {
    let suma = 0;
    let numeroAbsoluto = Math.abs(numero); // Tomamos el valor absoluto del número para asegurarnos de trabajar con valores positivos

    while (numeroAbsoluto > 0) {
        let digito = numeroAbsoluto % 10; // Obtenemos el último dígito del número
        suma += digito; // Sumamos el dígito a la suma
        numeroAbsoluto = Math.floor(numeroAbsoluto / 10); // Eliminamos el último dígito del número
    }

    return suma;
}

// Ejemplo de uso
let numero = 12345;
let resultado = sumaDigitos(numero);

console.log(resultado);
