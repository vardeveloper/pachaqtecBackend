function HayarMayorString(cadena){

    var numeroMayor = 0;

    var numerosLetra = cadena.split(",");

    for(let i=0;i<numerosLetra.length;i++){

        if(parseInt(numerosLetra[i])>numeroMayor){

            numeroMayor=parseInt(numerosLetra[i]);

        }

    }

    return numeroMayor

}

const cadena = "20, 10, 54, 215, 100";

console.log(HayarMayorString(cadena))