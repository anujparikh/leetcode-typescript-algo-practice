import { ListNode } from "./utils";

export default (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) return head;
  let previous = null;
  let next = null;
  let current: ListNode | null = head;
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
