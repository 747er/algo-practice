var expect = require("chai").expect;

class Logger {
  constructor() {
    this.cache = new Map();
  }

  shouldPrintMessage = function (timestamp, message) {
    let usedAt = this.cache.has(message) ? this.cache.get(message) : false;

    if (usedAt && usedAt + 10 > timestamp) {
      console.log(timestamp);
      return `false, ${timestamp} < ${usedAt + 10}`;
    }

    this.cache.set(message, timestamp);
    return `true, next allowed timestamp for "${message}" is ${timestamp} + 10 = ${
      timestamp + 10
    }`;
  };
}

obj = new Logger();
expect(obj).to.have.property("shouldPrintMessage");

const result1 = obj.shouldPrintMessage(1, "foo");
console.log(result1);
expect(result1).to.equal(
  'true, next allowed timestamp for "foo" is 1 + 10 = 11'
);

const result2 = obj.shouldPrintMessage(2, "bar");
expect(result2).to.equal(
  'true, next allowed timestamp for "bar" is 2 + 10 = 12'
);

const result3 = obj.shouldPrintMessage(3, "foo");
expect(result3).to.equal("false, 3 < 11");

const result4 = obj.shouldPrintMessage(8, "bar");
expect(result4).to.equal("false, 8 < 12");

const result6 = obj.shouldPrintMessage(11, "foo");
expect(result6).to.equal(
  'true, next allowed timestamp for "foo" is 11 + 10 = 21'
);

// obj.shouldPrintMessage(1,"foo")

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

// logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
// logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
// logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
// logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
