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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let evenLevel = true;
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    const currentLevelNodes = [];
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      if (evenLevel) {
        currentLevelNodes.push(currentNode.val);
      } else {
        currentLevelNodes.unshift(currentNode.val);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevelNodes);
    evenLevel = !evenLevel;
  }
  return result;
};
