const pangrama = cadena => {
    const minusculas = "abcdefghijklmnñopqrstuvwxy";
    cadena = cadena.toLowerCase();

    let arreglo = Array.from(minusculas);

    for (let i = 0; i < arreglo.length; i++) {
        let letraActual = arreglo[i];
        if (!cadena.includes(letraActual))
        return false;
    }
    return true;
}

const cadenaPrueba = [
    "Desarrollar una función que determine si una cadena de texto es un pangrama (contiene todas las letras del alfabeto",
    "Hola Mundo",
    "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"
];

cadenaPrueba.forEach(cadena => {
    console.log(`¿${cadena} es pangrama? ${pangrama(cadena)}`);
})