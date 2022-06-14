const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const merge_lists = function(lists) {
    resultHead = null;
    resultTail = null;
    const minHeap = new Heap(null, null, (a, b) => b.value - a.value);
    lists.forEach((a) => {
      if (a !== null) {
        minHeap.push(a)
      }
    })
    while (minHeap.length > 0) {
        const node = minHeap.pop();
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next !== null) {
            minHeap.push(node.next);
        }
    }
    return resultHead;
};
