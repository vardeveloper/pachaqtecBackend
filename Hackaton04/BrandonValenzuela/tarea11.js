//Verificar si un año dado es bisiesto.

function esBisiesto(year){ //boolean
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; // divisible por 4 & no por 100 OR divisible por 400
}