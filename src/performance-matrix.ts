export class PerformanceMatrix {
  performanceArray: Array<number> = [];

  logPerformanceForApplication(time: number) {
    const indexForInsertingNewTime = this.getIndexForNewNumber(
      this.performanceArray,
      time
    );
    this.performanceArray = [
      ...this.performanceArray.slice(0, indexForInsertingNewTime),
      time,
      ...this.performanceArray.slice(indexForInsertingNewTime),
    ];
  }

  fetchPerformanceScorre() {
    const middle = ~~(this.performanceArray.length / 2);
    const medianPerformance =
      this.performanceArray.length % 2 !== 0
        ? this.performanceArray[middle]
        : (this.performanceArray[middle - 1] + this.performanceArray[middle]) /
          2;
    return medianPerformance;
  }

  getIndexForNewNumber(inputArray: Array<number>, input: number): number {
    let low = 0;
    let high = inputArray.length;
    while (low < high) {
      const midpoint = (low + high) >>> 1;
      if (this.performanceArray[midpoint] < input) {
        low = midpoint + 1;
      } else {
        high = midpoint;
      }
    }
    return low;
  }
}
