/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
}

const find_closest_points = function (points, k) {
  let pointsMinHeap = new Heap([], null, (a, b) => {
    const distanceA = Math.sqrt(Math.pow(a.x - 0, 2) + Math.pow(a.y - 0, 2));
    const distanceB = Math.sqrt(Math.pow(b.x - 0, 2) + Math.pow(b.y - 0, 2));
    return distanceB - distanceA;
  });
  let result = [];
  for (let i = 0; i < points.length; i++) {
    pointsMinHeap.push(points[i]);
  }
  for (let i = 0; i < k; i++) {
    result.push(pointsMinHeap.pop());
  }
  return result;
};

points = find_closest_points(
  [new Point(1, 3), new Point(3, 4), new Point(2, -1)],
  2
);
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++) result += points[i].get_point();
console.log(result);
