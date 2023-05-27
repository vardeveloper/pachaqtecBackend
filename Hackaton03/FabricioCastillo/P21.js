function FactorialdeNumero(numero){
    let resultado=1
    for(let i=1; i<=numero; i++){
        resultado = resultado * i;
    }
    return resultado;
    }
    console.log(FactorialdeNumero(5))