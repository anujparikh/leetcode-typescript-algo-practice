const topological_sort = function (vertices, edges) {
    sortedOrder = [];
    const adjLists = {};
    const inDegrees = {};
    for (let i = 0; i < edges.length; i++) {
        adjLists[edges[i][0]] = adjLists[edges[i][0]] ? [...adjLists[edges[i][0]], edges[i][1]] : [edges[i][1]];
        inDegrees[edges[i][0]] = inDegrees[edges[i][0]] ? inDegrees[edges[i][0]] : 0;
        inDegrees[edges[i][1]] = inDegrees[edges[i][1]] ? inDegrees[edges[i][1]] + 1 : 1;
    }
    let keys = Object.keys(inDegrees);
    while (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
            if (inDegrees[keys[i]] === 0) {
                sortedOrder.push(keys[i]);
                delete inDegrees[keys[i]];
                if (adjLists[keys[i]] && adjLists[keys[i]].length !== 0) {
                    for (let j = 0; j < adjLists[keys[i]].length; j++) {
                        inDegrees[adjLists[keys[i]][j]]--;
                    }
                }
            }
        }
        keys = Object.keys(inDegrees);
    }
    return sortedOrder;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
