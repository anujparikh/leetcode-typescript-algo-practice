/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (num) {
  let result = [["(", 1, 0]];
  for (let i = 1; i < num * 2; i++) {
    let size = result.length;
    let tempResult = [];
    for (let j = 0; j < size; j++) {
      if (result[j][1] < num) {
        tempResult.push([`${result[j][0]}(`, result[j][1] + 1, result[j][2]]);
      }
      if (result[j][2] < result[j][1]) {
        tempResult.push([`${result[j][0]})`, result[j][1], result[j][2] + 1]);
      }
    }
    result = tempResult;
  }
  return result.map((r) => r[0]);
};
