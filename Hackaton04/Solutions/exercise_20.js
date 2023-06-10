/**
 * 20. Calcular el número de días transcurridos entre dos fechas.
 */

function calcularDiasTranscurridos(fechaInicio, fechaFin) {
    let unDia = 24 * 60 * 60 * 1000; // Número de milisegundos en un día

    // Convertir las fechas a objetos de tipo Date
    let fechaInicioObj = new Date(fechaInicio);
    let fechaFinObj = new Date(fechaFin);

    // Calcular la diferencia en milisegundos entre las dos fechas
    let diferenciaMilisegundos = Math.abs(fechaFinObj - fechaInicioObj);

    // Calcular el número de días redondeando hacia abajo
    let diasTranscurridos = Math.floor(diferenciaMilisegundos / unDia);

    return diasTranscurridos;
}

// Ejemplo de uso
let fechaInicio = '2022-01-01';
let fechaFin = '2022-12-31';
let resultado = calcularDiasTranscurridos(fechaInicio, fechaFin);

console.log(resultado);
