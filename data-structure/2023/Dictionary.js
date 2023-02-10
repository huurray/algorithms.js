export function Dictionary() {
  let items = {};

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    return items.hasOwnProperty(key);
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  this.values = function () {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.each = function (fn) {
    for (var k in items) {
      if (this.has(k)) {
        fn(k, items[k]);
      }
    }
  };

  this.getItems = function () {
    return items;
  };
}

const dictionary = new Dictionary();

dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.has("Gandalf")); //결과는 true
console.log(dictionary.size()); //결과는 3

console.log(dictionary.keys()); //결과는 ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()); //결과는 ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get("Tyrion")); //결과는 tyrion@email.com

dictionary.remove("John");

console.log(dictionary.keys()); //결과는 ["Gandalf", "Tyrion"]
console.log(dictionary.values()); //결과는 ["gandalf@email.com", "tyrion@email.com"]

console.log(dictionary.getItems()); //Object {Gandalf: "gandalf@email.com", Tyrion: "tyrion@email.com"}
