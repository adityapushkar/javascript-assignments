// Javascript question 1
// Check even odd question
const checkEvenOdd = num => {
  if (num % 2 === 0) console.log("Even number");
  else console.log("Odd number");
};

const factorial = num => {
  //base case
  if (num == 0 || num == 1) {
    return 1;
    //recursive case
  } else {
    return num * factorial(num - 1);
  }
};

answer = factorial(4);
console.log("Factorial is ", answer);
