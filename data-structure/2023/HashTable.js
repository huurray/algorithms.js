function HashTable() {
  // 이걸 객체로 하면 HashMap
  const table = [];

  // 충돌이 없어야 좋은 [해시 함수]
  const hashFunction = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  };

  const hashCode = (key) => {
    return hashFunction(key);
  };

  this.put = (key, value) => {
    let position = hashCode(key);
    console.log(position + " - " + key);
    table[position] = value;
  };

  this.get = (key) => {
    return table[hashCode(key)];
  };

  this.remove = (key) => {
    table[hashCode(key)] = undefined;
  };

  this.print = () => {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

const hash = new HashTable();

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaron@email.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul@email.com");
hash.put("Nathan", "nathan@email.com");

console.log("**** 해시 출력 **** ");

hash.print();

console.log("**** 조회 **** ");

console.log(hash.get("Gandalf"));
console.log(hash.get("Loiane"));

console.log("**** 삭제 **** ");

hash.remove("Gandalf");
console.log(hash.get("Gandalf"));
hash.print();
