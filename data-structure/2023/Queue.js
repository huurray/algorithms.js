function Queue() {
  let items = [];

  this.enqueue = (element) => {
    items.push(element);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.front = () => {
    return items[0];
  };

  this.isEmpty = () => {
    return items.length == 0;
  };

  this.clear = () => {
    items = [];
  };

  this.size = () => {
    return items.length;
  };

  this.get = () => {
    return items;
  };
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
console.log(queue.size());
queue.dequeue();
queue.dequeue();
console.log(queue.get());
