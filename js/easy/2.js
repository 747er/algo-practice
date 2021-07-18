function isValidSubsequence(array, sequence) {
  let arrIdx = 0,
    seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    array[arrIdx] === sequence[seqIdx] && seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;
