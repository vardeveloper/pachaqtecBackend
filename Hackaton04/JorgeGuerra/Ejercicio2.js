function esPangrama(cadena) {
  let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split("")
  //cadena = cadena.toLowerCase().replace(/\s/g, "").replace(/[,"]/g,"");
  const arreglo = cadena.split("")
  for (let letra of alfabeto){
    console.log(letra)
   if (!arreglo.includes(letra)){
     console.log("Esto no es un Pangrama")
     break
   }
  }
}  
let texto = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.  El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro.Le gustaba cenar un exquisito sándwich de jamón con zumo de piña y vodka fría.El viejo Señor Gómez pedía queso, kiwi y habas, pero le ha tocado un saxofón.Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán"
let esPangramaTexto = esPangrama(texto);
console.log(esPangramaTexto)
