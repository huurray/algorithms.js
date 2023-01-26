let input = ['4 2', 'RA LW LD JX', 'LW JX', 'LD JX'];

function combination(arr, num) {
  let result = [];
  if (num === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, array) => {
    let rest = array.slice(i + 1);
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map((x) => [e, ...x]);
    result.push(...combiArr);
  });
  return result;
}

function arrayIntersect(a, b) {
  let tmp = {};
  let res = [];
  for (let i = 0; i < a.length; i++) tmp[a[i]] = 1;
  for (let i = 0; i < b.length; i++) if (tmp[b[i]]) res.push(b[i]);
  return res;
}

function solution() {
  const firstInput = input[0]
    .split(' ')
    .filter((c) => c.length > 0)
    .map((c) => parseInt(c));

  const personsLength = firstInput[0];
  const persons = input[1].split(' ').filter((c) => c.length > 0);
  const friendsLength = firstInput[1];
  const friends = input.slice(2, input.length);

  const combi = combination(persons, 2);

  const notFriends = [];

  for (let i = 0; i < combi.length; i++) {
    const target = combi[i].join(' ');
    let alreadyFriend = false;
    for (let j = 0; j < friendsLength; j++) {
      const case1 = friends[j];
      const case2 = friends[j].split(' ').reverse().join(' ');

      if (case1 === target) {
        alreadyFriend = true;
        break;
      }
      if (case2 === target) {
        alreadyFriend = true;
        break;
      }
    }
    if (!alreadyFriend) {
      notFriends.push(combi[i]);
    }
  }

  const map = {};
  for (let i = 0; i < personsLength; i++) {
    const person = persons[i];
    for (let j = 0; j < friendsLength; j++) {
      const friend = friends[j].split(' ');
      if (friend.findIndex((f) => f === person) !== -1) {
        const target = friend.filter((f) => f !== person)[0];
        if (map[person]) {
          map[person] = [...map[person], target];
        } else {
          map[person] = [target];
        }
      }
    }
  }

  let count = 0;
  let target = [];

  for (let i = 0; i < notFriends.length; i++) {
    const currentCase = notFriends[i];
    if (!map[currentCase[0]] || !map[currentCase[1]]) continue;
    const newCount = arrayIntersect(map[currentCase[0]], map[currentCase[1]])
      .length;
    if (count < newCount) {
      count = newCount;
      target = currentCase;
    }
  }

  target.sort();

  console.log(count);
  console.log(target.join(' '));
}

solution();

// function solution(names, relationships) {
//   let maxCount = 0;
//   let maxFriend = '';
//   const checked = new Set();

//   for (const name of names) {
//     const friends = relationships[name];
//     if (!friends) continue;

//     const temp = {};
//     for (const n of names) {
//       if (name === n) {
//         continue;
//       }
//       temp[n] = true;
//     }

//     const friendsObj = {};
//     for (const friend of friends) {
//       delete temp[friend];
//       friendsObj[friend] = true;
//     }

//     for (const notFriendName in temp) {
//       const relationshipString =
//         name < notFriendName
//           ? `${name} ${notFriendName}`
//           : `${notFriendName} ${name}`;
//       if (checked.has(relationshipString)) {
//         continue;
//       }

//       let friendCount = 0;
//       const friendsOfNotFriend = relationships[notFriendName];
//       if (!friendsOfNotFriend) continue;

//       for (const f of friendsOfNotFriend) {
//         if (f in friendsObj) {
//           friendCount += 1;
//         }
//       }

//       checked.add(relationshipString);

//       if (friendCount > maxCount) {
//         maxCount = friendCount;
//         maxFriend = relationshipString;
//       }
//     }
//   }
//   return [maxFriend, maxCount];
// }

// let N = null; // 사람 수
// let M = null; // 친구 관계 수
// let names = null;
// let relationships = {};
// let count = 0;
// rl.on("line", function(line) {
// 	if (N === null) {
// 		const [n, m] = line.split(" ");
// 		N = +n;
// 		M = +m;
// 	} else if (names === null) {
// 		names = line.split(" ");
// 	} else if (count !== M) {
// 		count += 1
// 		const [A, B] = line.split(" ");
// 		if (A in relationships) {
// 			relationships[A].push(B);
// 		} else {
// 			relationships[A] = [B];
// 		}

// 		if (B in relationships) {
// 			relationships[B].push(A);
// 		} else {
// 			relationships[B] = [A];
// 		}
// 	} else {
// 		rl.close();
// 	}
// }).on("close", function() {
// 	const [relationship, rcount] = solution(names, relationships);
// 	console.log(relationship);
// 	console.log(rcount);
// 	process.exit();
// });

// solution([
//   'A', 'B', 'C',
//   'D', 'E', 'P',
//   'Q'
// ], {
//   P: [ 'A', 'B', 'C', 'D' ],
//   A: [ 'P' ],
//   B: [ 'P', 'Q' ],
//   C: [ 'P', 'Q' ],
//   D: [ 'P', 'Q' ],
//   Q: [ 'B', 'C', 'D', 'E' ],
//   E: [ 'Q' ]
// })
