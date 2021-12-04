var expect = require("chai").expect;

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
}

const capacity = 2;
let cache = new LRUCache(capacity);
expect(cache).to.have.property("cache");
expect(cache).to.have.property("capacity");
expect(cache).to.have.property("capacity").with.equal(2);

cache.put(1, 1);
expect(cache.cache).to.have.property("1");
expect(Object.keys(cache.cache).length).to.equal(1);
expect(cache.cache[1]).to.equal(1);
cache.put(2, 2);
expect(cache.cache).to.have.property("2");
expect(Object.keys(cache.cache).length).to.equal(2);
expect(cache.cache[2]).to.equal(2);
let getOne = cache.get(1);
expect(cache.cache[1]).to.equal(1);

cache.put(3, 3);
expect(cache.cache).to.have.property("3");
expect(cache.cache).to.not.have.property("2");

// UNDEFINED
let getUndefined = cache.get(5);
expect(getUndefined).to.equal("Not Found");

// OVER CAPACITY
expect(Object.keys(cache.cache).length).to.be.below(capacity + 1);

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

// expect(cache).to.be.a(object);
// expect(foo).to.equal("bar");
// expect(foo).to.have.lengthOf(3);
// expect(beverages).to.have.property("tea").with.lengthOf(3);
// expect(beverages.tea[1]).to.equal("matcha");
