//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

//Creamos la lista ingresaron los datos
var ListaN = [];

//Preguntamos al cliente los numeros a calcular
do{
    
    let numeros = parseInt(prompt("Ingresa numero: "));
    ListaN.push(numeros);

}while(ListaN.length<20);//hasta que sean 20 numeros


//Se crea funcion para devolver los valores Maximos y Minimos
function hallarMaxMin(arr){
    return `El numero Maximo es: ${Math.max(...arr)}\nEl valor Minimo es: ${Math.min(...arr)} `
}

console.log(hallarMaxMin(ListaN))


