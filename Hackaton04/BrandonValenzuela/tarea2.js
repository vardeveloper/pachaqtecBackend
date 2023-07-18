// Desarrollar una función que determine si una cadena de texto es un pangrama 
// (contiene todas las letras del alfabeto)


let palabras = "cada vez que trabajo Félix me paga con whisky añejo"
const alfabeto = "abcdefghijklmnñopqrstuvwxyz"

let soyPangrama =  palabras.split("");
		
console.log(soyPangrama.every(soyPangrama.includes(alfabeto.split(""))));
console.log(alfabeto.split(""))