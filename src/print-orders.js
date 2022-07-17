const printOrders = (tasks, prerequisites) => {
    const sortedOrder = [];
    if (tasks <= 0) {
        return sortedOrder;
    }

    // a. Initialize the graph
    const inDegree = Array(tasks).fill(0); // count of incoming edges
    const graph = Array(tasks).fill(0).map(() => Array()); // adjacency list graph

    // b. Build the graph
    prerequisites.forEach((prerequisite) => {
        const parent = prerequisite[0],
            child = prerequisite[1];
        graph[parent].push(child); // put the child into it's parent's list
        inDegree[child]++; // increment child's inDegree
    });


    // c. Find all sources i.e., all vertices with 0 in-degrees
    const sources = [];
    for (i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    printAllTopologicalSorts(graph, inDegree, sources, sortedOrder);
}

const printAllTopologicalSorts = (graph, inDegree, sources, sortedOrder) => {
    if (sources.length > 0) {
        for (let i = 0; i < sources.length; i++) {
            const vertex = sources[i];
            sortedOrder.push(vertex);
            const sourcesForNextCall = [...sources]
            sourcesForNextCall = sources.splice(sources.indexOf(vertex), 1);

            graph[vertex].forEach((child) => {
                inDegree[child]--;
                if (inDegree[child] === 0) {
                    sources.push(child);
                }
            })

            printAllTopologicalSorts(graph, inDegree, sourcesForNextCall, sortedOrder);

            sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
            graph[vertex].forEach((child) => {
                inDegree[child]++;
            })
        }
    }

    if (sortedOrder.length === inDegree.length) {
        console.log(sortedOrder);
    }
}