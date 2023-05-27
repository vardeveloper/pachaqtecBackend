//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
var numero;
var lPrimos=[]

do{
    numero = parseInt(prompt("Ingresa numero: "))
}while(numero<=0)

for(let i=1; i<= numero;i++){
    if(i%2!=0){
        lPrimos.push(i)
    }
}
alert(lPrimos)
alert(`La suma de los numeros impares hasta ${numero} es: ${lPrimos.reduce((a,b)=>a+b,0)}`)
