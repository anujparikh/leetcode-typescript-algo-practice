/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 */
export default (nums: number[]): number[][] => {
  let result: any = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push([nums[0]], []);
    } else {
      const tempArray = [];
      for (let j = 0; j < result.length; j++) {
        const currentArray = [...result[j]];
        currentArray.push(nums[i]);
        tempArray.push(currentArray);
      }
      result = [...result, ...tempArray];
    }
  }
  return result;
};
