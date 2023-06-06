const calcularMedia = (numeros) => {
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero);
    const media = suma / numeros.length;
    return media;
  };
  
  // Pedir al usuario que ingrese los números
  const entrada = prompt("Ingrese los números separados por coma (,):");
  const arreglo = entrada.split(",").map(numero => parseInt(numero));
  
  // Verificar si se ingresaron números válidos
  if (arreglo.some(isNaN)) {
    console.log("Ingresó uno o más valores no numéricos. Por favor, intente nuevamente.");
  } else {
    const resultado = calcularMedia(arreglo);
    console.log("La media es: " + resultado);
  }