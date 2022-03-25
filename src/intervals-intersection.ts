/**
 * https://leetcode.com/problems/interval-list-intersections/
 */
function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const firstOverLapsSecond =
      firstList[i][0] >= secondList[j][0] &&
      firstList[i][0] <= secondList[j][1];
    const secondOverLapsFirst =
      secondList[j][0] >= firstList[i][0] &&
      secondList[j][0] <= firstList[i][1];

    if (firstOverLapsSecond || secondOverLapsFirst) {
      const mergeInterval = [
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1]),
      ];
      result.push(mergeInterval);
    }

    if (firstList[i][1] <= secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
