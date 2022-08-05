import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/symmetric-tree/
 */
export default (root: TreeNode | null): boolean => {
  if (root === null) return true;
  return helperFunction(root.left, root.right);
};

function helperFunction(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return helperFunction(p?.left, q?.right) && helperFunction(p?.right, q?.left);
}
