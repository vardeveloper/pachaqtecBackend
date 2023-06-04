array = [1,1,3,4,4,3,5,6,8,8]

const arreglo = array.sort()
console.log(arreglo)

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i+1] === arreglo[i]) {
        console.log("Se repite el número " + arreglo[i])
    }
}