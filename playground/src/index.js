function Graph() {
  const vertices = [];

  const adjList = {};

  this.addVertex = (v) => {
    vertices.push(v);
    adjList[v] = [];
  };

  this.addEdge = (v, w) => {
    if (!adjList[v]) return;
    adjList[v] = [...adjList[v], w].sort((a, b) => a - b);
  };

  this.toString = function () {
    let s = "";
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      const neighbors = adjList[vertices[i]];
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  this.bfs = function (v, callback) {
    const queue = [v];
    const visited = {};
    let currentVertex;
    visited[v] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      callback && callback(currentVertex);

      adjList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  };
}

function solution(script) {
  const inputs = script.toString().trim().split(/\n/g);
  const vNums = Number(inputs.shift());
  const eNums = Number(inputs.shift());

  const graph = new Graph();

  for (let i = 0; i < vNums; i++) {
    graph.addVertex(i + 1);
  }

  for (let i = 0; i < eNums; i++) {
    const [v, w] = inputs[i].split(" ").map(Number);
    graph.addEdge(v, w);
    graph.addEdge(w, v);
  }

  let count = -1;

  graph.bfs(1, () => count++);

  console.log(count);
}

// solution(require("fs").readFileSync("/dev/stdin"));

solution(`
3
2
1 2
3 2
`);
