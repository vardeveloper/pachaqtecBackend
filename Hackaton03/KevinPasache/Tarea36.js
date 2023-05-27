let fib = function(num) {
    if (num <= 1)
    return num;

    let n1 = 0;
    let n2 = 1;
    let result = 0;

    for (let i = 2; i <= num; i++) {
        result = n2 + n1;
        n1 = n2;
        n2 = result
    }
    return result;
}

function fibonacci (num) {
    const fib = [0, 1]
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib[num]
}