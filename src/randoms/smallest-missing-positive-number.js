const find_first_smallest_missing_positive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] < 0 || nums[i] === nums[j]) {
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      return k + 1;
    }
  }
  return -1;
};
