//1. Print Numbers from 1 to N

n = 5;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

//2. Check Even or Odd

evenOrOdd = 8;

if (evenOrOdd % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Largest of Three Numbers

let a = 10;
let b = 25;
let c = 45;
if (a > b && a > c) {
  console.log("a is largest");
} else if (b > a && b > c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}

//4. Sum of First N Numbers

FirstNNumber = 4;

let count = 0;
for (let i = 1; i <= FirstNNumber; i++) {
  count += i;
}
console.log(count);

//5. Multiplication Table

let Number = 3;

for (let i = 1; i <= 10; i++) {
  let NumberMulti = 3;
  NumberMulti *= i;
  console.log(`${Number}*${i} = ${NumberMulti}`);
}

// OR
let number = 3;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
