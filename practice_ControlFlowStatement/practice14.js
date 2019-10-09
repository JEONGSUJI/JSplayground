// 삼각형 출력하기 - pattern 4
var result = '';

for (var i = 5; i > 0; i--) {
  for (var j = 1; j <= 5; j++) {
    if (i > j) {
      result += ' ';
    } else {
      result += '*';
    }
  }
  result += '\n';
}

console.log(result);