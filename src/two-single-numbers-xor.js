function find_single_numbers(nums) {
    const result = [0, 0];
    const n1xn2 = nums.reduce((p, c) => p ^ c, 0);

    // finding rightmost bit that is 1
    let rightmostBit = 1;
    while ((rightmostBit & n1xn2) === 0) {
        rightmostBit = rightmostBit << 1;
    }
    nums.forEach(n => {
        if ((n & rightmostBit) !== 0) {
            result[0] = result[0] ^ n;
        } else {
            result[1] = result[1] ^ n;
        }
    });
    return result;
}

console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);