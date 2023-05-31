
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