
function calcularRestoCociente(dividendo, divisor) {

     let resto = dividendo;
    
     let cociente = 0;
    
    
    
    
     while (resto >= divisor) {
    
     resto -= divisor;
    
    cociente++;
    
    }
    
    return {
    
    resto: resto,
    
    cociente: cociente
    
    };
    
    }
    
    
    
    
    // Ejemplo de uso
    
    const dividendo = 27;
    
    const divisor = 5;
    
    
    
    
    const resultado = calcularRestoCociente(dividendo, divisor);
    
    console.log("Resto: " + resultado.resto);
    
    console.log("Cociente: " + resultado.cociente);



//function RestaSucesiva(numero){

    //let cociente=0
    //let resto=0
    //let dividendo=0
    //let divisor=0

  //  if(dividendo>0 && divisor>0){
    //    cociente<-0
      //  resto<-0

   // }for(let resto=0;resto>divisor;i++){

     //       resto<-resto - divisor;
       //     cociente<- cociente+1

    //}while(resto<divisor){

    //}

      //  return resto,cociente;
    //}

     //const valor=RestaSucesiva;

    //console.log(valor);







