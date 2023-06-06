function eliminarDuplicados(arr) {
    let arregloSinDuplicados = [];
    for (let i = 0; i < arr.length; i++) {
      if (arregloSinDuplicados.indexOf(arr[i]) === -1) {
        arregloSinDuplicados.push(arr[i]);
      }
    }
    return arregloSinDuplicados;
  }

  let numeros = [1, 2, 3, 4, 2, 3, 5];
  let numerosSinDuplicados = eliminarDuplicados(numeros);
  console.log(numerosSinDuplicados)