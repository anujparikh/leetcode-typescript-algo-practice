// @ts-nocheck
import { ListNode } from "./utils";

export default (head: ListNode | null): ListNode | null => {
  if (head === null) {
    return head;
  }
  let updateListNode = head;
  let currentListNode = head;
  while (currentListNode !== null) {
    if (currentListNode.val !== updateListNode.val) {
      updateListNode = updateListNode.next;
      updateListNode.val = currentListNode.val;
    }
    currentListNode = currentListNode.next;
  }
  updateListNode.next = null;
  return head;
};
