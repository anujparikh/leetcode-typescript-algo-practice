/**
 * https://leetcode.com/problems/unique-binary-search-trees/
 */
var numTrees = function (n) {
  const numberOfUniqueTrees = [1, 1];

  for (let i = 2; i < n + 1; i++) {
    let total = 0;
    for (let j = 1; j <= i; j++) {
      let left = j - 1;
      let right = i - j;
      total += numberOfUniqueTrees[left] * numberOfUniqueTrees[right];
    }
    numberOfUniqueTrees.push(total);
  }
  return numberOfUniqueTrees[n];
};
