// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

// var connect = function(root) {
//   var q = [];
//   root.next = null;
//   var dummy = new TreeLinkNode(null);
//   q.push(root);
//   q.push(dummy);

//   while(q.length > 1) {
//     curr = q.shift();
//     if (curr !== dummy) {
//       if (curr.left !== null) q.push(curr.left);
//       if (curr.right !== null) q.push(curr.right);
//     }
//     else { //curr === dummy
//       q.push(curr);

//       for (var i = 0; i < q.length - 1; i++) {
//         q[i].next = (q[i+1] === dummy) ? null : q[i+1];
//       }
//     }
//   }
// };

var connectBFS = function (root) {
  if (root == null) return root;
  let queue = [root];
  while (queue.length != 0) {
    let next = [];
    while (queue.length != 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left != null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};

var connectDFS = function (root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n4.right = n7;
connect(n1);

console.log(n2.next);
