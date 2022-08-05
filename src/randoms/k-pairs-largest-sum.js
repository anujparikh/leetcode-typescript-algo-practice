const Heap = require("./collections/heap"); //http://www.collectionsjs.com

const find_k_largest_pairs = function (nums1, nums2, k) {
  const result = [];
  const maxHeap = new Heap(null, null, (a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      maxHeap.push([nums1[i], nums2[j]]);
    }
  }
  while (k > 0) {
    result.push(maxHeap.pop());
    k--;
  }
  return result;
};
