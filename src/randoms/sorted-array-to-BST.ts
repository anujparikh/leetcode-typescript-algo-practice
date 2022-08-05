import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */
export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) return null;
  const mid = (0 + nums.length) >>> 1;
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );
};
