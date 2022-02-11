// @ts-nocheck
/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 */

// export default (s1: string, s2: string): boolean => {
//     if (s1.length > s2.length) return false;
//     const charMappingArray = Array(26).fill(0);
//     for (let i = 0; i < s1.length; i++) {
//       charMappingArray[s1.charCodeAt(i) - 97]++;
//     }
//     for (let i = 0; i < s2.length; i++) {
//       const subString = s2.substring(i, i + s1.length);
//       const subStringCharMappingArray = Array(26).fill(0);
//       for (let j = 0; j < subString.length; j++) {
//         subStringCharMappingArray[subString.charCodeAt(j) - 97]++;
//       }
//       if (
//         JSON.stringify(charMappingArray) ===
//         JSON.stringify(subStringCharMappingArray)
//       ) {
//         return true;
//       }
//     }
//     return false;
// };
// Sliding window approach
// Youtube Link: https://www.youtube.com/watch?v=XFh_AoEdOTw&ab_channel=TECHDOSE
export default (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) return false;
  const charMappingArray = Array(26).fill(0);
  const subStringMappingArray = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    charMappingArray[s1.charCodeAt(i) - 97]++;
    subStringMappingArray[s2.charCodeAt(i) - 97]++;
  }
  if (
    JSON.stringify(charMappingArray) === JSON.stringify(subStringMappingArray)
  ) {
    return true;
  }

  for (let i = 1, j = i + s1.length - 1; j < s2.length; i++, j++) {
    subStringMappingArray[s2.charCodeAt(i - 1) - 97]--;
    subStringMappingArray[s2.charCodeAt(j) - 97]++;
    if (
      JSON.stringify(charMappingArray) === JSON.stringify(subStringMappingArray)
    ) {
      return true;
    }
  }
  return false;
};
