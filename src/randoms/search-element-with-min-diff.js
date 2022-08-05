const search_min_diff_element = function(arr, key) {
  if (key >= arr[arr.length - 1]) {
    return arr[arr.length - 1];
  }
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] === key) {
      return arr[mid];
    }
    if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (Math.abs(key - arr[low]) <= Math.abs(key - arr[low - 1])) {
    return arr[low];
  } else {
    return arr[low - 1];
  }
};


console.log(search_min_diff_element([4, 6, 10], 7))
console.log(search_min_diff_element([4, 6, 10], 4))
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
console.log(search_min_diff_element([4, 6, 10], 17))