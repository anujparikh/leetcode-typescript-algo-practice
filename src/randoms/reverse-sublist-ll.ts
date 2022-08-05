//@ts-nocheck
import { ListNode } from "./utils";

function reverseBetween(
  head: ListNode | null,
  p: number,
  q: number
): ListNode | null {
  if (p === q) return head;
  let current = head;
  let previous = null;
  let counter = 0;
  while (current !== null && counter < p - 1) {
    previous = current;
    current = current.next;
    counter++;
  }
  let lastNodeOfFirstPart = previous;
  let lastNodeOfSubList = current;
  counter = 0;
  let next = null;
  while (current !== null && counter < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    counter++;
  }
  if (lastNodeOfFirstPart !== null) {
    lastNodeOfFirstPart.next = previous;
  } else {
    head = previous;
  }
  lastNodeOfSubList.next = current;
  return head;
}
