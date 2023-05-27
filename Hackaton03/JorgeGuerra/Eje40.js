//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...
function aproximarPiNilakantha(iteraciones) {
    let pi = 3;
    let denominador = 2;
    let signo = 1;

    for (let i = 0; i < iteraciones; i++) {
      const termino = (4 / (denominador * (denominador + 1) * (denominador + 2))) * signo 
      pi += termino;

      denominador += 2;
      signo *= -1;
    }

    return pi;
  }
  const iteraciones = 1000000;
  const resultado = aproximarPiNilakantha(iteraciones);
  console.log("La aproximación de pi es:", resultado);