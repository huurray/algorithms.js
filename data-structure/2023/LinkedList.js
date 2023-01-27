function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    var node = new Node(element),
      current;

    if (head === null) {
      //리스트가 비어있다면
      head = node;
    } else {
      current = head;

      //마지막 원소를 발견할 때까지 계속 루프 순환한다
      while (current.next) {
        current = current.next;
      }

      //마지막 원소를 링크할 수 있게 다음 노드에 할당한다
      current.next = node;
    }

    length++; //리스트의 크기를 업데이트한다
  };

  this.insert = function (position, element) {
    //범위 이외의 값인지 체크한다
    if (position < 0 && position > length) return false;

    var node = new Node(element),
      current = head,
      previous,
      index = 0;

    if (position === 0) {
      //첫 번째로 추가

      node.next = current;
      head = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }

    length++; //리스트 크기를 업데이트한다

    return true;
  };

  this.removeAt = function (position) {
    //범위 이외의 값인지 체크한다
    if (position < 0 && position >= length) return null;

    var current = head,
      previous,
      index = 0;

    //첫 번째 원소 삭제
    if (position === 0) {
      head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      //현재의 다음과 이전 것을 연결한다: 삭제하기 위해 건너뛴다
      previous.next = current.next;
    }

    length--;

    return current.element;
  };

  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    var current = head,
      string = "";

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  };

  this.print = function () {
    console.log(this.toString());
  };
}

var list = new LinkedList();
list.append(15);
console.log(list);
console.log(list.indexOf(15));
list.append(10);
console.log(list);
console.log(list.indexOf(10));
list.append(13);
console.log(list);
console.log(list.indexOf(13));
console.log(list.indexOf(10));
list.append(11);
list.append(12);
console.log(list);
console.log(list.removeAt(1));
console.log(list);
console.log(list.removeAt(3));
console.log(list);
list.append(14);
console.log(list);
list.insert(0, 16);
console.log(list);
list.insert(1, 17);
console.log(list);
list.insert(list.size(), 18);
console.log(list);
list.remove(16);
console.log(list);
list.remove(11);
console.log(list);
list.remove(18);
console.log(list);
