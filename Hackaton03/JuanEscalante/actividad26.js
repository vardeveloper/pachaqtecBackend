// Hacer un algoritmo para calcular el resto y cociente por medio de restas sucesivas


function restas_sucesivas(dividendo, divisor){
    cociente = 1;
    residuo = dividendo - divisor;
    while (residuo >= divisor){
        residuo = residuo - divisor;
        cociente ++;
    }
    return [cociente, residuo]
}


console.log(restas_sucesivas(1324, 312));
console.log(restas_sucesivas(10, 2));
console.log(restas_sucesivas(80, 40));
console.log(restas_sucesivas(80, 45));