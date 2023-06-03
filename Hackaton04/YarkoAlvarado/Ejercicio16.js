function calcularAreaTriangulo(a, b, c) {
    let s = (a + b + c) / 2;
  
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
  let ladoA = 5;
  let ladoB = 8;
  let ladoC = 9;
  let areaTriangulo = calcularAreaTriangulo(ladoA, ladoB, ladoC);
  console.log(areaTriangulo); 
  