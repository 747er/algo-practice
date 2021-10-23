// Given a string s, return the longest palindromic substring in s.

const checkPalindrome = function (str, i, j) {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i -= 1;
    j += 1;
  }
  return str.slice(i + 1, j);
};

var longestPalindrome = function (s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const center1 = checkPalindrome(s, i, i);
    const center2 = checkPalindrome(s, i, i + 1);

    if (center1.length > longest.length) {
      longest = center1;
    }

    if (center2.length > longest.length) {
      longest = center2;
    }
  }

  return longest;
};

console.log(longestPalindrome("daadracecarmamapop"));

// const findLongestPalindrome = (str, i, j) => {
//   while (i >= 0 && j < str.length && str[i] === str[j]) {
//     i -= 1;
//     j += 1;
//   }
//   // slice the qualified substring from the second last iteration
//   return str.slice(i + 1, j);
// };

// var longestPalindrome = function (s) {
//   let longest = "";

//   for (let i = 0; i < s.length; i++) {
//     // palindrome can center around 1 or 2 letters
//     const current1 = findLongestPalindrome(s, i, i);
//     const current2 = findLongestPalindrome(s, i, i + 1);

//     const longerPalindrome =
//       current1.length > current2.length ? current1 : current2;

//     if (longerPalindrome.length > longest.length) {
//       longest = longerPalindrome;
//     }
//   }
//   return longest;
// };

// console.log(longestPalindrome("abbadadracecar"));

// Do not edit the line below.
exports.longestPalindrome = longestPalindrome;
