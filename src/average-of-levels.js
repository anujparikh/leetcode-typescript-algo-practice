/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */
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
var averageOfLevels = function (root) {
  let result = [];
  if (root === null) {
    return [0];
  }
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let currentLevelNodes = [];
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      currentLevelNodes.push(currentNode.val);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    const totalSum = currentLevelNodes.reduce((a, b) => a + b, 0);
    result.push(totalSum / currentLevelNodes.length);
  }
  return result;
};
