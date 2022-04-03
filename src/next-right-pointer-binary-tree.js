/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root;
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
    for (let j = 0; j < currentLevelNodes.length - 1; j++) {
      currentLevelNodes[j].next = currentLevelNodes[j + 1];
    }
  }

  return root;
};
