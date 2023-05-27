



function verificar_input(){
    let numeros = [];
    let index = 1;
    while (index <= 4){
        numero = parseInt(prompt(`Ingrese un numero ${index}: `));
        if (numero <= 0 || isNaN(numero)){
            continue;
        }
        numeros.push(numero)
        index += 1
    }
    return numeros
}

function contar_pares(numeros){
    contador = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){
            contador += 1;
        }
    }
    if (contador == 0){
        console.log("No hay numeros pares");
    }else{
        console.log(`hay ${contador} numeros pares`)
    }
}

function obtener_mayor(numeros){
    let mayor = numeros[0]
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    console.log(`El numero mayor es ${mayor}`);
}

function validar_tercero(numeros){
    if (numeros[2] % 2 == 0){
        console.log(`Como el tercero es par, el cuadrado del segundo es: ${Math.pow(numeros[1], 2)}`);
    }
}

function cuarto_enunciado(numeros){
    if (numeros[2] > numeros[1]){
        return -1
    }
    if (numeros[2] < 50 || numeros[2] > 700){
        return -1
    }
    suma = numeros[0] + numeros[1] + numeros[2] + numeros[3]
    console.log(`La suma de los numeros es: ${suma}`);
}

numeros = [500,300,255,450];
//numeros = verificar_input()
console.log(numeros)
contar_pares(numeros);
obtener_mayor(numeros);
validar_tercero(numeros);
cuarto_enunciado(numeros);


