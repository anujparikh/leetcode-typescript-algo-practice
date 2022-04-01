const find_missing_numbers = function (nums) {
  const missingNumbers = [];
  const mappingArray = new Array(nums.length);
  let counter = 0;
  while (counter < nums.length) {
    mappingArray[nums[counter] - 1] = nums[counter];
    counter++;
  }
  for (let i = 0; i < mappingArray.length; i++) {
    if (mappingArray[i] !== i + 1) missingNumbers.push(i + 1);
  }
  return missingNumbers;
};
