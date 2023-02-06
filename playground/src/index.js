function solution(script) {
  const lines = script.toString().trim().split(/\n/g);
  const initNum = +lines[0];

  let count = 0;

  function recur(num) {
    if (count !== 0 && num === initNum) return;
    count++;
    const stringNum = num >= 10 ? `${num}` : `0${num}`;

    const calcNum = Number(stringNum[0]) + Number(stringNum[1]);
    const stringCalcNum = calcNum >= 10 ? `${calcNum}` : `0${calcNum}`;

    const newNum = Number(`${stringNum[1]}${stringCalcNum[1]}`);

    recur(newNum);
  }

  recur(initNum);

  console.log(count);
}

solution(require("fs").readFileSync("/dev/stdin"));

solution(`
0
`);
