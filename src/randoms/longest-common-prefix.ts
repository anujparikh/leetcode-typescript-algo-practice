/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param strs
 * @returns
 * Example:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */
function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  let smallestWordIndex = 0;
  strs.forEach((s, i) => {
    if (s.length === 0) return "";
    if (s.length < strs[smallestWordIndex].length) smallestWordIndex = i;
  });
  for (let i = 0; i < strs[smallestWordIndex].length; i++) {
    const currentChar = strs[smallestWordIndex][i];
    for (let j = 0; j < strs.length; j++) {
      if (currentChar !== strs[j][i]) return commonPrefix;
    }
    commonPrefix += currentChar;
  }
  return commonPrefix;
}
