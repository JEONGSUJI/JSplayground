// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var dice1 = 1; dice1 <= 6; dice1++){
  for (var dice2 = 1; dice2 <= 6; dice2++) {
    if (dice1 + dice2 === 6) console.log([dice1, dice2]);
  }
}