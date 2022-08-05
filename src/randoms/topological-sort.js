function topological_sort_deque(vertices, edges) {
    const sortedOrder = [];
    if (vertices <= 0) {
        return sortedOrder;
    }

    // a. Initialize the graph
    const inDegree = Array(vertices).fill(0); // count of incoming edges
    const graph = Array(vertices).fill(0).map(() => Array()); // adjacency list graph

    // b. Build the graph
    edges.forEach((edge) => {
        let parent = edge[0],
            child = edge[1];
        graph[parent].push(child); // put the child into it's parent's list
        inDegree[child]++; // increment child's inDegree
    });

    // c. Find all sources i.e., all vertices with 0 in-degrees
    const sources = new Deque();
    for (i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the sources queue
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

    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) {
        return [];
    }

    return sortedOrder;
}

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
