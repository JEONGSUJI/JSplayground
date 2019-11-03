function findDuplicated(array) {
  const count = array.reduce((pre, cur, i, self) => {
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
  }, {});

  console.log(count);
  console.log(Math.max(count));

  let result = [];
  for (let i = 1; i < count; i++) {
    if (count[i] === 2) result += [i];
  }
  return result;
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
