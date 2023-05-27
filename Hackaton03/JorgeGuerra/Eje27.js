// 27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
var lNumeros=[];
var cantidad;
do{
    cantidad = parseInt(prompt("Ingresa cantidad numeros: "));
}while(cantidad<2)

/*
while(lNumeros.length<cantidad){
    let i = 1;
    n = parseInt(prompt(`Ingrese numero positivo N°${i}: `));
    i = i + 1;
    if(n<0){
        alert("NO SE ACEPTA NUMEROS NEGATIVOS");
        break;
    lNumeros.push(n);
    
}*/

for(let i=1;lNumeros.length<cantidad;i++){
    n = parseInt(prompt(`Ingrese numero positivo N°${i}: `));
    if(n<0){
        alert("NO SE ACEPTA NUMEROS NEGATIVOS");
        break;
    }
    lNumeros.push(n);
} 


var sNumeros = lNumeros.reduce((a,b)=>a+b,0);
console.log(`La media de ${lNumeros} es: ${sNumeros/cantidad}`)