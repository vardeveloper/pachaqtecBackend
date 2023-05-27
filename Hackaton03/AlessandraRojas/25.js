// factorial en forma distinta

function calcularFactorial(numero) {
    if (numero <= 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 2);
    }
  }
  
  