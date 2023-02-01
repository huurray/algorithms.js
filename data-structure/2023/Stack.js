// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
// const N = Number(input);

function Stack() {
  let items = [];

  this.push = (element) => {
    items.push(element);
  };

  this.pop = () => {
    return items.pop();
  };

  this.peek = () => {
    return items[items.length - 1];
  };

  this.isEmpty = () => {
    return items.length == 0;
  };

  this.size = () => {
    return items.length;
  };

  this.get = () => {
    return items;
  };

  this.clear = () => {
    items = [];
  };
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.get());
stack.push(3);
console.log(stack.size());

// 번외 - 하노이의 탑
function towerOfHanoi(n, from, to, helper) {
  if (n > 0) {
    towerOfHanoi(n - 1, from, helper, to);
    to.push(from.pop());
    console.log("-----");
    console.log("Source: " + from.get());
    console.log("Dest: " + to.get());
    console.log("Helper: " + helper.get());
    towerOfHanoi(n - 1, helper, to, from);
  }
}

const source = new Stack();
source.push(3);
source.push(2);
source.push(1);

const dest = new Stack();
const helper = new Stack();

towerOfHanoi(3, source, dest, helper);
