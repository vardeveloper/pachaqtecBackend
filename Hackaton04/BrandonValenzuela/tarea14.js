//Encontrar la suma de los números pares en un arreglo.

const arr1 = [3,25,6,18,24,12,14,32]

const sumaPares = arr1.map(i => i%2 == 0);

console.log(sumaPares.reduce((a,b) => {return ( a + b)}));