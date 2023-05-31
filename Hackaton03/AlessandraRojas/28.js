// calcular la suma de los primeros cien números con un ciclo "repetir"

function calcularSumaRepetir() {
    let suma = 0;
    let i = 1;
    do {
      suma += i;
      i++;
    } while (i <= 100);
    return suma;
  }

  