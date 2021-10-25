/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let lIdx = str.length - 1;
  let rIdx = 0;

  while (rIdx < str.length && lIdx >= -1 && str[lIdx] === str[rIdx]) {
    lIdx--;
    rIdx++;
  }

  return rIdx === str.length ? true : false;
};

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
