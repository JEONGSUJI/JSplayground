function uniq(array) {
  return array.reduce((pre, cur, i, self) => {
    if (self.indexOf(cur) === i) pre.push(cur);
    return pre;
  }, []);
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
