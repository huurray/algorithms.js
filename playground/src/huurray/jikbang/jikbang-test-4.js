let input = [
  '4 7',
  '3 4',
  '2 3',
  '2 1',
  '2 3',
  '3 1',
  '3 1',
  '3 3',
  '2 4',
  '3 4',
  '2 4',
];

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

solution();
