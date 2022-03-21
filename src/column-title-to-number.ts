function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result +=
      Math.pow(26, columnTitle.length - i - 1) *
      (columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }
  return result;
}
