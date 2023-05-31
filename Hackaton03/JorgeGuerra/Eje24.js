// 24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
var sumaPares = 0;
for(let i = 1; i<=1000;i++){
    if(i%2==0){
        sumaPares += i;
    }
}
console.log(sumaPares)