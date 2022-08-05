/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param str
 * @returns
 */
function letterCasePermutation(str: string): string[] {
  const lowerCaseStr = str.toLowerCase();
  const permutations = [];
  permutations.push(lowerCaseStr);
  let pointer = 0;
  while (pointer < lowerCaseStr.length) {
    if (lowerCaseStr[pointer] >= "a" && lowerCaseStr[pointer] <= "z") {
      let size = permutations.length;
      for (let i = 0; i < size; i++) {
        let newPermutation: string = permutations[i];
        newPermutation =
          newPermutation.substring(0, pointer) +
          newPermutation.charAt(pointer).toUpperCase() +
          newPermutation.substring(pointer + 1);
        permutations.push(newPermutation);
      }
    }
    pointer++;
  }
  return permutations;
}
