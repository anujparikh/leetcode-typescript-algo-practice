//@ts-nocheck
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n <= 0) {
        return [];
    }

    // with only one node, since its in-degrees will be 0, therefore, we need to handle it separately
    if (n === 1) {
        return [0];
    }

    const inDegree = new Array(n).fill(0);
    const graph = new Array(n).fill(0).map(() => new Array());
    edges.forEach((edge) => {
        const [n1, n2] = edge;
        graph[n1].push(n2);
        graph[n2].push(n1);

        inDegree[n1]++;
        inDegree[n2]++;
    });
    const sources = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 1) {
            sources.push(i);
        }
    }
    let totalNodes = n;

    while (totalNodes > 2) {
        const sourcesSize = sources.length;
        totalNodes -= sourcesSize;
        for (let i = 0; i < sourcesSize; i++) {
            const vertex = sources.shift();
            graph[vertex].forEach((child) => {
                inDegree[child] -= 1;
                if (inDegree[child] === 1) {
                    sources.push(child);
                }
            });
        }
    }

    return sources;
};