//Contar la cantidad de vocales en una cadena de texto.

function vocales(string){
    let count = 0;
    const vocales = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < string.length; i++){
        if(vocales.includes(string[i].toLowerCase())){
            count++;
        }
    }
    return count;
}