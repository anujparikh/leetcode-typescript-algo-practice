const find_all_duplicates = function (nums) {
  duplicateNumbers = [];
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  for (let k = 0; k < nums.length; k++) {
    if (k + 1 !== nums[k] && duplicateNumbers.indexOf(nums[k]) === -1) {
      duplicateNumbers.push(nums[k]);
    }
  }
  return duplicateNumbers;
};
