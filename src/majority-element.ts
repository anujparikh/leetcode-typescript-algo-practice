function majorityElement(nums: number[]): number {
  const apperanceMap: { [key: number]: number } = {};
  let majorityNumber = nums[0];
  for (let i = 0; i < nums.length; i++) {
    apperanceMap[nums[i]] = (apperanceMap[nums[i]] || 0) + 1;
    if (apperanceMap[nums[i]] > ~~(nums.length / 2)) return nums[i];
  }

  return majorityNumber;
}
