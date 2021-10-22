function isCorrect(arr) {
  let result = true;
  const max = arr.reduce((prev, current) => (prev > current ? prev : current));
  const targetIndex = arr.indexOf(max);

  let leftCount = arr[0];
  for (let i = 1; i < targetIndex; i++) {
    if (leftCount > arr[i]) {
      result = false;
      break;
    }
    leftCount = arr[i];
  }

  if (result) {
    let rightCount = arr[targetIndex];
    for (let i = targetIndex; i < arr.length; i++) {
      if (rightCount < arr[i]) {
        result = false;
        break;
      }
      rightCount = arr[i];
    }
  }

  return result;
}

function combination(arr, result) {
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(0, i + 1));
  }
  arr.shift();
  combination(arr, result);
  return result;
}

function solution(arr) {
  let result = 0;
  const allCombination = combination(arr, []);

  allCombination.sort((a, b) => b.length - a.length);

  for (let i = 0; i < allCombination.length; i++) {
    if (isCorrect(allCombination[i])) {
      result = allCombination[i].length;
      break;
    }
  }
  return result;
}

console.log(solution([8, 7, 1, 5, 3, 4, 4, 8, 2, 5, 1]));
