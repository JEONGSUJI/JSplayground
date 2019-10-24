// 15. 정삼각형 출력하기

// var result = '';

// for (var i = 5; i > 0; i--){
//   for (var j = 0; j < 5; j++) {
//     if (i > j) {
//       result += ' ';
//     } else {
//       result += '*';
//     }
//   }

//   result += '*';

//   for (var j = 0; j < 5; j++) {
//     if (i <= j) result += '*';
//   }
//   result += '\n';
// }

// console.log(result);


// 공백 4 3 2 1 0, 별 1 3 5 7 9 증가

var result = '';

for (var i = 0; i < 5; i++){
  for (var j = 4; j > i; j--){
    result += ' ';
  }

  for (var k = 1; k <= (i * 2) + 1; k++){
    result += '*';
  }

  result += '\n';
}

console.log(result);