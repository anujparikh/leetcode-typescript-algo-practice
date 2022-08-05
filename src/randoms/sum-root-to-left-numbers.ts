import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */
function sumNumbers(root: TreeNode | null): number {
  return findSum(root, "");
}

function findSum(currentNode: TreeNode | null, currentNumber: string): number {
  if (currentNode === null) return 0;
  currentNumber += currentNode.val;
  if (currentNode.left === null && currentNode.right === null) {
    return parseInt(currentNumber);
  }
  return (
    findSum(currentNode.left, currentNumber) +
    findSum(currentNode.right, currentNumber)
  );
}
