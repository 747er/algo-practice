// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./depth-first");
const chai = require("chai");

it("Depth First, Test Case #1", function () {
  const graph = new program.Node("A");
  graph.addChild("B").addChild("C").addChild("D");
  graph.children[0].addChild("E").addChild("F");
  graph.children[2].addChild("G").addChild("H");
  graph.children[0].children[1].addChild("I").addChild("J");
  graph.children[2].children[0].addChild("K");
  chai
    .expect(graph.depthFirstSearch([]))
    .to.deep.equal(["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]);
});
