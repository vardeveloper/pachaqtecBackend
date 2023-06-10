// Convertir un número decimal a binario.


function decimal_a_binario(numero){
    let binario = [];
    let cociente;
    let resto;
    while (true){
        cociente = Math.floor(numero / 2);
        resto = numero % 2;
        numero = cociente;
        binario.push(resto.toString());
        if (numero < 2){
            resto = numero % 2
            binario.push(resto.toString());
            break
        }
        
    }
    binario = binario.reverse();
    binario = binario.join("");
    return binario
}


for (let i = 0; i < 100; i++){
    console.log(i, decimal_a_binario(i));
}


