// /**
//  * @param {string} s
//  * @return {number}
//  */

var lengthOfLongestSubstring = function (s) {
  var strLength = s.length,
    maxLength = 0,
    maxStr = "",
    letter,
    posIndex,
    i;

  for (i = 0; i < strLength; i++) {
    letter = s[i];
    posIndex = maxStr.indexOf(letter);
    console.log(posIndex);

    // IF LETTER IS IN MAX STRING, REMAKE MAX STRING
    // STARTING WITH CHAR AFTER FIRST INSTANCE OF
    // THE REPEATING LETTER
    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += letter;
    maxLength = Math.max(maxLength, maxStr.length);
  }

  return maxLength;
};
