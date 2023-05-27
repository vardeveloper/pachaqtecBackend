//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

var numero;
var nPrimos = []

do{

    numero = parseInt(prompt("Ingresa Numero: "))

}while(numero<2)

while(nPrimos.length<=numero){
    let i = 2;
    for(let x = 2;x<=i;x++){
        if(i%x!=0){
        nPrimos.push(i)
        }
    }
    i++;
}
alert(nPrimos)