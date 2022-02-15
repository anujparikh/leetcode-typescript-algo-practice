/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * Input: nums = [2,2,1]
 * Output: 1
 */
export default (nums: number[]): number => {
  const map: any = {};
  nums.forEach((num: number) => {
    map[num] = map[num] === undefined ? true : false;
  });
  const keys = Object.keys(map);
  return parseInt(keys.find((num) => map[num]) || "-1");
};
