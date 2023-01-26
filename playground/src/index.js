function* solution(max) {
  let index = 0;
  let sum = 0;
  while (index < max) {
    index++;
    sum += index;
    yield sum;
  }
}

console.log("result", solution(3));
