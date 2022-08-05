class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  let foundKey = false;
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (foundKey) {
        return currentNode;
      }
      if (currentNode.val === key) {
        foundKey = true;
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
  return null;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

result = find_successor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

let result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}

result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
