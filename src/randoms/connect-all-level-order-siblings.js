class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    result = "Traversal using 'next' pointer: ";
    current = this;
    while (current != null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function (root) {
  if (root === null) {
    return root;
  }
  let queue = [];
  let lastPreviousLevelNode = null;
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let currentLevelNodes = [];
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      currentLevelNodes.push(currentNode);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    if (lastPreviousLevelNode !== null) {
      lastPreviousLevelNode.next = currentLevelNodes[0];
    }
    for (let j = 0; j < currentLevelNodes.length - 1; j++) {
      currentLevelNodes[j].next = currentLevelNodes[j + 1];
    }
    if (currentLevelNodes.length > 0) {
      lastPreviousLevelNode = currentLevelNodes[currentLevelNodes.length - 1];
    }
  }
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
