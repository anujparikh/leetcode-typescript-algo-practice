/**
 * https://leetcode.com/problems/flipping-an-image/
 * @param {*} matrix
 * @returns
 */
function flip_and_invert_image(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0, k = matrix[i].length - 1; j <= k; j++, k--) {
            // swapping and XOR the number
            [matrix[i][j], matrix[i][k]] = [matrix[i][k] ^ 1, matrix[i][j] ^ 1];
        }
    }
  return matrix
}

console.log(flip_and_invert_image([[1,0,1], [1,1,1], [0,1,1]]))
console.log(flip_and_invert_image([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))