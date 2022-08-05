//@ts-nocheck
/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * @param head
 * @returns
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./utils";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }
  let secondHead = findCenterOfLinkedList(head);
  let reversedSecondHalfHead = reverseLinkedList(secondHead);

  while (head !== null && reversedSecondHalfHead !== null) {
    if (head.val !== reversedSecondHalfHead.val) return false;
    head = head.next;
    reversedSecondHalfHead = reversedSecondHalfHead.next;
  }

  return true;
}

function findCenterOfLinkedList(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let previous = null;
  let next = null;
  let current = head;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
