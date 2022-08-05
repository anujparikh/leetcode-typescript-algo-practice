/**
 * https://leetcode.com/problems/isomorphic-strings/
 * @param s
 * @param t
 * @returns
 */
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const forwardMapping: any = {};
  const backwardMapping: any = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (forwardMapping[s[i]] && t[i] !== forwardMapping[s[i]]) ||
      (backwardMapping[t[i]] && s[i] !== backwardMapping[t[i]])
    ) {
      return false;
    } else {
      forwardMapping[s[i]] = t[i];
      backwardMapping[t[i]] = s[i];
    }
  }

  return true;
}
