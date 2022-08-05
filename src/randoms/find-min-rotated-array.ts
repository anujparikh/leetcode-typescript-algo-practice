/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param arr
 * @returns
 */
function findMin(arr: number[]): number {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return arr[low];
};