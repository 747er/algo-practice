const { expect } = require("chai");

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

// word.each(letter) {
// head = first
// next = i + 1
// last = prev
// prev = this
// }
// a -> p -> p -> l -> e -> isword

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
trie = new Trie();
trie.insert("apple");
let searchResult = trie.search("apple"); // return True // return True
// let searchResult = trie.search("applz"); // return True
// trie.search("app"); // return False
// trie.insert("app");
// trie.search("app"); // return True

expect(searchResult).to.equal(true);
expect(searchResult).to.equal(true);
