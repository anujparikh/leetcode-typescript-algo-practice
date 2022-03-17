export default (nums: Array<number>, k: number): number => {
  const indexToInsertWithinSortedArray = (
    input: Array<number>,
    numberToBeInserted: number
  ) => {
    let low = 0;
    let high = input.length;

    while (low < high) {
      const midpoint = (low + high) >>> 1;
      if (input[midpoint] === numberToBeInserted) return midpoint;
      else if (input[midpoint] > numberToBeInserted) {
        high = midpoint - 1;
      } else {
        low = midpoint + 1;
      }
    }

    return low;
  };

  if (nums.length === 0) return 0;

  let minHeapArray: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    const index = indexToInsertWithinSortedArray(minHeapArray, nums[i]);
    minHeapArray = [
      ...minHeapArray.slice(0, index),
      nums[i],
      ...minHeapArray.slice(index),
    ];
  }

  return minHeapArray[minHeapArray.length - k];
};
