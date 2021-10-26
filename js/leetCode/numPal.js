/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   let str = x.toString();
//   let lIdx = str.length - 1;
//   let rIdx = 0;

//   while (rIdx < str.length && lIdx >= -1 && str[lIdx] === str[rIdx]) {
//     lIdx--;
//     rIdx++;
//   }

//   return rIdx === str.length ? true : false;
// };

// Upgraded First Solution
var isPalindrome = function (x) {
  let str = x.toString();
  let lIdx = 0;
  let rIdx = str.length - 1;

  while (lIdx < rIdx) {
    if (str[lIdx++] !== str[rIdx--]) return false;
  }

  return true;
};

// Alt Solution 1
// var isPalindrome = function (x) {
//   const arr = String(x).split("");

//   while (arr.length > 1) {
//     if (arr.shift() !== arr.pop()) {
//       return false;
//     }
//   }

//   return true;
// };

// Alt Solution 2
// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   // reverse the string representation of x
//   const reverse = `${x}`.split("").reverse().join("");
//   // compare the value regardless of types
//   return x == reverse;
// };

console.log(isPalindrome(123));
console.log(isPalindrome(123321));

// var isPalindrome = function (x) {
//     let str = x.toString();
//     let currIdx = 0;

//     const validatePalindrome = function (i, j, str) {
//       while (i > 0 && j < str.length && i === j) {
//         i--;
//         j++;
//       }

//     };

//     for (let i = 0; i < str.length; i++) {
//       const center1 = str[i];
//       const center2 = str[i + 1];

//       validatePalindrome;
//     }
//   };
