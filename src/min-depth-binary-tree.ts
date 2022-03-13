// @ts-nocheck
import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */
function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const queue: Array<TreeNode | null> = [];
  let depth = 1;
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    while (size-- > 0) {
      const currentNode = queue.shift();
      if (currentNode?.left === null && currentNode.right === null)
        return depth;
      if (currentNode?.left !== null) queue.push(currentNode.left);
      if (currentNode?.right !== null) queue.push(currentNode.right);
    }
    depth++;
  }
  return 0;
}
