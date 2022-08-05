/**
 * https://leetcode.com/problems/find-in-mountain-array/
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(key, arr) {
  const highestIndex = search_highest_index(arr);
  let index = binary_search(arr, key, 0, highestIndex, true);
  if (index !== -1) return index;
  index = binary_search(arr, key, highestIndex + 1, arr.length() - 1, false);
  return index !== -1 ? index : -1
};

const binary_search = function(arr, key, low, high, isAsc) {
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr.get(mid) === key) return mid;
      if (isAsc) {
        if (arr.get(mid) < key) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (arr.get(mid) > key) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
  }
  return -1;
}

const search_highest_index = function(arr) {
  let low = 0;
  let high = arr.length() - 1;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr.get(mid) < arr.get(mid + 1)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}