function DoublyLinkedList() {
  const Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  this.append = function (element) {
    const node = new Node(element);

    if (head === null) {
      //리스트가 비어있다면
      head = node;
      tail = node;
    } else {
      //테일 노드를 붙인다
      tail.next = node;
      node.prev = tail;
      tail = node;
    }

    length++; //리스트의 크기를 업데이트한다
  };

  this.insert = function (position, element) {
    //범위 이외의 값인지 체크한다
    if (position < 0 && position > length) return false;

    const node = new Node(element);
    let current = head;
    let previous;
    let index = 0;

    if (position === 0) {
      //첫 번째 위치에 추가

      if (!head) {
        head = node;
        tail = node;
      } else {
        node.next = current;
        current.prev = node;
        head = node;
      }
    } else if (position === length) {
      //마지막 원소

      current = tail;
      current.next = node;
      node.prev = current;
      tail = node;
    } else {
      while (index++ < position) {
        //{3}
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;

      current.prev = node;
      node.prev = previous;
    }

    length++; //리스트의 크기를 업데이트한다

    return true;
  };

  this.removeAt = function (position) {
    //범위 이외의 값인지 체크한다
    if (position < 0 && position >= length) return null;

    let current = head;
    let previous;
    let index = 0;

    //첫 번째 원소를 삭제한다
    if (position === 0) {
      head = current.next;

      //원소가 하나뿐이라면 tail을 업데이트한다
      if (length === 1) {
        tail = null;
      } else {
        head.prev = null;
      }
    } else if (position === length - 1) {
      //마지막 원소

      current = tail;
      tail = current.prev;
      tail.next = null;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      //이전 것을 현재의 다음으로 링크한다 - 건너뛴다
      previous.next = current.next;
      current.next.prev = previous;
    }

    length--;

    return current.element;
  };

  this.remove = function (element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    let current = head;
    let index = -1;

    //첫 번째 원소 체크
    if (element == current.element) {
      return 0;
    }

    index++;

    //중간 원소 체크
    while (current.next) {
      if (element == current.element) {
        return index;
      }

      current = current.next;
      index++;
    }

    //마지막 원소 체크
    if (element == current.element) {
      return index;
    }

    return -1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.toString = function () {
    let current = head;
    let s = current ? current.element : "";

    while (current && current.next) {
      current = current.next;
      s += ", " + current.element;
    }

    return s;
  };

  this.inverseToString = function () {
    let current = tail;
    let s = current ? current.element : "";

    while (current && current.prev) {
      current = current.prev;
      s += ", " + current.element;
    }

    return s;
  };

  this.printInverse = function () {
    console.log(this.inverseToString());
  };

  this.getHead = function () {
    return head;
  };

  this.getTail = function () {
    return tail;
  };
}

const list = new DoublyLinkedList();

list.append(15);
console.log(list);

list.append(16);
console.log(list);

list.append(17);
console.log(list);

list.insert(0, 13);
console.log(list);

list.insert(4, 18);
console.log(list);

list.insert(1, 14);
console.log(list);

list.removeAt(0);
console.log(list);

list.removeAt(list.size() - 1);
console.log(list);

list.removeAt(1);
console.log(list);

list.remove(16);
console.log(list);

list.remove(14);
console.log(list);

list.remove(17);
console.log(list);
