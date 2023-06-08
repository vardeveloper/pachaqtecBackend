//Calcular la suma de los dígitos de un número.

let numero = 255

let sumaDigito = numero.toString().split("").reduce ( (a,b) => { return a + b}, 0 ) 

console.log(sumaDigito);
