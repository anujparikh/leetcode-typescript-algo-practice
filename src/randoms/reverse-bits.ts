/**
 * https://leetcode.com/problems/reverse-bits/
 * @param n
 * @returns
 */
function reverseBits(n: number): number {
  let numberStr = n.toString(2);
  const zeroFillerLength = 32 - numberStr.length;
  let filler = "";
  for (let i = 0; i < zeroFillerLength; i++) {
    filler += "0";
  }
  numberStr = filler + numberStr;
  let result = 0;
  for (let i = 0; i < numberStr.length; i++) {
    result += Math.pow(2, i) * parseInt(numberStr[i]);
  }
  return result;
}
