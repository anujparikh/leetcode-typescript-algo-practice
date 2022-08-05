import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/path-sum-ii/
 */
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const allPaths: number[][] = [];
  const currentPath: number[] = [];
  hasSumWithPath(root, targetSum, currentPath, allPaths);
  return allPaths;
}

function hasSumWithPath(
  currentNode: TreeNode | null,
  sum: number,
  currentPath: number[],
  allPaths: number[][]
) {
  if (currentNode === null) {
    return;
  }
  currentPath.push(currentNode.val);
  if (
    currentNode.val === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push([...currentPath]);
  } else {
    hasSumWithPath(
      currentNode.left,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
    hasSumWithPath(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }
  currentPath.pop();
}
