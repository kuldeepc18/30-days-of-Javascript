// Task 10: Use Graph to find shortest path

class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.vertices.get(vertex1).push(vertex2);
        this.vertices.get(vertex2).push(vertex1);
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (let neighbor of this.vertices.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

function findShortestPath(graph, start, end) {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const vertex = path[path.length - 1];

        if (vertex === end) {
            return path;
        }

        if (!visited.has(vertex)) {
            for (let neighbor of graph.vertices.get(vertex)) {
                const newPath = [...path, neighbor];
                queue.push(newPath);
            }
            visited.add(vertex);
        }
    }
    return null; // Path not found
}

console.log("\nShortest path from A to D:");

const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
console.log("BFS starting from vertex A:");
graph.bfs('A');

console.log(findShortestPath(graph, 'A', 'D').join(' -> '));