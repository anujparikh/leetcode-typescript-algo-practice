/**
 * https://leetcode.com/problems/reorganize-string/
 */
function reorganizeString(s) {
  const frequencyMap = {};
  let resultArray = [];
  for (let i = 0; i < s.length; i++) {
    frequencyMap[s[i]] = (frequencyMap[s[i]] || 0) + 1;
  }
  const compareFunction = (a, b) => b[1] - a[1];
  const repeatArray = [];
  const keys = Object.keys(frequencyMap);
  for (let i = 0; i < keys.length; i++) {
    repeatArray.push([keys[i], frequencyMap[keys[i]]]);
  }
  repeatArray.sort(compareFunction);
  let previous;
  while (repeatArray.length > 0) {
    let [char, freq] = repeatArray.shift();
    if (previous && previous[1] > 0) {
      repeatArray.push(previous);
      repeatArray.sort(compareFunction);
    }
    resultArray.push(char);
    freq--;
    previous = [char, freq];
  }
  return resultArray.length === s.length ? resultArray.join("") : "";
}
