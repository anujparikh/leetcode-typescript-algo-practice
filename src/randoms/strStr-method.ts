/**
 * Sliding window problem
 */
export default (haystack: string, needle: string): number => {
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;
  let isPresent = true;
  let subString = "";
  for (let i = 0; i < needle.length; i++) {
    subString += haystack[i];
    if (haystack[i] !== needle[i]) isPresent = false;
  }
  if (isPresent) return 0;
  for (let i = 1, j = i + needle.length - 1; j < haystack.length; i++, j++) {
    let isPresent = true;
    subString = subString.substring(1) + haystack[j];
    if (subString !== needle) {
      isPresent = false;
    }
    if (isPresent) return i;
  }
  return -1;
};
