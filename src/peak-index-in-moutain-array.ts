/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param arr
 * @returns
 */
function peakIndexInMountainArray(arr: number[]): number {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] > arr[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};