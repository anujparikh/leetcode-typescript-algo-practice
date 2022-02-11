/**
 * Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
 *
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 */
/**
 * Java Solution with Hashmap
 * public class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap < Integer, Integer > map = new HashMap < > ();
        map.put(0, 1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.containsKey(sum - k))
                count += map.get(sum - k);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
 */
/**
 * Using cumulative sum
 * Create new array with start 0 and rest index would be cumulative sum
 * [1,1,1] => [0,1,2,3]
 */
// export default (nums: number[], k: number): number => {
//   let subArrayCount = 0;
//   let sumArray = [0];
//   for (let i = 0; i < nums.length; i++) {
//     sumArray[i + 1] = sumArray[i] + nums[i];
//   }
//   for (let start = 0; start < sumArray.length; start++) {
//     for (let end = start + 1; end < sumArray.length; end++) {
//       if (sumArray[end] - sumArray[start] === k) {
//         subArrayCount++;
//       }
//     }
//   }
//   return subArrayCount;
// };

/**
 * Using Hashmap
 */
export default (nums: number[], k: number): number => {
  let subArrayCount = 0;
  const sumMapping: any = { 0: 1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sumMapping[sum - k]) {
      subArrayCount += sumMapping[sum - k];
    }
    sumMapping[sum] = sumMapping[sum] ? sumMapping[sum] + 1 : 1;
  }
  return subArrayCount;
};
