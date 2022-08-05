function convertToTitle(columnNumber: number): string {
  let output = "";
  while (columnNumber > 0) {
    const reminder = columnNumber % 26;
    const lastCharCode =
      reminder === 0
        ? "Z".charCodeAt(0)
        : (columnNumber % 26) + "A".charCodeAt(0) - 1;
    columnNumber = ~~(columnNumber / 26);
    if (reminder === 0) columnNumber--;
    output = `${String.fromCharCode(lastCharCode)}${output}`;
  }
  return output;
}
