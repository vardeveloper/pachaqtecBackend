/**
 * 9. Encontrar la palabra más larga en una cadena de texto.
 */

function encontrarPalabraMasLarga(cadena) {
    let palabras = cadena.split(' '); // Dividimos la cadena en palabras utilizando el espacio como separador
    let palabraMasLarga = '';

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

// Ejemplo de uso
let texto = "La programación es divertida";
let resultado = encontrarPalabraMasLarga(texto);

console.log(resultado);
