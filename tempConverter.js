function CtoF(number) {
  let answer = number * 1.8 + 32;
  return answer.toFixed(1);
}

function FtoC(number) {
  let answer = (number - 32) / 1.8;
  return answer.toFixed(1);
}

console.log(CtoF(20));

console.log(FtoC(100));
