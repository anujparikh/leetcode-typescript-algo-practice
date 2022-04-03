class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let currentLevelNodes = [];
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      currentLevelNodes.push(currentNode.value);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(currentLevelNodes);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);
