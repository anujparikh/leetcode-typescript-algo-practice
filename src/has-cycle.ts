import { ListNode } from "./utils";

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null || head.next.next === null)
    return false;

  let slowPointer: ListNode | null = head.next;
  let fastPointer: ListNode | null = head.next.next;

  while (fastPointer && fastPointer.next) {
    if (slowPointer === fastPointer) return true;
    slowPointer = slowPointer?.next || null;
    fastPointer = fastPointer.next.next;
  }

  return false;
}
