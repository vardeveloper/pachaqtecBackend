// Hacer un algoritmo para calcular la suma de los n primeros numeros

function suma_n_numeros(n){
    if (n < 0){
        console.log("El numero debe ser positivo");
        return -1
    }
    return n * (n + 1)/2
}
console.log(suma_n_numeros(100));