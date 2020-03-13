function sumAll(one, two) {
  let first;
  let second;

  if (typeof one != "number" || typeof two != "number" || one < 0 || two < 0) {
    return "Error, positive integers only";
  }

  if (one < two) {
    first = one;
    second = two;
  } else {
    first = two;
    second = one;
  }

  let sumOfInput = first + second;
  let diffOfInput = second - first + 1;

  if (diffOfInput % 2 == 0) {
    let pairs = diffOfInput / 2;
    let result = pairs * sumOfInput;
    return result;
  } else {
    let pairs = (diffOfInput - 1) / 2;
    let middle = sumOfInput / 2;
    let result = pairs * sumOfInput + middle;
    return result;
  }
}

console.log(sumAll(4000, 2));
