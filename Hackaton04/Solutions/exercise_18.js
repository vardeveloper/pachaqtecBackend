/**
 * 18. Verificar si dos cadenas de texto son anagramas.
 */

function sonAnagramas(cadena1, cadena2) {
    // Eliminar espacios y convertir a minúsculas
    cadena1 = cadena1.replace(/\s/g, '').toLowerCase();
    cadena2 = cadena2.replace(/\s/g, '').toLowerCase();

    // Verificar si tienen la misma longitud
    if (cadena1.length !== cadena2.length) {
        return false;
    }

    // Convertir cadenas a arreglos y ordenarlos alfabéticamente
    let arreglo1 = cadena1.split('').sort();
    let arreglo2 = cadena2.split('').sort();

    // Verificar si los arreglos son iguales
    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i] !== arreglo2[i]) {
            return false;
        }
    }

    return true;
}

// Ejemplo de uso
let texto1 = 'Escucha';
let texto2 = 'Chatecus';
let resultado = sonAnagramas(texto1, texto2);

console.log(resultado);
