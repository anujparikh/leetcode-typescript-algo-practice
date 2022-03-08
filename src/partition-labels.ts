/**
 * https://leetcode.com/problems/partition-labels/
 */
export default (input: string): Array<number> => {
  if (input == "") return [];

  const output: Array<number> = [];
  const maxIndex: Array<number> = new Array(26);
  for (let i = 0; i < input.length; i++) {
    const charCodeAt = input.charCodeAt(i);
    maxIndex[charCodeAt - "a".charCodeAt(0)] = i;
  }
  let start = 0;
  let end = 0;

  for (let i = 0; i < input.length; i++) {
    const charCodeAt = input.charCodeAt(i);
    end = Math.max(end, maxIndex[charCodeAt - "a".charCodeAt(0)]);
    if (i === end) {
      output.push(end - start + 1);
      start = end + 1;
    }
  }
  return output;
};
