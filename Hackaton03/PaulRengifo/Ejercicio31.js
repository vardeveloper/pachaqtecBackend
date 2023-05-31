//Hacer un algoritmo parar calcular la media de los números pares e impares, sólo se ingresará diez números.


function verificar_input(){
    let numeros_pares = [];
    let numeros_impares = [];
    let index = 1;
    while (index <= 10){
        numero = parseInt(prompt(`Ingrese un numero ${index}: `));
        if (numero <= 0 || isNaN(numero)){
            continue;
        }
        if (numero % 2 == 0){
            numeros_pares.push(numero);
        }else{
            numeros_impares.push(numero)
        }
        index += 1
    }
    return {
        "pares" : numeros_pares,
        "impares" : numeros_impares
    }
}

function sumar(numeros){
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
        
        suma += numeros[i];
    }
    return suma
}
numeros = verificar_input()
let promedio_pares = sumar(numeros["pares"]) / numeros["pares"].length;
let promedio_impares = sumar(numeros["impares"]) / numeros["impares"].length;
console.log(`El promedio de los numeros pares es: ${promedio_pares}`);
console.log(`El promedio de los numeros impares es: ${promedio_impares}`);
