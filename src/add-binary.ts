/**
 * https://leetcode.com/problems/add-binary/
 */
export default (a: string, b: string): string => {
  let output = "";
  let carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let valA: number = a[i] ? a.charCodeAt(i) - "0".charCodeAt(0) : 0;
    let valB: number = b[j] ? b.charCodeAt(j) - "0".charCodeAt(0) : 0;
    const sum = valA + valB + carry;
    output = (sum % 2) + output;
    carry = ~~(sum / 2);
  }
  if (carry > 0) {
    output = "1" + output;
  }
  return output;
};
