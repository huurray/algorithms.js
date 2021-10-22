let input = ['5', '1 3 5 7 9'];

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

solution();
