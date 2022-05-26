const Heap = require('./collections/heap'); //http://www.collectionsjs.com
const minimum_cost_to_connect_ropes = function(ropeLengths) {
  let individualCosts = [];
  let minHeap = new Heap(ropeLengths, null, (a, b) => {
    return b - a
  });

  while (minHeap.length > 1) {
    const currentCost = minHeap.pop() + minHeap.pop();
    individualCosts.push(currentCost);
    minHeap.push(currentCost);
  }
  return individualCosts.reduce((prev, current) => current + prev, 0);
};


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)