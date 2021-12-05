let expect = require("chai").expect;

function rotateArray(nums, k) {
  // Brute Force
  // [1,2,3,4,5,6] k = 3
  // slice(0-2)
  // append(0-2)

  // Replace index
  // [1,2,3,4,5,6] k = 3
  // [4,5,6,1,2,3]
  // O(n) time and space
  // a[0] => a[(i + k) % a.length]
  let rotated = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    // rotated[i] = nums[((i + 1 + k) % nums.length)]
    rotated[[(i + k) % nums.length]] = nums[i];
  }

  // Reverse
  // 1, 2, 3, 4, 5, 6, 7  L READ
  // 7, 6, 5, 4, 3, 2, 1  R READ

  // 5, 6, 7, 1, 2, 3, 4

  // let reversed = nums.reverse()
  // let lIdx = 0, rIdx = nums.length - 1; idx = 0;
  // while (lIdx < rIdx) {
  //     console.log(idx)
  //     console.log(k)
  //     if (idx <= k) {
  //         nums[idx] = reversed[rIdx]
  //         idx++
  //         rIdx--
  //     } else {
  //         console.log('idx: ', idx)
  //         nums[idx] = reversed[lIdx]
  //         idx++
  //         lIdx++
  //     }
  // }

  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  return nums;
}

expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).to.deep.equal([
  5, 6, 7, 1, 2, 3, 4,
]);
