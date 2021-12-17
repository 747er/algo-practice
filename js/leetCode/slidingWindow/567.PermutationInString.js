// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//  var checkInclusion = function(s1, s2) {
//     if (s1 === "" || s2 === "") {
//         return false;
//     }

//     let m = new Map();
//     // Record every character of s1 to Hash table with entry being
//     // (character, number of occurrences)
//     for (let i = 0; i < s1.length; i++) {
//         m.set(s1[i], m.get(s1[i]) + 1 || 1);
//     }

//     let start = 0, windowSize = s1.length;
//     // number of unique characters to collect
//     let counter = m.size;

//     for (let end = 0; end < s2.length; end++) {
//         let char = s2[end];
//         console.log(char)
//         if (m.has(char)) m.set(char, m.get(char) - 1);
//         if (m.get(char) === 0) counter--; // we collected all occurrences of this char
//         // we collected all occurrences of every character in s1
//         while (counter === 0) {
//             if (end-start+1 === windowSize) return true;
//             if (m.has(s2[start])) m.set(s2[start], m.get(s2[start]) + 1);
//             if (m.get(s2[start]) === 1) counter++; // we should collect one more unique char
//             start++;
//         }
//     }
//     return false;
//     // T.C: O(M+N), M = length of s1, N = length of s2
//     // S.C: O(M)
// };

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1CharCount = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  for (let char of s1) {
    //'a'.charCodeAt() === 97;
    const idx = char.charCodeAt() - 97;
    s1CharCount[idx]++;
  }

  // construct window
  for (let i = 0; i < s1.length; i++) {
    const idx = s2[i].charCodeAt() - 97;
    window[idx]++;
  }

  let start = 0;
  let end = s1.length - 1;

  while (end < s2.length) {
    if (window.join("") === s1CharCount.join("")) return true;
    end++;
    if (end === s2.length) break;
    const startIdx = s2[start].charCodeAt() - 97;
    const endIdx = s2[end].charCodeAt() - 97;
    window[startIdx]--;
    window[endIdx]++;
    start++;
  }
  return false;
};

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

const s1 = "ab",
  s2 = "eidbaooo";
checkInclusion(s1, s2);

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
