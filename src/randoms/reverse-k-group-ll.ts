//@ts-nocheck
/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 */
import { ListNode } from "./utils";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let current = head;
  let length = 0;
  while (current !== null) {
    current = current.next;
    length++;
  }
  let counter = ~~(length / k);
  let times = 0;
  while (times < counter) {
    head = reverseSubList(head, times * k + 1, (times + 1) * k);
    times++;
  }
  return head;
}

const reverseSubList = function (
  head: ListNode | null,
  p: number,
  q: number
): ListNode | null {
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

  previous = null;
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
};
