const canConstructUniqueSeq = (originalSeq, sequences) => {
    const convertedSequences = [];
    for (let i = 0; i < sequences.length; i++) {
        for (let j = 1; j < sequences[i].length; j++) {
            convertedSequences.push([sequences[i][j - 1], sequences[i][j]]);
        }
    }
    const sortedOrder = [];
    const inDegree = {}
    const graph = {}
    for (let i = 0; i < originalSeq.length; i++) {
        inDegree[originalSeq[i]] = 0;
        graph[originalSeq[i]] = new Array();
    }
    let sources = [];
    for (let i = 0; i < convertedSequences.length; i++) {
        const [parent, child] = convertedSequences[i];
        graph[parent].push(child);
        inDegree[child] += 1;
    }

    Object.keys(inDegree).forEach(k => {
        if (inDegree[k] === 0) {
            sources.push(parseInt(k));
            if (sources.length > 1) return false;
        }
    })

    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        for (let i = 0; i < graph[vertex].length; i++) {
            inDegree[graph[vertex][i]] -= 1;
            if (inDegree[graph[vertex][i]] === 0) {
                sources.push(graph[vertex][i]);
                if (sources.length > 1) return false;
            }
        }
    }
    if (sortedOrder.length !== originalSeq.length) return false;
    for (let i = 0; i < originalSeq.length; i++) {
        if (sortedOrder[i] !== originalSeq[i]) return false;
    }

    return true;
}