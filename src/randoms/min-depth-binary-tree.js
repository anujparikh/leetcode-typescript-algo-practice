/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let queue = [];
  let counter = 0;
  if (root === null) {
    return 0;
  }
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    counter++;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (currentNode.left === null && currentNode.right === null) {
        return counter;
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
  return -1;
};
