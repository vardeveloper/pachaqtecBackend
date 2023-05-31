// Calcular serie fibonacci

function fibonacci() {
    let a = 0;
    let b = 1;
    let sequencia = [a, b];
  
    for (let i = 2; i < 10; i++) {
      sequencia[i] = a + b;
      a = b;
      b = sequencia[i];
    }
  
    return sequencia;
  }