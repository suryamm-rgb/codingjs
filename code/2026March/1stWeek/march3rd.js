///////// Print Numbers in Reverse

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

////// Print Table till N
//////Input: 3, 5

// let num = 3;
// let endNum = 5;
// for (let i = 1; i <= endNum; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }
///////// Count Factors of a Number

// let Fact = 6;
// let FactCount = 0;
// for (let i = 1; i <= Fact; i++) {
//   if (Fact % i === 0) {
//     FactCount++;
//   }
// }
// console.log("Fact Count", FactCount);

/////// Check Strong Number
/////// Input: 145

// let num = 145;
// let temp = num;
// let sum = 0;

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// while (temp > 0) {
//   let digit = temp % 10;
//   sum += factorial(digit);
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log("Strong Number");
// } else {
//   console.log("Not Strong Number");
// }

// Sum of Squares till N
// Input: 3
// Output: 14
let n = 3;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i * i;
}

console.log(sum);
