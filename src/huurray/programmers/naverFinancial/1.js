function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

function solution(numbers) {
  var answer = [];

  check(numbers[0]);
  // for (let i = 0; i < numbers.length; i++) {
  //   answer.push(check(numbers[i]));
  // }

  return answer;
}

function check(numbers) {
  numbers.sort((a, b) => a - b);
  const all = getCombinations(numbers, 3);
  const SUM = numbers[0] + numbers[8] + numbers[4];
  const rows = [];

  for (let i = 0; i < all.length; i++) {
    const sum = all[i].reduce((a, b) => a + b, 0);
    if (sum === SUM) {
      rows.push(all[i]);
    }
  }
  console.log(rows);

  if (rows.length < 6) return 0;
  return 1;
}

console.log(
  'result',
  solution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [3, 4, 5, 3, 4, 5, 3, 4, 5],
    [1, 2, 1, 2, 1, 2, 1, 2, 1],
  ])
);
