// // Multiples of 3s and 5s

// let findSum = function (max) {
//   let sum = 0;

//   for (let i = 0; i < max; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// };

// console.log(findSum(1000));

// (function euler001() {
//   var sum = 0;
//   var n = 1000;

//   while (n--) {
//     if (n % 3 === 0 || n % 5 === 0) {
//       sum += n;
//     }
//   }

//   console.log(sum);
//   return sum;
// })();

// const limit = 1000;

// const sum = [...Array(limit)]
//   .fill()
//   .map((_, i) => i)
//   .filter((num) => num % 3 === 0 || num % 5 === 0)
//   .reduce((acc, curr) => acc + curr);

// console.log(sum);

//Calculate the sum of all multiples of <base> under <max>
// function sumOfMultiples(base, max) {
//   num = Math.floor((max - 1) / base);
//   return ((num * (num + 1)) / 2) * base;
// }

// //Calculate the sum of all multiples of <a> and <b> below <max>
// function sumOfTwo(a, b, max) {
//   return (
//     sumOfMultiples(a, max) + sumOfMultiples(b, max) - sumOfMultiples(a * b, max)
//   );
// }

// function main() {
//   return sumOfTwo(3, 5, 1000);
// }

// console.log(main());
