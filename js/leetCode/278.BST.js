const expect = require("chai").expect;

var solution = function (isBadVersion) {
  return function (n) {
    var start = 1,
      end = n;
    while (start <= end) {
      var mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
