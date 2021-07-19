// KADANE ALGO
// https://www.youtube.com/watch?v=jnoVtCKECmQ

function maximumSumSubarray(array) {
  let max_sum = array[0];
  let current_sum = max_sum;

  for (let i = 1; i < array.length; i++) {
    current_sum = Math.max(array[i] + current_sum, array[i]);
    max_sum = Math.max(current_sum, max_sum);
  }
  return max_sum;
}

// Do not edit the line below.
exports.maximumSumSubarray = maximumSumSubarray;
