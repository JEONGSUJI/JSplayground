function getArray(arr) {
  return arr.filter(num => !(num % 2) && num > 3);
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
