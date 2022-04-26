const search_ceiling_of_a_number = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;
  if (key === -1) {
    return 0;
  }
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key && arr[mid + 1] > key) {
      return mid + 1;
    } else {
      if (arr[mid] > key) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};

console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], -1));
