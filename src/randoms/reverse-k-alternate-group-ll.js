class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_alternate_k_elements = function (head, k) {
  let length = 0;
  let current = head;
  while (current !== null) {
    current = current.next;
    length++;
  }
  let noOfIteration = Math.ceil(length / k);
  let counter = 0;
  while (counter < noOfIteration) {
    if (counter % 2 === 0) {
      head = reverseSubList(head, counter * k + 1, (counter + 1) * k);
    }
    counter++;
  }
  return head;
};

const reverseSubList = function (head, p, q) {
  let counter = 0;
  let current = head;
  let previous = null;
  while (current !== null && counter < p - 1) {
    previous = current;
    current = current.next;
    counter++;
  }

  let lastForFirstPart = previous;
  let lastForSubList = current;

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

  if (lastForFirstPart !== null) {
    lastForFirstPart.next = previous;
  } else {
    head = previous;
  }

  lastForSubList.next = current;

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(
    head,
    10
  ).get_list()}`
);
