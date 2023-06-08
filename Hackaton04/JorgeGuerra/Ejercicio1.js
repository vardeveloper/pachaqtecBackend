function fibonacci(numero) {
    let secuencia = [0, 1];  
  
    while (secuencia[secuencia.length - 1] < numero) {
      let nuevoNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];  
      secuencia.push(nuevoNumero);  
    }
  
    return secuencia.slice(0, -1);  
}
let numeroDado = 50;
let secuenciaFibonacci = fibonacci(numeroDado);
console.log(secuenciaFibonacci);
