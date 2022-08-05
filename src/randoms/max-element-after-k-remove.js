const find_maximum_distinct_elements = function (nums, k) {
  const distinctNumbers = [];
  const frequencyMap = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
  }
  const compareFunction = (a, b) => a[1] - b[1];
  const minHeap = [];
  const keys = Object.keys(frequencyMap);

  for (let i = 0; i < keys.length; i++) {
    if (frequencyMap[keys[i]] === 1) {
      distinctNumbers.push(parseInt(keys[i]));
    } else {
      minHeap.push([parseInt(keys[i]), frequencyMap[keys[i]]]);
    }
  }

  minHeap.sort(compareFunction);

  while (k > 0 && minHeap.length > 0) {
    if (minHeap[0][1] > k + 1) {
      k = 0;
    } else {
      const currentNumber = minHeap[0];
      if (currentNumber[1] === 2) {
        distinctNumbers.push(currentNumber[0]);
        minHeap.shift();
      } else {
        minHeap[0][1]--;
      }

      k--;
    }
  }

  return distinctNumbers.length - k;
};

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [7, 3, 5, 8, 5, 3, 3],
    2
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [3, 5, 12, 11, 12],
    3
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    2
  )}`
);
