export default (nums: number[], target: number): number[] => {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [-1, -1];
};
