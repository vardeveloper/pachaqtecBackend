/**
 * 5. Contar la cantidad de vocales en una cadena de texto.
 */

function contarVocales(cadena) {
    let conteo = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i].toLowerCase();
        if (vocales.includes(caracter)) {
            conteo++;
        }
    }

    return conteo;
}

// Ejemplo de uso
let texto = "Hola, cómo estás?";
let resultado = contarVocales(texto);

console.log(resultado);
