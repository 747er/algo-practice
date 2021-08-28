// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./fourPairSum");
const chai = require("chai");

function sortAndStringify(array) {
  return array.sort((a, b) => a - b).join(",");
}

it("Test Case #1", function () {
  let output = program.fourNumberSum([7, 6, 4, -1, 1, 2], 16);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [7, 6, 4, -1],
    [7, 6, 1, 2],
  ];
  chai.expect(output.length === 2).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});
