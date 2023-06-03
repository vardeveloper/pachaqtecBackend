// Verificar si dos cadenas de texto son anagramas.

let palabra1 = "iman";
let palabra2 = "manis";

validar_anagramas = {
    "palabra1" : palabra1,
    "palabra2" : palabra2,
    "validar" : () => {
        nueva_palabra1 = palabra1.split("").sort().join("");
        nueva_palabra2 = palabra2.split("").sort().join("");
        condicion = nueva_palabra1 == nueva_palabra2;
        console.log(condicion);
        if (condicion){
            console.log("Las dos palabras son anagramas");
        }else{
            console.log("Las dos palabras NO son anagramas");
        }
    }
}

validar_anagramas.validar();