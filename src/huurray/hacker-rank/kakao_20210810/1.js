function solution(s) {
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    const target = s.slice(0, i) + s.slice(i + 1);
    const letter = s[i];

    if (target.indexOf(letter) === -1) {
      result = s.indexOf(letter) + 1;
      break;
    }
  }

  return result;
}

console.log(solution('hackthegame'));
