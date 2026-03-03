//1. Count Vowels

const str = "hello";
const vowel = "aeiouAEIOU";
let count = 0;
for (let i = 0; i <= str.length - 1; i++) {
  if (vowel.includes(str[i])) {
    count++;
  }
  console.log(str[i]);
}
console.log("count", count);

// 2. Reverse String
let reverser = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverser += str[i];
}

console.log("reverser", reverser);

// Palindrome String

const palindrome = "madam";
const origin = palindrome;
const pali = palindrome.split("").reverse().join("");
if (pali === origin) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}

//4. String Length Without length()

const strLength = "Hello World";
let lengthCount = 0;
for (let i = 0; i < strLength.length; i++) {
  lengthCount += 1;
  console.log("str length", strLength[i]);
}

console.log("String Length", lengthCount);

const str3 = "hello";
let lengthCounts = 0;

for (let char of str3) {
  lengthCounts++;
}

console.log(lengthCounts); // 5

//5. Convert Lowercase to Uppercase

console.log(strLength.toUpperCase());
console.log(str.toLowerCase());
