function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(n) {
  if (typeof n !== 'number') return 0;

  let loop = true;
  let team = [n];
  let s = n.toString();

  while (loop) {
    let next = 0;
    for (let i = 0; i < s.length; i++) {
      const target = Number(s[i]);
      if (target) {
        next += factorial(target);
      } else {
        next += 1;
      }
    }

    if (team.includes(next)) {
      loop = false;
    } else {
      team.push(next);
      s = next.toString();
    }
  }

  return Math.max(...team) * team.length;
}

console.log(solution(5));
