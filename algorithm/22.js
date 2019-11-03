function adjacentElementsProduct(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * arr[i + 1]);
  }

  array = array.filter(num => !Number.isNaN(num));
  let result = Math.max(...array);
  return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
