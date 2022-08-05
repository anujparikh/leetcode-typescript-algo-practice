/**
 * https://leetcode.com/problems/permutations/
 * @param input
 * @returns
 */
const findPermutations = (input: Array<number>): Array<Array<number>> => {
  let previous: Array<Array<number>> = [[input[0]]];

  for (let i = 1; i < input.length; i++) {
    const current: Array<Array<number>> = [];
    for (let j = 0; j < previous.length; j++) {
      for (let k = 0; k <= i; k++) {
        const newPermutation = [
          ...previous[j].slice(0, k),
          input[i],
          ...previous[j].slice(k),
        ];
        current.push(newPermutation);
      }
    }
    previous = current;
  }

  return previous;
};
