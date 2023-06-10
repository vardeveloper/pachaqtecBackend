// Calcular el número de días transcurridos entre dos fechas.

let fecha1 = new Date(2023,1,1,12,12,12);
console.log(fecha1);
let fecha2 = new Date(2023,4,1,12,12,12);
console.log(fecha2);

let delta = fecha2 - fecha1;
delta = Math.abs(delta);

numero_dias = Math.floor(delta / 86400000);
console.log(numero_dias);