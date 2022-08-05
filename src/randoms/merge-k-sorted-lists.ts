import { ListNode } from "./utils";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  let counter = 1;
  let result = lists[0];
  while (counter < lists.length) {
    result = merge2List(result, lists[counter]);
    counter++;
  }
  return result;
}

function merge2List(l1: ListNode | null, l2: ListNode | null) {
  let dummy = new ListNode(-1, null);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  dummy.next = l1 === null ? l2 : l1;

  return head.next;
}
