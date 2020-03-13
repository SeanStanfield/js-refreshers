function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("leap year");
      } else {
        console.log("not leap !!");
      }
    } else {
      console.log("leap year");
    }
  } else {
    console.log("not leap !!");
  }
}

isLeapYear(1843);
isLeapYear(2004);
isLeapYear(1800);
isLeapYear(1600);
