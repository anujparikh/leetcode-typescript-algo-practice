export default (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const midpoint = (left + right) >>> 1;
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }
  if (target > nums[nums.length - 1]) {
    right = left;
    left = 0;
  } else {
    right = nums.length - 1;
  }
  let midpoint = -1;
  while (left <= right) {
    midpoint = (left + right) >>> 1;
    if (target === nums[midpoint]) return midpoint;
    if (target < nums[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
  return nums[midpoint] === target ? midpoint : -1;
};
