//@ts-nocheck
import { ListNode } from "./utils";

/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 */
function deleteNode(root: ListNode | null): void {
  root.val = root.next.val;
  root.next = root.next.next;
}
