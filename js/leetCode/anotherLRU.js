const expect = require("chai").expect;

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(id) {
    // return this.cache.get(id) ?? -1
    if (!this.cache.has(id)) return -1;

    // MOVE ID TO TOP OF CACHE HERE
    const v = this.cache.get(id);
    this.cache.delete(id);
    this.cache.set(id, v);

    return this.cache.get(id);
  }

  put(id, value) {
    if (this.cache.has(id)) {
      this.cache.delete(id);
    }

    this.cache.set(id, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    return this.cache.get(id);
  }
}

let cache = new LRUCache(2);
expect(true).to.equal(true);
expect(cache.capacity).to.equal(2);
expect(cache.cache).to.exist;

expect(cache.put(1, 1)).to.equal(1);
expect(cache.put(2, 2)).to.equal(2);
expect(cache.get(22)).to.equal(-1);
expect(cache.get(1)).to.equal(1);
expect(cache.put(3, 3)).to.equal(3);

expect(cache.cache.size).to.equal(2);
console.log(cache.cache.get(1));
console.log(cache.cache.get(2));
console.log(cache.cache.get(3));
expect(cache.get(2)).to.equal(-1);

// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}

// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
