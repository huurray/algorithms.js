// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function combination(arr, num) {
  let result = [];
  if (num === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, array) => {
    let rest = array.slice(i + 1);
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map((x) => [e, ...x]);
    result.push(...combiArr);
  });
  return result;
}

function arrayIntersect(a, b) {
  let tmp = {};
  let res = [];
  for (let i = 0; i < a.length; i++) tmp[a[i]] = 1;
  for (let i = 0; i < b.length; i++) if (tmp[b[i]]) res.push(b[i]);
  return res;
}

function solution() {
  const firstInput = input[0]
    .split(' ')
    .filter((c) => c.length > 0)
    .map((c) => parseInt(c));

  const personsLength = firstInput[0];
  const persons = input[1].split(' ').filter((c) => c.length > 0);
  const friendsLength = firstInput[1];
  const friends = input.slice(2, input.length);

  const combi = combination(persons, 2);

  const notFriends = [];

  for (let i = 0; i < combi.length; i++) {
    const target = combi[i].join(' ');
    let alreadyFriend = false;
    for (let j = 0; j < friendsLength; j++) {
      const case1 = friends[j];
      const case2 = friends[j].split(' ').reverse().join(' ');

      if (case1 === target) {
        alreadyFriend = true;
        break;
      }
      if (case2 === target) {
        alreadyFriend = true;
        break;
      }
    }
    if (!alreadyFriend) {
      notFriends.push(combi[i]);
    }
  }

  const map = {};
  for (let i = 0; i < personsLength; i++) {
    const person = persons[i];
    for (let j = 0; j < friendsLength; j++) {
      const friend = friends[j].split(' ');
      if (friend.findIndex((f) => f === person) !== -1) {
        const target = friend.filter((f) => f !== person)[0];
        if (map[person]) {
          map[person] = [...map[person], target];
        } else {
          map[person] = [target];
        }
      }
    }
  }

  let count = 0;
  let target = [];

  for (let i = 0; i < notFriends.length; i++) {
    const currentCase = notFriends[i];
    if (!map[currentCase[0]] || !map[currentCase[1]]) continue;
    const newCount = arrayIntersect(map[currentCase[0]], map[currentCase[1]])
      .length;
    if (count < newCount) {
      count = newCount;
      target = currentCase;
    }
  }

  target.sort();

  console.log(target.join(' '));
  console.log(count);
}

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution();
  process.exit();
});
