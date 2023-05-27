// Hacer un algoritmo para calcula el factorial de un numerode una forma distinta

function factorial(n){
    producto = 1;
    if (n === 1 || n === 0){
        return 1
    }
    for (let i = 2; i <= n; i++){
        producto = producto * i;
    }
    return producto
}

console.log(factorial(4))