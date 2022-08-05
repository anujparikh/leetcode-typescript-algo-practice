const binary_search = function (arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let isAsc = checkTheOrder(arr);

  while (left <= right) {
    const midpoint = (left + right) >> 1;
    if (arr[midpoint] === key) return midpoint;
    if (isAsc) {
      if (arr[midpoint] > key) {
        right = midpoint - 1;
      } else {
        left = midpoint + 1;
      }
    } else {
      if (arr[midpoint] > key) {
        left = midpoint + 1;
      } else {
        right = midpoint - 1;
      }
    }
  }
  return -1;
};

const checkTheOrder = (arr) => {
  let i = 0;
  let j = 0;

  while (arr[i] == arr[j]) {
    j++;
  }

  return arr[i] < arr[j] ? true : false;
};

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
