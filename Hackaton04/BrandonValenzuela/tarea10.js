//Calcular la media de un arreglo de números.

const arr1 = [2,5,8,6,3,7,9]

let mediaNumero = arr1.reduce((a,b) => { return a+b }) / arr1.length;

console.log (mediaNumero);