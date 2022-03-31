const find_missing_number = function (nums) {
  const totalIdealSum = (nums.length * (nums.length + 1)) / 2;
  const currentTotalSum = nums.reduce((a, b) => a + b, 0);
  return totalIdealSum - currentTotalSum;
};
