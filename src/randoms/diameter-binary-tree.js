/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  if (root === null) return 0;

  const dfs = (currentNode) => {
    if (currentNode === null) {
      return 0;
    }
    const lh = dfs(currentNode.left);
    const rh = dfs(currentNode.right);

    max = Math.max(max, lh + rh);

    return Math.max(lh, rh) + 1;
  };

  dfs(root);
  return max;
};
