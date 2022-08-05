import { PerformanceMatrix } from "../randoms/performance-matrix";

describe("Performance Calculation", () => {
  it("simple input", () => {
    const performanceMatrix = new PerformanceMatrix();
    performanceMatrix.logPerformanceForApplication(5);
    console.log(performanceMatrix.fetchPerformanceScorre());
    performanceMatrix.logPerformanceForApplication(2);
    performanceMatrix.logPerformanceForApplication(4);
    performanceMatrix.logPerformanceForApplication(8);
    console.log(performanceMatrix.fetchPerformanceScorre());
    performanceMatrix.logPerformanceForApplication(1);
    performanceMatrix.logPerformanceForApplication(3);
    performanceMatrix.logPerformanceForApplication(9);
    console.log(performanceMatrix.fetchPerformanceScorre());
  });
});
