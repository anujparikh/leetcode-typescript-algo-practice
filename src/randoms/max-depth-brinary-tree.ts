import { TreeNode } from "./utils";

export default (root: TreeNode | null): number => {
  return calculateDepth(root);
};

const calculateDepth = (root: TreeNode | null): number => {
  if (root === null) return 0;
  return 1 + Math.max(calculateDepth(root.left), calculateDepth(root.right));
};
