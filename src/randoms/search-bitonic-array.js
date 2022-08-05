const search_bitonic_array = function(arr, key) {
  const highestIndex = search_highest_index(arr);
  const firstHalf = arr.slice(0, highestIndex + 1);
  const secondHalf = arr.slice(highestIndex + 1);
  let index = binary_search(firstHalf, key);
  if (index !== -1) return index;
  index = binary_search(secondHalf, key);
  return index !== -1 ? firstHalf.length + index : -1
};

const binary_search = function(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const search_highest_index = function(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))
console.log(search_bitonic_array([3, 8, 3, 1], 8))
console.log(search_bitonic_array([1, 3, 8, 12], 12))
console.log(search_bitonic_array([10, 9, 8], 10))
