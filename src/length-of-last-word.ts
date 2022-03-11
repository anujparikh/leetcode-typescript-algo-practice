export default (s: string): number => {
  let counter = 0;
  let i = s.length - 1;
  while (s[i] === " ") {
    i--;
  }
  while (s[i] !== " " && i >= 0) {
    counter++;
    i--;
  }
  return counter;
};
