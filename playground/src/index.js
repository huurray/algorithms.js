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

  this.dfs = (v, callback) => {
    const visited = {};

    function dfs(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      callback && callback(vertex);
      adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(v);
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
  const lines = script.toString().trim().split(/\n/g);
  const [N, M, V] = lines.shift().split(" ").map(Number);

  const graph = new Graph();

  for (let i = 1; i <= N; i++) {
    graph.addVertex(i);
  }

  for (let i = 0; i < M; i++) {
    const [vertex1, vertex2] = lines[i].split(" ").map(Number);
    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex2, vertex1);
  }

  let bfsResult = [];
  let dfsResult = [];

  graph.dfs(V, (v) => dfsResult.push(v));

  graph.bfs(V, (v) => bfsResult.push(v));

  console.log(dfsResult.join(" "));
  console.log(bfsResult.join(" "));
}

// solution(require("fs").readFileSync("/dev/stdin"));

solution(`
5 5 3
5 4
5 2
1 2
3 4
3 1
`);
