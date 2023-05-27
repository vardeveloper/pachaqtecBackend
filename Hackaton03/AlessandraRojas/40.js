// Hacer un algoritmo que cumpla con la aproximacion del numero pi con la serie de Nilakantha

// PI = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - (4/(121314) ...

function pi_nilakhanta(numero_iteraciones){
    pi = 3
    for(let i = 1; i <= numero_iteraciones; i++){
        pi += Math.pow(-1,i + 1) * 4 / (2 * i * (2 * i + 1) * (2 * i + 2));
    }
    return pi
}

iteraciones = [10000,100000,1000000,10000000]
iteraciones.forEach(element => {
    console.log(pi_nilakhanta(element));
});