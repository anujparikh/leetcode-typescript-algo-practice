/**
 * https://leetcode.com/problems/merge-sorted-array/
 */
export default (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  let i = nums1.length - 1;
  m--;
  n--;
  while (i >= 0) {
    if (m < 0) {
      nums1[i] = nums2[n--];
    } else if (n < 0) {
      nums1[i] = nums1[m--];
    } else {
      if (nums1[m] < nums2[n]) {
        nums1[i] = nums2[n--];
      } else {
        nums1[i] = nums1[m--];
      }
    }
    i--;
  }
};
