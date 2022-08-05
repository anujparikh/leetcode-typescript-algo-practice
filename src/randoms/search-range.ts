/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param arr
 * @param key
 * @returns
 */
function searchRange(arr: number[], key: number): number[] {
  let low = 0;
  let high = arr.length - 1;
  const result = [];

  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] === key) {
      low = mid;
      break;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (arr[low] !== key) {
    return [-1, -1];
  }

  let i = low;
  let j = low + 1;

  while (arr[i] === key || arr[j] === key) {
    if (arr[i] === key) {
      i--;
    }
    if (arr[j] === key) {
      j++;
    }
  }

  result.push(i + 1);
  result.push(j - 1);

  return result;
}
