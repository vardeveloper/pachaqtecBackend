//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

function Euclides(a,b){
    let n = b;
    b = a % b;
    a = n
    if(b==0){
        return n
    }else{
        return Euclides(n,b)
    }
}
console.log(Euclides(500, 230))

