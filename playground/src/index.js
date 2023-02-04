function solution(script) {
  const lines = script.toString().trim().split(/\n/g);
  const inputs = lines[0].split(" ").map(Number);
  inputs.sort();

  let overlapNum = 0;
  const overlapCount = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (i === 0) continue;
    if (inputs[i - 1] === inputs[i]) {
      overlapNum = inputs[i];
      overlapCount++;
    }
  }

  switch (overlapCount) {
    case 2:
      console.log(10000 + overlapNum * 1000);
      break;
    case 1:
      console.log(1000 + overlapNum * 100);
      break;
    case 0:
      console.log(inputs.at(-1) * 100);
      break;
    default:
      break;
  }
}

// solution(require("fs").readFileSync("/dev/stdin"));

solution(`
2 2 2 
`);
