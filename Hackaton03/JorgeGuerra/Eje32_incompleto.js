//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
function getRandomInt(a){
    return Math.floor(Math.random()* a)
}
var cuidad = []
function maxProvincia(){
    for(i=1;i<=3;i++){
        for(j=1;j<=11;j++){
            cuidad.push(getRandomInt(500))
        }
    } 
}

console.log(getRandomInt(500))