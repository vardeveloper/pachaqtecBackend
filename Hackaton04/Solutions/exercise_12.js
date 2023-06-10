/**
 * 12. Invertir el orden de una cadena de texto.
 */

function invertirCadena(cadena) {
    let cadenaInvertida = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena.charAt(i);
    }

    return cadenaInvertida;
}

// Ejemplo de uso
let texto = "Hola, cómo estás?";
let resultado = invertirCadena(texto);

console.log(resultado);
