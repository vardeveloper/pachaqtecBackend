let number = prompt("Ingrese un número entero")

suma = number.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0)
console.log(suma)