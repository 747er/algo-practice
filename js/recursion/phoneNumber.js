let pairs = {
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["0"],
};

function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const currentLetterSet = new Array(phoneNumber.length).fill("0");
  const lettersFound = [];

  phoneNumberHelper(0, phoneNumber, currentLetterSet, lettersFound);
  return lettersFound;
}

function phoneNumberHelper(idx, phoneNumber, currentLetterSet, lettersFound) {
  if (idx === phoneNumber.length) {
    const result = currentLetterSet.join("");
    lettersFound.push(result);
  } else {
    const digit = phoneNumber[idx];
    const letters = pairs[digit];
    for (const letter of letters) {
      currentLetterSet[idx] = letter;
      phoneNumberHelper(idx + 1, phoneNumber, currentLetterSet, lettersFound);
    }
  }
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
