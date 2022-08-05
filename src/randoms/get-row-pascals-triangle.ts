/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
export default (rowIndex: number): number[] => {
  const triangle2DArray = [[1]];
  let counter = 1;
  while (counter <= rowIndex) {
    const currentRow = [1];
    for (let i = 1; i < counter; i++) {
      currentRow.push(
        triangle2DArray[counter - 1][i - 1] + triangle2DArray[counter - 1][i]
      );
    }
    currentRow.push(1);
    triangle2DArray.push(currentRow);
    counter++;
  }
  return triangle2DArray[rowIndex];
};
