// Check Leap Year
// Input: 2024
// Output: Leap Year

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(checkLeapYear(2024));

// Count Even & Odd Digits

const EvenOrOdd = 12345;
let EvenCount = 0;
let OddCount = 0;
const EvenOdd = EvenOrOdd.toString();

for (let i = 0; i < EvenOdd.length; i++) {
  if (EvenOdd[i] % 2 === 0) {
    EvenCount += 1;
  } else {
    OddCount += 1;
  }
}
console.log("Even Count", EvenCount);
console.log("Odd Count", OddCount);

// Sum of Even Numbers till N

// function SumOfNumbers(num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

//// or

function SumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(SumOfNumbers(10));

// Product of Digits example 234. (2*3*4) = 24

function Product(num) {
  let ProductSum = 1;
  for (let i = 0; i <= num.length - 1; i++) {
    ProductSum *= num[i];
  }
  return ProductSum;
}
console.log(Product("234"));

// Check Perfect Square

function checkPerfectSquare(num) {
  const root = Math.sqrt(num);
  if (Number.isInteger(root)) {
    return "Perfect Square";
  } else {
    return "Not Perfect Square";
  }
}

console.log(checkPerfectSquare(6));
console.log(checkPerfectSquare(25));
