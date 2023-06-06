function esAnagrama(palabra, posibleAnagrama){

    palabra = palabra.toLowerCase();
    posibleAnagrama = posibleAnagrama.toLowerCase();

    palabra = palabra.split("");
    posibleAnagrama = posibleAnagrama.split("");

    palabra = palabra.sort();
    posibleAnagrama = posibleAnagrama.sort();

    palabra = palabra.join("");
    posibleAnagrama = posibleAnagrama.join("");


    if(palabra === posibleAnagrama){
      return true;
    }
    else{
      return false;
    }
}

console.log(esAnagrama())