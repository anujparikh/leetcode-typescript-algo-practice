/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default (head: ListNode | null): ListNode | null => {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let previous = dummy;
  let current = head;

  while (current !== null && current.next !== null) {
    const nextPair = current.next.next;
    const second = current.next;

    current.next = nextPair;
    second.next = current;
    previous.next = second;

    previous = current;
    current = nextPair;
  }
  return dummy.next;
};
