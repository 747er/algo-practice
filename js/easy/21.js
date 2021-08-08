function isPalindrome(string) {
  let right = string.length - 1;
  let left = 0;

  while (left < right) {
    if (string[right] !== string[left]) return false;
    left++;
    right--;
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// // Write your code here.
// let lIdx = 0;
// let rIdx = string.length - 1;

// while (lIdx < rIdx) {
//   if (string[lIdx] !== string[rIdx]) return false;
//   lIdx++;
//   rIdx--;
// }
// return true;
