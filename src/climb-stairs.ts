export default (input: number): number => {
  const noOfWaysArray: Array<number> = [];
  noOfWaysArray[0] = 0;
  noOfWaysArray[1] = 1;
  noOfWaysArray[2] = 2;
  for (let i = 3; i <= input; i++) {
    noOfWaysArray[i] = noOfWaysArray[i - 1] + noOfWaysArray[i - 2];
  }
  return noOfWaysArray[input];
};
