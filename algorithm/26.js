function specialSort(array) {
  const result = array.sort((a, b) => {
    if (a > b) return a - b;
  });

  return result;
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]
