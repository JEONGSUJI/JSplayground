// 삼각형 출력하기 - pattern 1

var result = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 1; j++) result += '*';
  result += '\n';
}

console.log(result);