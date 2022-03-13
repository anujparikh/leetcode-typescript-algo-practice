/**
 * https://leetcode.com/problems/balanced-binary-tree/
 */
import { TreeNode } from "./utils";

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  const result = heightOfBinaryTree(root);
  return result !== -1;
}

const heightOfBinaryTree = (root: TreeNode | null): number => {
  if (root === null) return 1;
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
};
