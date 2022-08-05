export default (num: string, k: number): string => {
  let counter = 0;
  let result = num;

  if (num.length === k) {
    return "0";
  }

  while (counter < k) {
    let minimum = result;
    for (let i = 0; i < minimum.length; i++) {
      let temp = minimum.substring(0, i) + minimum.substring(i + 1);
      if (parseInt(temp) < parseInt(result)) {
        result = temp;
      }
    }
    counter++;
  }

  return `${parseInt(result)}`;
};
