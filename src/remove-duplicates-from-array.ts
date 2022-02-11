export default (nums: number[]): number => {
  if (nums.length === 1) return 1;
  let updatePointer = 0;
  let currentPointer = 0;
  let previousValue = undefined;
  while (currentPointer < nums.length) {
    if (nums[currentPointer] !== previousValue) {
      nums[updatePointer] = nums[currentPointer];
      previousValue = nums[currentPointer];
      updatePointer++;
    }
    currentPointer++;
  }
  return updatePointer;
};
