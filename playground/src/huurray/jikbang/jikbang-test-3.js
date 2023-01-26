let input = ['6 14 ', '2 1 3 4 -3 -4 -1 -2 5 -5 1 6 -1 -6 ', '7'];

function solution() {
  let personsMaybeInspected = [];
  let result = -1;

  const records = input[1]
    .trim()
    .split(' ')
    .filter((c) => c.length > 0);
  const infectedPerson = input[2];

  let map = {};
  let current = [2];
  for (let i = 0; i < records.length; i++) {
    const record = Math.abs(parseInt(records[i]));
    const targetIndex = current.findIndex((c) => c === record);
    if (targetIndex === -1) {
      current.push(record);
    }

    for (let j = 0; j < current.length; j++) {
      const target = current[j];
      if (map[target]) {
        map[target] = [...map[target], i + 1];
      } else {
        map[target] = [i + 1];
      }
    }

    if (targetIndex !== -1) {
      current.splice(targetIndex, 1);
    }
  }

  const infectedPersonRecord = map[infectedPerson];
  if (!infectedPersonRecord) {
    console.log(-1);
    return;
  }

  for (const key in map) {
    if (key !== infectedPerson) {
      const targetRecord = map[key];

      for (let i = 0; i < targetRecord.length; i++) {
        let finished = false;
        for (let j = 0; j < infectedPersonRecord.length; j++) {
          if (infectedPersonRecord[j] === targetRecord[i]) {
            finished = true;
            break;
          }
        }
        if (finished) {
          personsMaybeInspected.push(key);
          break;
        }
      }
    }
  }

  if (personsMaybeInspected.length > 0) {
    result = personsMaybeInspected.join(' ');
  }

  console.log(result);
}

solution();

// function solution(data, target) {
//   let contacts = new Set();
//   const temp = {};
//   let isTargetRange = false;
//   for (const person of data) {
//       if (person === target) {
//           isTargetRange = true;
//           continue;
//       } else if (person === target * -1) {
//           isTargetRange = false;
//           for (const key in temp) {
//               contacts.add(+key);
//           }
//           continue;
//       }

//       if (isTargetRange) {
//           if (person < 0) {
//               contacts.add(person * -1);
//           } else {
//               contacts.add(person);
//           }
//       } else {
//           if (person < 0) {
//               delete temp[person * -1];
//           } else {
//               temp[person] = true;
//           }
//       }
//   }

//   if (contacts.length === 0) {
//       return [-1];
//   }
//   contacts = [...contacts]
//   contacts.sort();
//   return contacts;
// }

// solution([
//  2,  1, 3,  4, -3, -4,
// -1, -2, 5, -5,  1,  6,
// -1, -6
// ], 1)
