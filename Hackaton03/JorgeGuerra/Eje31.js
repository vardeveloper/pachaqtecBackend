//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
var numeros=0;
i = 1;
do{
   numeros = parseInt(prompt(`Ingresa numero N°${i}:`))
   console.log(numeros)
   numeros += numeros
   console.log(numeros)
   i++
}while(i<=10)
console.log(numeros)
console.log(numeros/10)
