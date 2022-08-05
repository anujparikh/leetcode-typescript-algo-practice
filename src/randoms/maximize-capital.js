/**
 *
 * @param {https://leetcode.com/problems/ipo/} capital
 * @param {*} profits
 * @param {*} numberOfProjects
 * @param {*} initialCapital
 * @returns
 */
const Heap = require("collections/heap");
const find_maximum_capital = function (
  capital,
  profits,
  numberOfProjects,
  initialCapital
) {
  let maxProfitHeap = new Heap([], null, (a, b) => a - b);
  let minHeapCapital = new Heap([], null, (a, b) => b[0] - a[0]);

  capital.forEach((c, i) => minHeapCapital.push([c, i]));

  while (numberOfProjects > 0) {
    while (
      minHeapCapital.peek() &&
      minHeapCapital.peek()[0] <= initialCapital
    ) {
      const [capital, index] = minHeapCapital.pop();
      maxProfitHeap.push(profits[index]);
    }
    if (maxProfitHeap.length === 0) {
      break;
    }
    initialCapital += maxProfitHeap.peek();
    numberOfProjects--;
  }
  return initialCapital;
};
