// @ts-nocheck
import { ListNode } from "./utils";

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;
  let aPointer = headA;
  let bPointer = headB;
  while (aPointer !== bPointer) {
    if (aPointer === null) {
      aPointer = headB;
    } else {
      aPointer = aPointer.next;
    }

    if (bPointer === null) {
      bPointer = headA;
    } else {
      bPointer = bPointer.next;
    }
  }
  return aPointer;
}
