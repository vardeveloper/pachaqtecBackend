// Hacer un algoritmo para calcular la suma de los numeros impares menores o iguales a n

function suma_impares(n){
    if (n < 0){
        console.log("El numero debe ser positivo");
        return -1
    }
    return Math.pow(n,2)
}

console.log(suma_impares(100))

// usando bucle for

function suma_impares(n){
    if (n < 0){
        console.log("El numero debe ser positivo");
        return -1
    }
    let suma = 0;
    for (let i = 0; i < n; i++){
        if (i % 2 != 0){
            suma += i;
        }
    }
    return suma
}

console.log(suma_impares(100))