//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

var numero;

do{

    numero = parseInt(prompt("Ingresa el numero: "))

}while(numero<=1)


function sumaNumero(a){
    if(a==1){
        return (1)
    }else{
        return sumaNumero(a-1) + a
    }
}

console.log(sumaNumero(numero))