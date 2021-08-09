function getNthFib(n) {
  // Write your code here.
  let fib = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    console.log(fib[i - 1]);
    console.log(fib[i - 2]);
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  console.log(fib);
  return fib[n - 1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
