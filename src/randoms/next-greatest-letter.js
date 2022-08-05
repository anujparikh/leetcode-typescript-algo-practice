/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */
function nextGreatestLetter(letters, key) {
  const keyCharCode = key.charCodeAt(0);
  if (keyCharCode >= letters[letters.length - 1].charCodeAt(0)) {
    return letters[0];
  }
  let low = 0;
  let high = letters.length - 1;

  while (low <= high) {
    const mid = (low + high) >> 1;
    const midCharCode = letters[mid].charCodeAt(0);
    if (midCharCode > keyCharCode) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return letters[low];
}
