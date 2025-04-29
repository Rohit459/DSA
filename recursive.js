// factorial
function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1)
}

// fibonacci
function fibonacciSeries(n) {
    const series = [0,1];
    for(let i = 2; i<n;i++) {
        series.push(series[i-1] + series[i-2]);
    }
    return series.toString();
}

// function fibonacciRecursive(n) {
//     const series = []
//     if(n===1) return series.push[0].toString()
//     if(n===2) return [0,1].toString()
//     return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
// }