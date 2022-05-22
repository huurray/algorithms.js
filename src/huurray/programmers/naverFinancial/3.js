function solution(command, buttons, scores) {
  var answer = 0;

  for (let i = 0; i < buttons.length; i++) {
    let score = 0;
    let commentText = command;

    const initSkill = buttons[i];
    if (commentText.includes(initSkill)) {
      commentText = commentText.replace(initSkill, '');
      score += scores[i];
    }

    for (let j = i; j < buttons.length; j++) {
      const skill = buttons[j];
      if (commentText.includes(skill)) {
        commentText = commentText.replace(skill, '');
        score += scores[j];
      }
    }

    score += commentText.length;

    if (answer < score) {
      answer = score;
    }
  }

  if (answer < command.length) {
    answer = command.length;
  }

  return answer;
}

console.log('result', solution('ABCXYZ', ['BCXY'], [2]));
