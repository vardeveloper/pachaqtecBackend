//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

//Creamos las variable que se utilizaran
var nCantidad;
var n1 = 0;//Inicio de fibonnaci
var n2 = 1;//Siguiente numero fibonnaci
var n3;


//Ingresamos la cantidad de digitos que deseamos ver
do{

    nCantidad = parseInt(prompt("Ingrese cantidad de terminos: "))

}while(nCantidad<=1) // No se permitira numero menores a 1 


console.log("Secuencia Fibonacci: ")


//Creamos una ciclo donde se realizara la suma para descubrir el siguiente numero 
for(let i =0; i < nCantidad; i++){

    console.log(n1)// Primero imprimos el valor en consola 

    n3 = n1 + n2; // Variable portara el siguiente valor en fibonnaci
    n1 = n2; // el primer valor ahora se actualiza al segundo
    n2 = n3; // se actualiza el valor para realizar la siguiente suma
}
