const chai = require("chai");

function findMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return res;
}

let result = findMissingRanges([0, 1, 3, 50, 75], 0, 99);

it("should return an array of missing ranges", () => {
  chai
    .expect(result)
    .to.deep.equal([2, "2", 4, "4-49", 51, "51-74", 76, "76-99"]);
});
