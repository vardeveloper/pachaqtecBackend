const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

const cadenaTexto = "Contar la cantidad de vocales en una cadena de texto."
const vocales = contarVocales(cadenaTexto);
console.log("La cadena " + cadenaTexto + " tiene " + vocales + " vocales");