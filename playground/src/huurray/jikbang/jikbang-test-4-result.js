// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];

  function createTree(root, edges) {
    let children = [];
    for (let i = 0; i < edges.length; i++) {
      const index_of_root = edges[i].indexOf(root);
      if (index_of_root !== -1) {
        children.push(edges[i][Number(!index_of_root)]);
        edges.splice(i, 1);
        i--;
      }
    }

    let tree = {
      id: String(root),
      water: false,
    };

    if (children.length !== 0) {
      tree.children = [];
      for (let child of children) {
        tree.children.push(createTree(child, edges));
      }
    }
    return tree;
  }

  function DFS(tree, from, callback) {
    const unvisitedList = [tree];
    let on = false;
    while (unvisitedList.length !== 0) {
      const current = unvisitedList.shift();
      if (current.hasOwnProperty('children')) {
        unvisitedList.unshift(...current.children);
      }
      if (current.id === from) {
        on = true;
      }
      if (on) {
        callback(current);
      }
    }
  }

  function solution() {
    const firstInput = input[0]
      .split(' ')
      .filter((c) => c.length > 0)
      .map((c) => parseInt(c));

    const storesLength = firstInput[0];
    const edges = input
      .slice(1, storesLength)
      .map((edge) => edge.split(' ').map((e) => parseInt(e)));
    const questions = input
      .slice(storesLength, input.length)
      .map((edge) => edge.split(' '));

    const tree = createTree(1, edges);

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const type = question[0];
      const target = question[1];

      if (type === '1') {
        DFS(tree, target, (node) => {
          node.water = true;
        });
      }
      if (type === '2') {
        DFS(tree, target, (node) => {
          node.water = false;
        });
      }
      if (type === '3') {
        DFS(tree, target, (node) => {
          if (node.id === target) {
            console.log(node.water ? 1 : 0);
          }
        });
      }
    }
  }

  for await (const line of rl) {
    input.push(line);
  }

  solution();
  process.exit();
})();

// class Node {
//   constructor(value, parent = null) {
//     this.value = value;
//     this.isFilled = false;
//     this.parent = parent;
//     this.children = [];
//   }

//   fill() {
//     this.isFilled = true;
//   }

//   drain() {
//     this.isFilled = false;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//     this.allNodes = { 1: [Node], 2: [Node] };
//   }

//   fill(key) {
//     const node = this.allNodes[key];
//     this.fillRecursive(node);
//   }

//   fillRecursive(node) {
//     if (node.children.length === 0) {
//       return;
//     }

//     for (const child of node.children) {
//       child.fill();
//       this.fillRecursive(child);
//     }
//   }

//   drain(key) {
//     let node = this.allNodes[key];
//     while (node.parent !== null) {
//       node.drain();
//       node = node.parent;
//     }
//   }

//   check(key) {
//     if (key in this.allNodes) {
//       return this.allNodes[key].isFilled;
//     }
//     return null;
//   }
// }

// function createTree(edges) {
//   const tree = new Tree();
//   tree.root = new Node(1);
//   tree.allNodes[1] = tree.root;
//   createTreeHelper(tree.root, null, edges, tree);
//   return tree;
// }

// function createTreeHelper(node, parent, edges, tree) {
//   if (parent !== null && node.children.length === 1) {
//     return;
//   }

//   for (const child of edges[node.value]) {
//     if (parent === null) {
//       const newNode = new Node(child, node);
//       tree.allNodes[child] = newNode;
//       node.children.push(newNode);
//     } else if (parent && child !== parent.value) {
//       const newNode = new Node(child, node);
//       tree.allNodes[child] = newNode;
//       node.children.push(newNode);
//     }
//   }

//   for (const child of node.children) {
//     createTreeHelper(child, node, edges, tree);
//   }
// }

// function solution(edges, questions) {
//   const tree = createTree(edges);
//   for (const question of questions) {
//     const [type, number] = question;
//     switch (type) {
//       case 1:
//         tree.fill(number);
//         break;
//       case 2:
//         tree.drain(number);
//         break;
//       case 3:
//         if (tree.check(number)) {
//           console.log('1');
//         } else {
//           console.log('0');
//         }
//     }
//   }
// }

// solution(
//   {
//     1: [8],
//     2: [5],
//     3: [7, 6],
//     4: [8, 7],
//     5: [6, 2],
//     6: [5, 3],
//     7: [3, 4],
//     8: [1, 4],
//   },
//   [
//     [2, 2],
//     [3, 2],
//     [1, 4],
//     [3, 7],
//     [1, 1],
//   ]
// );
