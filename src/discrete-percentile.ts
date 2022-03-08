export default (nums: Array<number>, percentile: number): number => {
  if (nums.length === 0) {
    return -1;
  }
  nums.sort((x, y) => x - y);
  return nums[Math.floor(((nums.length - 1) * percentile) / 100)];
};
