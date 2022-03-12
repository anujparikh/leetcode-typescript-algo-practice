// @ts-nocheck
import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
export default (root: TreeNode | null): number[] => {
  if (root === null) {
    return [];
  }
  const outputArray: number[] = [];
  const stackArray: Array<TreeNode> = [];
  let current: TreeNode | null = root;

  while (current !== null || stackArray.length !== 0) {
    while (current !== null) {
      stackArray.push(current);
      current = current.left;
    }
    current = stackArray.pop();
    outputArray.push(current.val);
    current = current.right;
  }

  return outputArray;
};
