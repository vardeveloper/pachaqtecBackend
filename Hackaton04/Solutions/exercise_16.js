/**
 * 16. Calcular el área de un triángulo dados sus lados.
 */

function calcularAreaTriangulo(a, b, c) {
    let semiperimetro = (a + b + c) / 2;
    let area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c));
    return area;
}

// Ejemplo de uso
let ladoA = 3;
let ladoB = 4;
let ladoC = 5;
let resultado = calcularAreaTriangulo(ladoA, ladoB, ladoC);

console.log(resultado);
