/**
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 * 0 <= i < j < nums.length
 * |nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 */
export default (nums: number[], k: number): number => {
  const obj: any = {};
  let totalPairs = 0;
  if (k === 0) {
    const set = new Set();
    nums.forEach((n) => {
      if (obj[n] && !set.has(n)) {
        totalPairs++;
        set.add(n);
      } else obj[n] = true;
    });
  } else {
    nums.forEach((n) => (obj[n] = true));
    Object.keys(obj).forEach((key) => {
      if (obj[parseInt(key) - k]) {
        totalPairs++;
      }
    });
  }

  return totalPairs;
};

// O(n^2) solution
// export default (nums: number[], k: number): number => {
//   const pairs: any = {};
//   let totalPairs = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) {
//         if (pairs[nums[i] < nums[j] ? nums[i] : nums[j]] === undefined) {
//           totalPairs++;
//           pairs[nums[i] < nums[j] ? nums[i] : nums[j]] =
//             nums[i] < nums[j] ? nums[j] : nums[i];
//         }
//       }
//     }
//   }

//   return totalPairs;
// };
