const generate_generalized_abbreviation = function (word) {
  const result = [[]];
  let counter = 0;
  while (counter < word.length) {
    let size = result.length;
    let innerCounter = 0;
    while (innerCounter < size) {
      const current = result.shift();
      const currentSize = current.length;
      let modified = "";
      let lastChar = current[currentSize - 1];

      // doing abberviation
      if (isNaN(lastChar)) {
        modified = `${current}1`;
      } else {
        modified = `${current.substring(0, currentSize - 1)}${
          parseInt(lastChar) + 1
        }`;
      }
      result.push(modified);

      // skip abberviation
      modified = `${current}${word[counter]}`;
      result.push(modified);
      innerCounter++;
    }
    counter++;
  }
  return result;
};

console.log(
  `Generalized abbreviation are: ${generate_generalized_abbreviation("BAT")}`
);
console.log(
  `Generalized abbreviation are: ${generate_generalized_abbreviation("code")}`
);
