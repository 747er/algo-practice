function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  let modKey = key % 26;

  for (const letter of string) {
    let newLetter = letter.charCodeAt() + modKey;
    if (newLetter > 122) {
      newLetter = 96 + (newLetter % 122);
    }
    newLetters.push(String.fromCharCode(newLetter));
  }

  return newLetters.join("");
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
