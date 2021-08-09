// function getNthFib(n) {
//   // Write your code here.
//   let fib = [0, 1];

//   for (let i = 2; i < n + 1; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }
//   return fib[n - 1];
// }

// // Do not edit the line below.
// exports.getNthFib = getNthFib;

function getNthFib(n) {
  // Write your code here.
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
