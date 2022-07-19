const findOrder = (words) => {
    if (words === 0) return '';
    if (words === 1) return words[0];
    const uniqueAlphbets = Array.from(new Set(words.reduce((p, c) => `${p}${c}`, '').split('')));
    const connections = [];
    for (let i = 1; i < words.length; i++) {
        connections.push(findConnection(words[i - 1], words[i]));
    }
    const sortedOrder = [];
    const inDegree = {};
    const graph = {};
    uniqueAlphbets.forEach(a => {
        inDegree[a] = 0;
        graph[a] = new Array();
    });
    connections.forEach(c => {
        const [parent, child] = c;
        graph[parent].push(child);
        inDegree[child] += 1;
    })
    const sources = [];
    for (let i = 0; i < uniqueAlphbets.length; i++) {
        if (inDegree[uniqueAlphbets[i]] === 0) {
            sources.push(uniqueAlphbets[i]);
        }
    }
    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach(child => {
            inDegree[child] -= 1;
            if (inDegree[child] === 0) {
                sources.push(child);
            }
        })
    }

    if (sortedOrder.length !== uniqueAlphbets.length) {
        return '';
    }
    return sortedOrder.join('');
}

const findConnection = (w1, w2) => {
    let i = 0;

    while (i < w1.length && i < w2.length) {
        if (w1[i] !== w2[i]) {
            return [w1[i], w2[i]];
        }
        i++;
    }
    return undefined;
}