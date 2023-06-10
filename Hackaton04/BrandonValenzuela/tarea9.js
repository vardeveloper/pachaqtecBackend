//Encontrar la palabra más larga en una cadena de texto.

function palabraLarga(string){
    const words = string.split(" "); //las palabras splitted estan en array 'words'
    let longestWord = "";

    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word.length > longestWord.length){
            longestWord = word;
        }
        
    }
    return longestWord;
}