//Desarrollar una función que encuentre el número más frecuente en un arreglo de números.

let arr1 = [1,2,5,3,5,6,5,8,5,9] 


let numeroRepetido = arr1.filter(function(v,i) {return arr1.indexOf(v,i+1)>-1 });

console.log(numeroRepetido[0]);