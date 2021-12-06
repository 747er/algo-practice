// LRU CACHE
const { expect } = require("chai");

class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.cache = new Map();
  }

  insertKeyValuePair(id, val) {
    if (this.cache.size >= this.maxSize) {
      console.log("at capacity: ", id);
      const last = this.cache.keys().next().value;
      console.log("deleting :", last);
      this.cache.delete(last);
    }
    this.cache.set(id, val);
  }

  getValueFromKey(id) {
    let temp = this.cache.get(id);
    if (temp) {
      this.cache.delete(id);
      this.cache.set(id, temp);
    }

    return this.cache.get(id) ?? null;
  }

  getMostRecentKey() {
    return Array.from(this.cache.keys()).pop();
  }
}

lRUCache = new LRUCache(2);

expect(lRUCache).to.exist;
expect(lRUCache).to.have.property("maxSize");

lRUCache.insertKeyValuePair("b", 2);
lRUCache.insertKeyValuePair("a", 1);
lRUCache.insertKeyValuePair("c", 3);
expect(lRUCache.getMostRecentKey()).to.equal("c");
expect(lRUCache.getValueFromKey("a")).to.equal(1);
expect(lRUCache.getMostRecentKey()).to.equal("a");
lRUCache.insertKeyValuePair("d", 4);
expect(lRUCache.getValueFromKey("b")).to.equal(null);
