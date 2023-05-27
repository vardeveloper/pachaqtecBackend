/* Hacer un algoritmo para determnar la media de una lista indefinida
de numeros positivos, se debe acabar el programa al ingresar un numero negativo
*/


function verificar_input(){
    let numeros = [];
    let index = 1;
    let numero = 1;
    while (numero > 0){
        numero = parseInt(prompt(`Ingrese un numero ${index}: `));
        if (numero <= 0 || isNaN(numero)){
            continue;
        }
        numeros.push(numero)
        index += 1
    }
    return numeros
}

function sumar(numeros){
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma
}

function promedio(numeros){
    return sumar(numeros) / numeros.length
}


numeros = verificar_input();
console.log(numeros);
console.log(promedio(numeros));