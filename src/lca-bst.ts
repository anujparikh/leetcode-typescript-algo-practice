//@ts-nocheck
import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (
    (p.val < root.val && q.val < root.val) ||
    (p.val > root.val && q.val > root.val)
  ) {
    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
    } else {
      return lowestCommonAncestor(root.right, p, q);
    }
  }
  return root;
}
