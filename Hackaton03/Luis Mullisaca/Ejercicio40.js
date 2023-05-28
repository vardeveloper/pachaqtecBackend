let pi, factores
for (let k = 1; k <= 5; k++) {
    pi = parseFloat(3)
    factores = parseFloat(2)
    terminos = 10 + Math.round(Math.random()*90);

    for (let c = 1; c <= terminos; c++) {
        if (c % 2 == 0)
            pi = pi - parseFloat(4 / (factores * (factores + 1) * (factores + 2)))
        else
            pi = pi + parseFloat(4 / (factores * (factores + 1) * (factores + 2)))
        factores = factores + 2
    }
    console.log("\n" + terminos + " terminos >> aproximación a PI con serie Nilakantha:" + pi);
}