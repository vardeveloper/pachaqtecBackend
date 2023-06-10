//Generar un número aleatorio entre un rango dado.

function aleatorio (min, max){
    let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return aleatorio;
}