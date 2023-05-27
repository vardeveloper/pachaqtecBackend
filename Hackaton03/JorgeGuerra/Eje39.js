//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
function aproximarPiGregory(iteraciones) {
    let pi = 0;
    let denominador = 1;
    let signo = 1;

    for (let i = 0; i < iteraciones; i++) {
      const termino = (4 / denominador) * signo;
      pi += termino;
      denominador += 2;
      signo *= -1;
    }

    return pi;
  }
  const iteraciones = 100000;
  const resultado = aproximarPiGregory(iteraciones);
  console.log("La aproximación de pi es:", resultado);