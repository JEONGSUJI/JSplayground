function average(array) {
  let result = array.reduce((pre, cur) => {
    pre += cur;
    return pre;
  }, 0);

  result /= array.length;
  return result;
}

console.log(average([5, 3, 4])); // 4
