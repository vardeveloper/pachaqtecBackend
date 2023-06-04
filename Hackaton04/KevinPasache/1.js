/* fibonacci (n) => {
    let num1 = 0;
    let num2 = 1;

    let fib = [num1, num2];

    for (let i = 2; i < n; i++) {
        let num3 = num1 + num2;
        fib.push(num3);
        num1 = num2;
        num2 = num3;
    }
    return fib;
}
*/

function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;

    let fib = [num1, num2];

    for (let i = 2; i < n; i++) {
        let num3 = num1 + num2;
        fib.push(num3);
        num1 = num2;
        num2 = num3;
    }
    return fib;
}

