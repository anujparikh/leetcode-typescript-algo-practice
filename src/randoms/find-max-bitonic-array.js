const find_max_in_bitonic_array = function(arr) {
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
  return arr[low];
};


console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
console.log(find_max_in_bitonic_array([10, 9, 8]))
