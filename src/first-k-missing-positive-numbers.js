const find_first_k_missing_positive = function (nums, k) {
  missingNumbers = [];
  let i = 0;
  let uniqueNumber = new Set();
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] < 0 || nums[i] >= nums.length || nums[i] === nums[j]) {
      if (nums[i] > nums.length) {
        uniqueNumber.add(nums[i]);
      }
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let counter = 0;
  while (k > 0 && counter < nums.length) {
    if (nums[counter] !== counter + 1 && !uniqueNumber.has(nums[counter])) {
      missingNumbers.push(counter + 1);
      k--;
    }
    counter++;
  }

  while (k > 0) {
    if (!uniqueNumber.has(counter + 1)) {
      missingNumbers.push(counter + 1);
      k--;
    }
    counter++;
  }
  return missingNumbers;
};
