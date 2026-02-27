// 1. Find GCD
// gcd(a, b) = gcd(b, a % b)
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(findGCD(12, 18));

// 2. Find LCM

function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

console.log(findLCM(4, 6));

//3. Armstrong Number

function isArmstrong(num) {
  let original = num;
  let sum = 0;
  let digits = num.toString().length;
  while (num > 0) {
    // 153 -> 15 -> 1
    let digit = num % 10; //3 -> 5 -> 1
    sum += digit ** digits; // 27 -> 27 + 125 + 1
    num = Math.floor(num / 10); // 15 -> 1 -> 0
  }
  return sum === original ? "Armstrong" : "Not Armstrong";
}
console.log(isArmstrong(153));

// 4. Perfect Number

function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num ? "Perfect Number" : "Not Perfect Number";
}

console.log(isPerfect(6));

// 5. Strong Number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isStrong(num) {
  let original = num; //145
  let sum = 0;

  while (num > 0) {
    // 145 -> 14 -> 1 -> exit
    let digit = num % 10; // 5 -> 4 -> 1
    sum += factorial(digit); // (0 + 120) -> + (120 + 24) ->  (144 + 1)
    num = Math.floor(num / 10); // 14 -> 1 -> 0
  }

  return sum === original ? "Strong Number" : "Not Strong Number";
}

console.log(isStrong(145));
