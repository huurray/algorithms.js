// Run by Node.js
const readline = require('readline');

let input = [];

function permutation(arr, num) {
  let result = [];
  if (num === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, array) => {
    let rest = [...array.slice(0, i), ...array.slice(i + 1)];
    let permutations = permutation(rest, num - 1);
    let combiArr = permutations.map((x) => [e, ...x]);
    result.push(...combiArr);
  });
  return result;
}

function solution() {
  const length = parseInt(input[0]);
  const cards = input[1]
    .split(' ')
    .filter((c) => c.length > 0)
    .map((c) => parseInt(c));
  const allCase = permutation(cards, length);

  let maxSum = 0;
  for (let i = 0; i < allCase.length; i++) {
    const currentCase = allCase[i];
    let sum = 0;
    for (let j = 0; j < currentCase.length; j++) {
      const index = cards.findIndex((card) => card === currentCase[j]);
      const isOdd = (j + 1) % 2 === 0;
      const target = cards[index];
      if (isOdd) {
        sum -= target * (j + 1);
      } else {
        sum += target * (j + 1);
      }
    }
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  console.log(maxSum);
}

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    input.push(line);
  }

  solution();
  process.exit();
})();

function solution(cards) {
  cards.sort();
  let value = 0;
  let maxIdx = cards.length - 1;
  let minIdx = 0;
  let size = cards.length;
  while (size !== 0) {
    if (size % 2 === 1) {
      value += cards[maxIdx] * size;
      maxIdx--;
    } else {
      value += cards[minIdx] * size * -1;
      minIdx++;
    }
    size--;
  }
  return value;
}

solution([1, 3, 5, 6, 7, 9])(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n = null;
  let cards = null;

  for await (const line of rl) {
    if (n === null) {
      n = +line;
    } else if (cards === null) {
      cards = line
        .trim()
        .split(' ')
        .map((v) => +v);
    } else {
      rl.close();
    }
  }

  console.log(solution(cards));
  process.exit();
})();
