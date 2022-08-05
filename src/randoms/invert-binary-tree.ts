import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/invert-binary-tree/submissions/
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  if (root !== null) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);

  return root;
}
