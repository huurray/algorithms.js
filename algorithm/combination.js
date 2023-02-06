// 순서대로 중복 없는 순열
function noDuplicatePer(arr, result) {
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(0, i + 1));
  }
  arr.shift();
  noDuplicatePer(arr, result);
  return result;
}

// 조합
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
