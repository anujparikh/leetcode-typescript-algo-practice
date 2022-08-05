export default (input: number): number => {
  const noOfWaysArray: Array<number> = [];
  noOfWaysArray[0] = 1;
  noOfWaysArray[1] = 1;
  for (let i = 2; i <= input; i++) {
    noOfWaysArray[i] = noOfWaysArray[i - 1] + noOfWaysArray[i - 2];
  }
  return noOfWaysArray[input];
};
