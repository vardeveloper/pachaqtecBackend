//Encontrar el número más pequeño y el número más grande en una cadena de texto.

cadena_texto = "345445894593459125345";
numeros = cadena_texto.split("");
numeros = numeros.sort();

console.log("Numero Menor: ", numeros[0]);
console.log("Numero Mayor: ", numeros[numeros.length - 1]);

