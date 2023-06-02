/** 
Hacer un algoritmo en Javascript que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

¿Cuántos números son Pares?

¿Cuál es el mayor de todos?

Si el tercero es par, calcular el cuadrado del segundo.

Si el primero es menor que el cuarto, calcular la media de los 4 números.

Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
Si cumple la segunda condición, calcular la suma de los 4 números.
*/

const CANTIDAD_NUMEROS = 4
let numeros = []
let i = 1

while (i <= CANTIDAD_NUMEROS) {
  num = parseInt(prompt(`Ingrese numero ${i}`))
  while(num <= 0 || isNaN(num)) {
    num = parseInt(prompt(`Ingrese numero ${i}`))
  }
  numeros.push(num)
  i++
}
console.log("Lista de Números: ")
console.log(numeros)

let numeros_pares = numeros.filter( num => num % 2 === 0 )
//console.log(numeros_pares)
console.log("¿Cuántos números son Pares?")
console.log(numeros_pares.length)

console.log("¿Cuál es el mayor de todos?")
console.log(Math.max(...numeros)) // valo1, valor2 valor3 ... n


// Si el tercero es par, calcular el cuadrado del segundo.
if (numeros[2] % 2 == 0) {
  console.log("calcular el cuadrado del segundo")
  console.log(numeros[1] ** 2)
}

// Si el primero es menor que el cuarto, calcular la media de los 4 números.
if (numeros[0] < numeros[3]) {
  console.log("calcular el promedio de los 4 números") // [1, 2, 3]
  let promedio = numeros.reduce( (a, b) => a + b, 0 ) / numeros.length
  console.log(promedio)
}

/** 
Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
Si cumple la segunda condición, calcular la suma de los 4 números.
*/
if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
  console.log("calcular la suma de los 4 números")
  console.log(numeros.reduce( (a, b) => a + b, 0 ))
}
