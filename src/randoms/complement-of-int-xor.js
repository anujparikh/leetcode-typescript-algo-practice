
const countTotalBits = (number) => {
    let count = 0;
    while (number > 0) {
        count++;
        number = number >> 1;
    }
    return count;
}

function calculate_bitwise_complement(n) {
    if (n === 0) return 1;
    return n ^ Math.pow(2, countTotalBits(n)) - 1;
}