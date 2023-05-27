// Hacer un algoritmo para conseguir el MCD de un numero por medio del algoritmo de euclides


function obtener_mcd(numero1, numero2){
    if (numero1 == 0){
        return numero2
    }
    if (numero2 == 0){
        return numero1
    }
    residuo = numero1 % numero2
    return obtener_mcd(numero2, residuo)
}

console.log(obtener_mcd(270,192));
console.log(obtener_mcd(2387,372));
console.log(obtener_mcd(8,4));