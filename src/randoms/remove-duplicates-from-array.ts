export default (nums: number[]): number => {
  if (nums.length === 1) return 1;
  let updatePointer = 0;
  let currentPointer = 0;
  while (currentPointer < nums.length) {
    if (nums[currentPointer] !== nums[updatePointer]) {
      nums[++updatePointer] = nums[currentPointer];
    }
    currentPointer++;
  }
  return updatePointer + 1;
};
