const Deque = require('./collections/deque'); //http://www.collectionsjs.com

const find_order = function (tasks, prerequisites) {
    const sortedOrder = [];
    if (tasks <= 1) return true;
    const inDegree = new Array(tasks).fill(0);
    const graph = new Array(tasks).fill(0).map(() => new Array())

    prerequisites.forEach((prereq) => {
        const [parent, child] = prereq;
        graph[parent].push(child);
        inDegree[child]++;
    })

    const sources = new Deque();
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
            inDegree[child] -= 1;
            if (inDegree[child] === 0) {
                sources.push(child);
            }
        });
    }

    if (sortedOrder.length !== tasks) {
        return [];
    }

    return sortedOrder;
};


console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${find_order(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
