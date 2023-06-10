function encontrarNumeroMasFrecuente(arreglo) {
    let conteo = {};
    for (let i = 0; i < arreglo.length; i++) {
      let numero = arreglo[i];
      if (conteo[numero] === undefined) {
        conteo[numero] = 1;
      } else {
        conteo[numero]++;
      }
    }
    let numeroMasFrecuente;
    let maxFrecuencia = 0;
    for (let numero in conteo) {
      if (conteo[numero] > maxFrecuencia) {
        maxFrecuencia = conteo[numero];
        numeroMasFrecuente = numero;
      }
    }
    return Number(numeroMasFrecuente);
  }
  let numeros = [5, 4, 8, 2, 3, 3, 2, 8, 8, 8, 7, 5, 8, 8, 3, 5];
let numeroMasFrecuente = encontrarNumeroMasFrecuente(numeros);
console.log(numeroMasFrecuente);
