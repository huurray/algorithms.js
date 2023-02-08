function BinarySearchTree() {
  const Node = function (key, left, right) {
    this.key = key;
    this.left = left === "." ? null : left;
    this.right = right === "." ? null : right;
  };

  let root = null;

  this.insert = function (key, left, right) {
    const newNode = new Node(key, left, right);

    //첫 번째 원소일 경우
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = function (node, newNode) {
    if (typeof node.left === "string") {
      if (node.left === newNode.key) {
        node.left = newNode;
        return;
      }
    } else {
      node?.left && insertNode(node.left, newNode);
    }

    if (typeof node.right === "string") {
      if (node.right === newNode.key) {
        node.right = newNode;
        return;
      }
    } else {
      node?.right && insertNode(node.right, newNode);
    }
  };

  this.getRoot = function () {
    return root;
  };

  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  const preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  const inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };

  const postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
}

function solution(script) {
  const lines = script.toString().trim().split(/\n/g);
  const N = +lines.shift();

  const tree = new BinarySearchTree();

  for (let i = 0; i < N; i++) {
    const inputs = lines[i].split(" ");
    tree.insert(inputs[0], inputs[1], inputs[2]);
  }
  let preStr = "";
  let inStr = "";
  let postStr = "";
  tree.preOrderTraverse((v) => (preStr += v));
  tree.inOrderTraverse((v) => (inStr += v));
  tree.postOrderTraverse((v) => (postStr += v));

  console.log(preStr);
  console.log(inStr);
  console.log(postStr);
}

// solution(require("fs").readFileSync("/dev/stdin"));

solution(`
7
A B C
B D .
C E F
E . .
F . G
D . .
G . .
`);
