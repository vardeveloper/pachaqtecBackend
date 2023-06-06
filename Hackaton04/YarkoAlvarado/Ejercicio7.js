function convertirATitulo(frase) {
  let palabras = frase.split(" ");

  let fraseConvertida = palabras.map(function(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  });

  return fraseConvertida.join(" ");
}
let frase = "sube tu archivo yarko";
let fraseEnTitulo = convertirATitulo(frase);
console.log(fraseEnTitulo);
