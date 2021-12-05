// LRU CACHE
const { expect } = require("chai");

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(id) {
    let temp = this.cache.get(id);
    if (temp) {
      this.cache.delete(id);
      this.cache.set(id, temp);
    }

    return this.cache.get(id) ?? -1;
  }

  put(id, val) {
    if (this.cache.size >= this.capacity) {
      const last = this.cache.keys().next().value;
      this.cache.delete(last);
    }
    this.cache.set(id, val);
  }
}

lRUCache = new LRUCache(2);

expect(lRUCache).to.exist;
expect(lRUCache).to.have.property("capacity");

// ADD ONE
lRUCache.put(1, 1);
expect(lRUCache.cache.get(1)).to.equal(1);

// ADD TWO
lRUCache.put(2, 2);
expect(lRUCache.cache.get(2)).to.equal(2);

// GET ONE
expect(lRUCache.get(1)).to.equal(1);

// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.put(3, 3);
expect(lRUCache.get(1)).to.equal(1);
expect(lRUCache.get(3)).to.equal(3);

// lRUCache.get(2);    // returns -1 (not found)
expect(lRUCache.get(2)).to.equal(-1);

// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.put(4, 4);
expect(lRUCache.get(4)).to.equal(4);

// lRUCache.get(1);    // return -1 (not found)
expect(lRUCache.get(1)).to.equal(-1);

// lRUCache.get(3);    // return 3
expect(lRUCache.get(3)).to.equal(3);

// lRUCache.get(4);    // return 4
expect(lRUCache.get(4)).to.equal(4);
