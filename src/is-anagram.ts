export default (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false;
  const charMap: { [key: string]: number } = {};
  for (let i = 0; i < s1.length; i++) {
    charMap[s1[i]] = (charMap[s1[i]] || 0) + 1;
    charMap[s2[i]] = (charMap[s2[i]] || 0) - 1;
  }
  const keys = Object.keys(charMap);
  for (let i = 0; i < keys.length; i++) {
    if (charMap[keys[i]] !== 0) {
      return false;
    }
  }
  return true;
};
