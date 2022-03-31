function findKthPositive(nums: number[], k: number): number {
  const missingPositiveNumbers = [];
  const set = new Set();
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] < 0 || nums[i] > nums.length || nums[i] === nums[j]) {
      if (nums[i] > nums.length) {
        set.add(nums[i]);
      }
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  let counter = 0;
  while (missingPositiveNumbers.length <= k) {
    if (counter < nums.length) {
      if (nums[counter] !== counter + 1) {
        missingPositiveNumbers.push(counter + 1);
      }
    } else {
      if (!set.has(counter + 1)) {
        missingPositiveNumbers.push(counter + 1);
      }
    }
    counter++;
  }

  return missingPositiveNumbers[k - 1];
}
