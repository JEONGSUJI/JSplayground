function generateRange(from, to) {
  const res = [];
  for (let i = 0; i < to - from + 1; i++) res.push(from + i);
  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
