function isPalindrome(string) {
  // Write your code here.
  let lIdx = 0;
  let rIdx = string.length - 1;

  while (lIdx < rIdx) {
    if (string[lIdx] !== string[rIdx]) return false;
    lIdx++;
    rIdx--;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
