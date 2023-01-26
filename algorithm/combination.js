function 순서대로중복없는조합(arr, result) {
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(0, i + 1));
  }
  arr.shift();
  순서대로중복없는조합(arr, result);
  return result;
}
