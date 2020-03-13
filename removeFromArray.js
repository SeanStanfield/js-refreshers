function removeFromArray(initalArray, ...args) {
  let removalArray = args;

  for (let i = 0; i < initalArray.length; i++) {
    console.log(initalArray[i]);
    for (let j = 0; j < removalArray.length; j++) {
      if (removalArray[j] == initalArray[i]) {
        console.log("target found", removalArray[j], " equals", initalArray[i]);
        initalArray.splice(i, 1);
      }
    }
  }
  return initalArray;
}

console.log(removeFromArray([5, 3, 6, 8], 5, 3, 6, 1));
