function aproximarPiGregory (iteraciones) {
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

const iteraciones = 1000000;
const resultado = aproximarPiGregory(iteraciones)
console.log("La aproximación de pi es:", resultado);