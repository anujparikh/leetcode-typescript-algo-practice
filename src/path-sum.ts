import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/path-sum/
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  if (targetSum - root.val === 0 && root.left === null && root.right === null)
    return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
