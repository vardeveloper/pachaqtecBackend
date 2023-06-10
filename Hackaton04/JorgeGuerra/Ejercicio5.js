function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let conteo = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i])) {
        conteo++;
      }
    }
  
    return conteo;
  }
  let texto = "Hola, buenos días";
  let cantidadVocales = contarVocales(texto);
  console.log(cantidadVocales);  
  