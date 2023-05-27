//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
var valor = 1;
do{

    numero = parseInt(prompt("Ingresa el numero: "))

}while(numero<=1)

for(let i = 1; i < numero; i++){
    valor += valor * i
}
console.log(valor)