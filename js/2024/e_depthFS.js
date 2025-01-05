const { expect } = require("chai");

// expect(result2).to.deep.equal(25);

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const test1 = {
  graph: {
    nodes: [
      { children: [], id: "A", value: "A" }, // 0
      { children: [], id: "B", value: "B" },
      { children: [], id: "C", value: "C" },
      { children: [], id: "D", value: "D" },
      { children: [], id: "E", value: "E" },
      { children: [], id: "F", value: "F" }, //5
      { children: [], id: "G", value: "G" },
      { children: [], id: "H", value: "H" },
      { children: [], id: "I", value: "I" },
      { children: [], id: "J", value: "J" },
      { children: [], id: "K", value: "K" }, //10
    ],
    startNode: "A",
  },
};

// Create node objects with string names
const ANode = new Node("A");
const BNode = new Node("B");
const CNode = new Node("C");
const DNode = new Node("D");
const ENode = new Node("E");
const FNode = new Node("F");
const GNode = new Node("G");
const HNode = new Node("H");
const INode = new Node("I");
const JNode = new Node("J");
const KNode = new Node("K");

// Build graph structure
ANode.children.push(BNode, CNode, DNode);
BNode.children.push(ENode, FNode);
DNode.children.push(GNode, HNode);
FNode.children.push(INode, JNode);
GNode.children.push(KNode);

// Run DFS
const result = ANode.depthFirstSearch([]);
console.log(result);