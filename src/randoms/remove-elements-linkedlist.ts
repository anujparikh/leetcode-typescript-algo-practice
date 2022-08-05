/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 */
import { ListNode } from "./utils";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head !== null && head.val === val) {
    head = head.next;
  }
  let dummy = head;
  while (head !== null && head.next !== null) {
    if (head.next.val === val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return dummy;
}
