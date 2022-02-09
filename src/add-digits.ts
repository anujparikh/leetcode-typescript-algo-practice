function addDigits(num: number): number {
  let result = num;
  while (result > 9) {
    let sum = 0;
    while (result > 0) {
      sum += result % 10;
      result = ~~(result / 10);
    }
    result = sum;
  }
  return result;
}
