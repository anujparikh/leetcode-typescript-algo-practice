/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/submissions/
 */
var maxPathSum = function (root) {
  let max = -Infinity;
  const maxSumForCurrentNode = (currentNode) => {
    if (currentNode === null) {
      return 0;
    }
    const lh = Math.max(maxSumForCurrentNode(currentNode.left), 0);
    const rh = Math.max(maxSumForCurrentNode(currentNode.right), 0);

    max = Math.max(max, lh + rh + currentNode.val);

    return Math.max(lh, rh) + currentNode.val;
  };
  maxSumForCurrentNode(root);
  return max;
};
