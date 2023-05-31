// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
var numero = parseInt(prompt("Ingresa un numero: "));  

function fac(a){
  if(a===0 || a===1){
    return 1
  }else{
    return fac(a-1)*a
  }
}
console.log(fac(numero))