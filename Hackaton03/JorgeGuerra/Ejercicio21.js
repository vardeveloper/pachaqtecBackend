// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
var numero = parseInt(prompt("Ingresa un numero: ")); // usuario ingresa numero 
function range(start, stop=undefined, step=1) { // funcion que crea una lista del numero ingresado
  const startArray = stop === undefined ? 1: start;
  const stopArray = stop === undefined ? start : stop;
  return Array.from({length: (stopArray - startArray) / step +1},(_,i) => startArray + (i * step));
}
var arrayFactorial = range(numero);
console.log(arrayFactorial)
console.log(`El factorial de ${numero} es: ${arrayFactorial.reduce((a, b)=> a * b, )}`)//imprimimos la multiplicacion de cada elemento de la lista
