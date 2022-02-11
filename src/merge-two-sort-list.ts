// @ts-nocheck
/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */
import { ListNode } from "./utils";

export default (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (list1 === null && list2 === null) return null;
  if (list1 === null && list2 !== null) return list2;
  if (list1 !== null && list2 === null) return list1;
  let listR: ListNode | null = new ListNode(-1, null);
  let listDummy: ListNode | null = new ListNode(-1, null);
  listR.next = listDummy;

  while (list1 !== null && list2 !== null) {
    if (list1?.val < list2?.val) {
      listDummy.next = list1;
      list1 = list1?.next;
    } else {
      listDummy.next = list2;
      list2 = list2?.next;
    }
    listDummy = listDummy.next;
  }
  listDummy.next = list1 ? list1 : list2;
  return listR.next.next;
};
