function solution(script) {
  const lines = script.toString().trim().split(/\n/g);
  const inputs = lines[0].split(" ").map(Number);
  let h = inputs[0];
  let m = inputs[1];

  if (h === 0 && m < 45) {
    console.log(`23 ${60 - (45 - m)}`);
    return;
  }

  const minutes = h * 60 + m - 45;
  console.log(`${Math.floor(minutes / 60)} ${minutes % 60}`);
}

// solution(require("fs").readFileSync("/dev/stdin"));

solution(`
0 0
`);
