// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const { expect } = require("chai");

function generateDocument(characters, document) {
  let map = {};

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] in map) map[characters[i]] += 1;
    else map[characters[i]] = 1;
  }

  for (let i = 0; i < document.length; i++) {
    if (!(document[i] in map) || map[document[i]] === 0) return false;
    map[document[i]]--;
  }

  return true;
}

// Case One
const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";
const expected = true;
const actual = generateDocument(characters, document);
expect(actual).to.deep.equal(expected);

// // Failing Case
const charactersTwo = "Bste!hetsi ogEAxpelrt x test should be fine";
const documentTwo = "AlgoExpert is the Best!!";
const expectedTwo = false;
const actualTwo = generateDocument(charactersTwo, documentTwo);
expect(actualTwo).to.deep.equal(expectedTwo);

expect(generateDocument("A", "a")).to.deep.equal(false);
