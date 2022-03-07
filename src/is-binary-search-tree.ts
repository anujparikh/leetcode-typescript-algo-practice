import { TreeNode } from "./utils";

export default (root: TreeNode | null): boolean => {
  if (root === null) return true;
  return isWithinRange(root, null, null);
};

const isWithinRange = (
  input: TreeNode | null,
  min: number | null,
  max: number | null
): boolean => {
  if (input === null) return true;
  if ((min !== null && input.val < min) || (max !== null && input.val > max))
    return false;
  return (
    isWithinRange(input.left, min, input.val - 1) &&
    isWithinRange(input.right, input.val + 1, max)
  );
};
