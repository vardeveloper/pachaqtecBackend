// Desarrollar una función que determine si una cadena de texto es un pangrama 
// (contiene todas las letras del alfabeto)


let palabras = "psicologia"

const esPangrama = cadena => {
	const alfabeto = "abcdefghijklmnñopqrstuvwxy";
	cadena = cadena.toLowerCase();
	return Array.from(alfabeto).every(letra => cadena.includes(letra));
}