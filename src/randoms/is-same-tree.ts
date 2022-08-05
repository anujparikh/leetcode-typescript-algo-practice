// @ts-nocheck
import { TreeNode } from "./utils";

/**
 * https://leetcode.com/problems/same-tree/
 */
export default (ip: TreeNode | null, iq: TreeNode | null): boolean => {
  const queue: Array<TreeNode> = [];
  queue.push(ip);
  queue.push(iq);

  while (queue.length !== 0) {
    const p = queue.pop();
    const q = queue.pop();

    if (p === null && q === null) continue;
    if (
      (p !== null && q === null) ||
      (p === null && q !== null) ||
      p.val !== q.val
    )
      return false;

    queue.push(p.left);
    queue.push(q.left);
    queue.push(p.right);
    queue.push(q.right);
  }

  return true;
};

const recurrsionMethodIsSame = (
  p: TreeNode | null,
  q: TreeNode | null
): boolean => {
  if (p === null && q === null) return true;
  if (
    (p !== null && q === null) ||
    (p === null && q !== null) ||
    p.val !== q.val
  )
    return false;
  return (
    recurrsionMethodIsSame(p?.left, q?.left) &&
    recurrsionMethodIsSame(p?.right, q?.right)
  );
};
