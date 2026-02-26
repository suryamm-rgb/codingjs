// let A = 5;
// let B = 10;

// let C = A;
// A = B;
// B = C;
// //OR
// // [A, B] = [B, A];
// console.log("A", A);
// console.log("B", B);

// // 2. Prime Number Check

// let num = 5;

// let isPrime = true;
// if (num <= 1) {
//   isPrime = false;
// }
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime ? "Prime" : "Not Prime");

// //3. Fibonacci Series
// let fibo = 6;
// let c = 0;
// let d = 1;

// for (let i = 0; i < fibo; i++) {
//   console.log(c);
//   let temp = c + d;
//   c = d;
//   d = temp;
// }

// let n = 7;
// let fib = [0, 1];
// for (let i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log(fib);

// //4. Power of Number
// console.log(2 ** 3);

//5. Print Prime Numbers till N

let N = 10;

for (let num = 2; num <= N; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
