//@ts-nocheck
import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */
function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  if (root === null) {
    return result;
  }
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let level: number[] = [];
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(level);
  }
  return result;
}
