import { TreeNode } from "./utils";

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
}
