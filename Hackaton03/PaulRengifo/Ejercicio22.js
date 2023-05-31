// Hacer un algoritmo para calcular la suma de los n primeros numeros

function suma_n_numeros(n){
    if (n < 0){
        console.log("El numero debe ser positivo");
        return -1
    }
    return n * (n + 1)/2
}
console.log(suma_n_numeros(100));
//usando bucle for

function suma_n_numeros_(n){
    if (n < 0){
        console.log("El numero debe ser positivo");
        return -1
    }
    let suma = 0;
    for (let i = 0; i < n; i++){
        suma += i;
    }
    return suma
}
console.log(suma_n_numeros(100));
