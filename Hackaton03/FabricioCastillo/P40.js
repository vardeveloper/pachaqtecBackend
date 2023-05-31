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
  