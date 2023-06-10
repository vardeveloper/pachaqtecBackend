function encontrarPalabraMasLarga(cadena) {
    let palabras = cadena.split(" ");
    return palabras.reduce(function(palabraMasLarga, palabraActual) {
      return (palabraActual.length > palabraMasLarga.length) ? palabraActual : palabraMasLarga;
    }, '');
  }
  
  let texto = "La casa es bonita y acogedora";
  let palabraMasLargaTexto = encontrarPalabraMasLarga(texto);
  console.log(palabraMasLargaTexto); 
  

  