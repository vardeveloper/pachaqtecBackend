function sumaNumero(numero) {
    let resultado = 0;
    let i = 1;
    while (i <= numero) {
      resultado = resultado + i;
      i++;
    }
    return resultado;
  }
  console.log(sumaNumero(5))