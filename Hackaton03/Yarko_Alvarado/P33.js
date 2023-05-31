// 33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
let pregunta = prompt('Ingresa Y para empezar o N para terminar: ')
if(pregunta == 'Y'){
  pricerater()
}else{
  console.log('Gracias por usar esta herramienta!')
}
function pricerater (){
  let bucle = 1
  let precioU = 0
  let qproductos = 0
  let precioFinal = 0
  let descuento = 0
  while(bucle===1){
    precioU = parseFloat(prompt("El precio unitaro es: "))
    qproductos = parseFloat(prompt("Cantidad de productos es: "))
    if (precioU*qproductos>10){
      descuento = precioU*qproductos*0.15
      precioFinal = precioU*qproductos - descuento
    }else{
        descuento = 0
        precioFinal = precioU*qproductos - descuento
    }
    console.log("El precio final es: ",precioFinal)
    let pregunta2 = prompt('Ingresa Y para continuar o N para terminar: ')
    if(pregunta2 == 'Y'){
      pricerater()
    }else{
      console.log('Gracias por usar esta herramienta!')
      break
  }

}
}