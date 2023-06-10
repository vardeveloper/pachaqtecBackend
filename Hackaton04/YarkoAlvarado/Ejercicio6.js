function sumarDigitos(numero) {
    let suma = 0;
    let num = numero;
  
    while (num !== 0) {
      let digito = num % 10;  
      suma += digito;         
      num = Math.floor(num / 10); 
    }
  
    return suma;
  }
  let numero = 573654;
  let sumaDigitos = sumarDigitos(numero);
  console.log(sumaDigitos);  
  