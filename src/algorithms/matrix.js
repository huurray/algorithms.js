function spiralMatrix(row, col) {
  var x = { start: 0, end: row - 1, cur: 0 };
  var y = { start: 0, end: col - 1, cur: 0 };
  var direction = 1;
  var run = 'y';
  var returnArray = Array.from(Array(row), () => new Array(col));

  for (var i = 0; i < row * col; i++) {
    returnArray[x.cur][y.cur] = i + 1;
    if (run === 'y') {
      y.cur += direction;
      if (direction > 0 && y.end === y.cur) {
        run = 'x';
        x.start += direction;
      } else if (direction < 0 && y.start === y.cur) {
        run = 'x';
        x.end += direction;
      }
    } else {
      x.cur += direction;
      if (direction > 0 && x.end === x.cur) {
        run = 'y';
        direction = -1;
        y.end += direction;
      } else if (direction < 0 && x.start === x.cur) {
        run = 'y';
        direction = 1;
        y.start += direction;
      }
    }
  }
  return returnArray;
}
