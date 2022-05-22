function getLangCode(lang) {
  if (lang === 'C' || lang === 'C++' || lang === 'C#') return 'C';
  return lang;
}

function checkDuplicate(array) {
  return [...new Set(array)].length === 1;
}

function validate(ipGroup) {
  const { count, langCodes, scores } = ipGroup;
  if (count === 2 && checkDuplicate(langCodes) && checkDuplicate(scores)) return false;
  if (count === 3 && checkDuplicate(langCodes)) return false;
  if (count === 4) return false;
  return true;
}

function solution(ip_addrs, langs, scores) {
  const totalLength = ip_addrs.length;

  let validNum = totalLength;
  let hash = {};

  for (let i = 0; i < totalLength; i++) {
    if (hash[ip_addrs[i]]) {
      hash[ip_addrs[i]] = {
        count: hash[ip_addrs[i]].count + 1,
        langCodes: [...hash[ip_addrs[i]].langCodes, getLangCode(langs[i])],
        scores: [...hash[ip_addrs[i]].scores, scores[i]],
      };
    } else {
      hash[ip_addrs[i]] = {
        count: 1,
        langCodes: [getLangCode(langs[i])],
        scores: [scores[i]],
      };
    }
  }

  for (const ip in hash) {
    const ipGroup = hash[ip];
    if (!validate(ipGroup)) {
      validNum -= ipGroup.count;
    }
  }

  return validNum;
}

console.log(
  'result',
  solution(
    [
      '5.5.5.5',
      '155.123.124.111',
      '10.16.125.0',
      '155.123.124.111',
      '5.5.5.5',
      '155.123.124.111',
      '10.16.125.0',
      '10.16.125.0',
    ],
    ['Java', 'C++', 'Python3', 'C#', 'Java', 'C', 'Python3', 'JavaScript'],
    [294, 197, 373, 45, 294, 62, 373, 373]
  )
);
