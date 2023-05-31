ejercicio 37
(opción1)
function mcd (num1, num2) {
    let x;
    while (num2 !== 0) {
        x = num2;
        num2 = num1 % num2;
        num1 = x;
    }
    return num1;
}

(opción2)
function MCD (a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b -a;
        }
    }
    return a;
}