//1.  Factorial of a Number

const number = 5;
let count = 1;
for (let i = 1; i <= number; i++) {
  count *= i;
}
console.log(count);

// 2. Reverse a Number

const reverseNumber = 1234;
let reverse = "";
let numStr = reverseNumber.toString();
for (let i = numStr.length - 1; i >= 0; i--) {
  reverse += numStr[i];
}
console.log(reverse);

//or

let reverserNum = 1234;
let rev = 0;
while (reverserNum > 0) {
  let digit = reverserNum % 10;
  rev = rev * 10 + digit;
  reverserNum = Math.floor(reverserNum / 10);
}

console.log(rev);

//3. Count Digits

let num = 567899;
let counts = 0;
let countss = num.toString().length; // First Method
console.log(countss);
while (num > 0) {
  // Second Method
  num = Math.floor(num / 10);
  counts++;
}
console.log(counts);

// 4. Palindrome Number

let input = 121;
let original = input;
let palindrome = 0;
if (input.toString().split("").reverse().join("") == input) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

//or
while (input > 0) {
  let digit = input % 10;
  palindrome = palindrome * 10 + digit;
  input = Math.floor(input / 10);
}
console.log(palindrome);
if (palindrome === original) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
//5. Sum of Digits
let sum = 123;
let totalSum = 0;

let summ = sum.toString();

for (let i = 0; i < summ.length; i++) {
  totalSum += Number(summ[i]);
}

console.log(totalSum);
