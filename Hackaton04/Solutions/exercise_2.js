/**
 * Desarrollar una función en javascript que determine si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
 */

function esPangrama(cadena) {
    let letras = cadena.toLowerCase().replace(/[^a-z]/g, ''); // Convertimos a minúsculas y eliminamos caracteres no alfabéticos
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alfabeto.length; i++) {
        if (letras.indexOf(alfabeto[i]) === -1) {
            return false; // Si alguna letra del alfabeto no está presente en la cadena, no es un pangrama
        }
    }

    return true; // Si se recorrió todo el alfabeto y todas las letras están presentes, es un pangrama
}

// Ejemplo de uso
let texto = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.";
let resultado = esPangrama(texto);

console.log(resultado);
