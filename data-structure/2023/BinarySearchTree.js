function BinarySearchTree() {
  const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = function (key) {
    const newNode = new Node(key);

    //첫 번째 원소일 경우
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.getRoot = function () {
    return root;
  };

  this.search = function (key) {
    return searchNode(root, key);
  };

  const searchNode = function (node, key) {
    if (node === null) return false;

    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      //key가 node.key와 같다
      return true;
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

  this.min = function () {
    return minNode(root);
  };

  const minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  this.max = function () {
    return maxNode(root);
  };

  const maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }
    return null;
  };

  this.remove = function (element) {
    root = removeNode(root, element);
  };

  const findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  };

  const removeNode = function (node, element) {
    if (node === null) {
      return null;
    }

    if (element < node.key) {
      node.left = removeNode(node.left, element);
      return node;
    } else if (element > node.key) {
      node.right = removeNode(node.right, element);
      return node;
    } else {
      //key가 node.key와 같다

      //3가지 특수 경우를 처리해야 한다
      //1 - 리프 노드
      //2 - 자식이 하나뿐인 노드
      //3 - 자식이 둘인 노드

      //case 1
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //case 2
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //case 3
      const aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log("********* 중위 순회 ***********");
function printNode(value) {
  console.log(value);
}
tree.inOrderTraverse(printNode);

console.log("********* 전위 순회 ***********");
tree.preOrderTraverse(printNode);

console.log("********* 후위 순회 ***********");
tree.postOrderTraverse(printNode);

console.log("********* 최대/최소값 ***********");
console.log(tree.max());
console.log(tree.min());
console.log(tree.search(1) ? "키 1을 찾았습니다." : "키 1을 찾지 못했습니다.");
console.log(tree.search(8) ? "키 8을 찾았습니다." : "키 8을 찾지 못했습니다.");

console.log("********* 삭제 6 ***********");
tree.remove(6);
tree.inOrderTraverse(printNode);

console.log("********* 삭제 5 ***********");
tree.remove(5);
tree.inOrderTraverse(printNode);

console.log("********* 삭제 15 ***********");
tree.remove(15);
tree.inOrderTraverse(printNode);

console.log("********* 가공되지 않은 자료 구조 ***********");
console.log(tree.getRoot());
