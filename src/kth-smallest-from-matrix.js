const Heap = require("./collections/heap"); //http://www.collectionsjs.com

// const find_Kth_smallest = function (matrix, k) {
//   const minHeap = new Heap(null, null, (a, b) => b[0] - a[0]);
//   for (let i = 0; i < Math.min(matrix.length, k); i++) {
//     minHeap.push([matrix[i][0], 0, matrix[i]]);
//   }
//   while (minHeap.length > 0) {
//     k--;
//     const [current, index, list] = minHeap.pop();
//     if (k === 0) return current;
//     if (list.length > index + 1) {
//       minHeap.push([list[index + 1], index + 1, list]);
//     }
//   }
//   return -1;
// };

var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0],
    end = matrix[n - 1][n - 1];
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    const [count, smaller, larger] = count_less_equal(
      matrix,
      mid,
      matrix[0][0],
      matrix[n - 1][n - 1]
    );

    if (count === k) {
      return smaller;
    }
    if (count < k) {
      start = larger; // search higher
    } else {
      end = smaller; // search lower
    }
  }

  return start;
};

function count_less_equal(matrix, mid, smaller, larger) {
  let count = 0,
    n = matrix.length;
  let row = n - 1,
    col = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      // as matrix[row][col] is bigger than the mid, let's keep track of the
      // smallest number greater than the mid
      larger = Math.min(larger, matrix[row][col]);
      row -= 1;
    } else {
      // as matrix[row][col] is less than or equal to the mid, let's keep track of the
      // biggest number less than or equal to the mid
      smaller = Math.max(smaller, matrix[row][col]);
      count += row + 1;
      col += 1;
    }
  }

  return [count, smaller, larger];
}
