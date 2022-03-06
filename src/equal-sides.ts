export default (input: Array<number>): number => {
  const totalInputSum = input.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  let minimumNumber = totalInputSum;
  let sumLeft = 0;
  let sumRight = totalInputSum;
  for (let i = 0; i < input.length; i++) {
    sumLeft += input[i];
    sumRight -= input[i];
    minimumNumber = Math.min(minimumNumber, Math.abs(sumRight - sumLeft));
  }
  return minimumNumber;
};
