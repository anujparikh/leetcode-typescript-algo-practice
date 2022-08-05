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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let size = queue.length;
    const currentLevelNodes = [];
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      currentLevelNodes.push(currentNode);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevelNodes[currentLevelNodes.length - 1].val);
  }
  return result;
};
