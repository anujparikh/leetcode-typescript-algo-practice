export default (input: number) => {
  const fibonacciArray: Array<number> = new Array(input);
  fibonacciArray[0] = 0;
  fibonacciArray[1] = 1;
  for (let i = 2; i <= input; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  return fibonacciArray[input];
};

export const nthFibonacciNumberWithoutExtraSpace = (input: number): number => {
  if (input < 2) {
    return input;
  }
  return (
    nthFibonacciNumberWithoutExtraSpace(input - 1) +
    nthFibonacciNumberWithoutExtraSpace(input - 2)
  );
};
