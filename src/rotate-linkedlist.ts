//@ts-nocheck
/**
 * https://leetcode.com/problems/rotate-list/
 */

import { ListNode } from "./utils";

function rotateRight(
  head: ListNode | null,
  rotations: number
): ListNode | null {
  let length = 0;
  let current = head;

  while (current !== null) {
    current = current.next;
    length++;
  }
  rotations = rotations % length;
  if (head === null || length === 1 || rotations === 0) {
    return head;
  }
  let previous = null;
  let slow = head;
  let fast = head;
  let counter = 0;

  while (counter < rotations) {
    fast = fast.next;
    counter++;
  }
  while (counter < length) {
    previous = slow;
    slow = slow.next;
    fast = fast.next;
    counter++;
  }

  let newHead = slow;
  previous.next = null;

  while (slow.next !== null) {
    slow = slow.next;
  }
  slow.next = head;

  return newHead;
}
