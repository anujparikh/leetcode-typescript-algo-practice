/**
 * https://leetcode.com/problems/path-sum-iii/
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./utils";

function pathSum(root: TreeNode | null, targetSum: number): number {
  return findPaths(root, targetSum, []);
}

function findPaths(
  currentNode: TreeNode | null,
  targetSum: number,
  currentPath: number[]
): number {
  let pathCount = 0;
  let pathSum = 0;
  if (currentNode === null) {
    return 0;
  }
  currentPath.push(currentNode.val);
  for (let i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];
    if (pathSum === targetSum) {
      pathCount++;
    }
  }
  pathCount += findPaths(currentNode.left, targetSum, [...currentPath]);
  pathCount += findPaths(currentNode.right, targetSum, [...currentPath]);

  return pathCount;
}
