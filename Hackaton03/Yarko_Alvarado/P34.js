//34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

//Se crea un funcion
function tablaDeMultiplicar(){

    for(let i = 1; i<=9; i++){ 

        for(let j = 1; j <= 9; j++){ 

            console.log(`${i} x ${j} = ${i*j}`) 
        }
    }
}
tablaDeMultiplicar() 