// Hacer un algoritmo que nos permita saber si un numero es perfecto

function obtener_divisores(numero){
    let divisores = [];
    for (let i = 1; i < numero; i++){
        if (numero % i == 0){
            divisores.push(i);
        }
    }
    return divisores
}

function sumar(numeros){
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma
}

function validar_numero_perfecto(numero){
    divisores = obtener_divisores(numero)
    suma_divisores = sumar(divisores);
    if (numero == suma_divisores){
        console.log(`El numero ${numero} es un perfecto`);
    }
}

for(let i = 1; i < 10000; i++){
    validar_numero_perfecto(i);
}
