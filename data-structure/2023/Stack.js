function Stack() {
  var items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };

  this.toString = function () {
    return items.toString();
  };
}

var stack = new Stack();
console.log(stack.isEmpty()); //결과는 true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // 결과는 8
stack.push(11);
console.log(stack.size()); // 결과는 3
console.log(stack.isEmpty()); //결과는 false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // 결과는 2
stack.print(); // 결과는 [5, 8]

// 번외 - 하노이의 탑
function towerOfHanoi(n, from, to, helper) {
  if (n > 0) {
    towerOfHanoi(n - 1, from, helper, to);
    to.push(from.pop());
    console.log("-----");
    console.log("Source: " + from.toString());
    console.log("Dest: " + to.toString());
    console.log("Helper: " + helper.toString());
    towerOfHanoi(n - 1, helper, to, from);
  }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(3, source, dest, helper);

console.log(source);
console.log(helper);
console.log(dest);
