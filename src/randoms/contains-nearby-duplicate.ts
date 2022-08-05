/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param nums
 * @param k
 * @returns
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const occurenceMap: any = {};
  let counter = 0;
  let windowStart = 0;
  let windowEnd = k + 1;

  while (counter <= k && counter < nums.length) {
    if (occurenceMap[nums[counter]]) return true;
    occurenceMap[nums[counter++]] = true;
  }

  while (windowEnd < nums.length) {
    occurenceMap[nums[windowStart++]] = false;
    if (occurenceMap[nums[windowEnd]]) return true;
    occurenceMap[nums[windowEnd++]] = true;
  }

  return false;
}
