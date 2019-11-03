function isNotOverlapArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = 0; j < array.length; j++) {
      if (array[i] === j) return true;
      console.log(array[i] === j);
    }
  }
  // return array.reduce((pre,cur,i,self) => );
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false
