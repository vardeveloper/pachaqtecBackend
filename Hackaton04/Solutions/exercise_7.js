/**
 * 7. Convertir una frase a título (capitalize cada palabra).
 */

function convertirATitulo(frase) {
    let palabras = frase.split(' '); // Dividimos la frase en palabras utilizando el espacio como separador

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra.charAt(0).toUpperCase();
        let restoPalabra = palabra.slice(1).toLowerCase();
        palabras[i] = primeraLetra + restoPalabra;
    }

    return palabras.join(' '); // Unimos las palabras en una frase nuevamente, utilizando el espacio como separador
}

// Ejemplo de uso
let frase = "hola, cómo estás?";
let resultado = convertirATitulo(frase);

console.log(resultado);
