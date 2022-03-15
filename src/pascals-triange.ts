/**
 * https://leetcode.com/problems/pascals-triangle/
 */
export default (numRows: number): number[][] => {
  let output: Array<Array<number>> = [[1]];
  let counter = 1;
  while (counter < numRows) {
    const currentRow: Array<number> = [1];
    for (let i = 1; i < counter; i++) {
      currentRow.push(output[counter - 1][i - 1] + output[counter - 1][i]);
    }
    currentRow.push(1);
    output.push(currentRow);
    counter++;
  }
  return output;
};
