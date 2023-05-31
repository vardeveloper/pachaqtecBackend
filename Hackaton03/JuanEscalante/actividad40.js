// Hacer un algoritmo que cumpla con la aproximaciond el numero pi con la serie de Gregory-Leibniz
// PI = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

function pi_gregory_leibniz(numero_iteraciones){
    let pi = 0
    for(let i = 0; i <= numero_iteraciones; i++){
        pi += Math.pow(-1,i) * 4 / (2*i + 1);
    }
    return pi
}

iteraciones = [10000,100000,1000000,10000000]
iteraciones.forEach(element => {
    console.log(pi_gregory_leibniz(element));
});