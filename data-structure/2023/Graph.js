import { Dictionary } from "./Dictionary";

function Graph() {
  const vertices = []; //list

  const adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []); //인접 리스트를 행렬과 함께 초기화한다
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    //adjList.get(w).push(v);
  };

  this.toString = function () {
    let s = "";
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      const neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  const initializeColor = function () {
    const color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = function (v, callback) {
    const color = initializeColor();
    const queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      const u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  };

  this.dfs = function (callback) {
    const color = initializeColor();

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  const dfsVisit = function (u, color, callback) {
    color[u] = "grey";
    if (callback) {
      callback(u);
    }
    console.log("방문했음 " + u);
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
    console.log("탐색했음 " + u);
  };

  this.BFS = function (v) {
    const color = initializeColor();
    const queue = new Queue();
    const d = [];
    const pred = [];
    queue.enqueue(v);

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      const u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = "black";
    }

    return {
      distances: d,
      predecessors: pred,
    };
  };

  let time = 0;
  this.DFS = function () {
    const color = initializeColor();
    const d = [];
    const f = [];
    const p = [];
    time = 0;

    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p,
    };
  };

  const DFSVisit = function (u, color, d, f, p) {
    console.log("방문했음 " + u);
    color[u] = "grey";
    d[u] = ++time;
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === "white") {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = "black";
    f[u] = ++time;
    console.log("탐색했음 " + u);
  };
}

const graph = new Graph();

const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log("********* 그래프 출력 ***********");

console.log(graph.toString());

console.log("********* bfs ***********");

function printNode(value) {
  console.log("방문한 정점: " + value);
}

graph.bfs(myVertices[0], printNode);

console.log("********* dfs ***********");

graph.dfs();

console.log("********* 최단 거리 - BFS ***********");
const shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

//A에서 다른 정점들까지의 경로
const fromVertex = myVertices[0];

for (i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i],
    path = new Stack();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  const s = path.pop();
  while (!path.isEmpty()) {
    s += " - " + path.pop();
  }
  console.log(s);
}

console.log("********* 위상 정렬 - DFS ***********");

//const result = graph.DFS();
//console.log(result.discovery);
//console.log(result.finished);
//console.log(result.predecessors);

graph = new Graph();

myVertices = ["A", "B", "C", "D", "E", "F"];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");

const result = graph.DFS();
console.log(result.discovery);
console.log(result.finished);
console.log(result.predecessors);

const fTimes = result.finished;
s = "";
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += " - " + maxName;
  delete fTimes[maxName];
}
console.log(s);
