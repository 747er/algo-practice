let visiting; // is being explored
let visited; // is already explored
let graph;
let courses;

var canFinish = function (numCourses, prerequisites) {
  graph = new Map();
  visiting = {};
  visited = {};
  courses = {};

  for (course of prerequisites) {
    if (course[0] in courses) {
      courses[course[0]].push(course[1]);
    } else {
      courses[course[0]] = [course[1]];
    }
  }

  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (course in courses) {
    if (DFS(course, courses[course])) return false;
  }

  return true;
};

var DFS = function (v, edges) {
  visiting[v] = true;
  if (edges) {
    for (let e of edges) {
      if (e in visited) {
        //skip if it is explored already
        continue;
      }

      if (visiting[e]) {
        //found e is being explored
        return true;
      }

      if (DFS(e, courses[e])) {
        // DFS deeper if this e is cyclic
        return true;
      }
    }
  }

  delete visiting[v]; // remove from visiting set when all decedant v are visited
  visited[v] = true;
  return false;
};

let passingCaseOne = [[1, 0]];
let passingCaseTwo = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [3, 4],
];
let failingCase = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let falseNegative = [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
];
let failingCaseTwo = [
  [0, 10],
  [3, 18],
  [5, 5],
  [6, 11],
  [11, 14],
  [13, 1],
  [15, 1],
  [17, 4],
];
let passingpassing = [
  [1, 0],
  [1, 2],
];
let failingfailing = [
  [1, 0],
  [0, 1],
];
let falseNegative2 = [
  [1, 0],
  [2, 6],
  [1, 7],
  [6, 4],
  [7, 0],
  [0, 5],
];

expect(canFinish(2, passingCaseOne)).to.equal(true);
expect(canFinish(2, passingCaseTwo)).to.equal(true);
expect(canFinish(2, failingCase)).to.equal(false);
expect(canFinish(2, failingCaseTwo)).to.equal(false);
expect(canFinish(5, falseNegative)).to.equal(true);
expect(canFinish(5, passingpassing)).to.equal(true);
expect(canFinish(5, failingfailing)).to.equal(false);
