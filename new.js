console.log("Ex-1");
console.log("using for");
let num = [1, 2, 3];

for (let i = 0; i < num.length; i++) {
  console.log(Math.pow(2, num[i]));
}
console.log("using forEach");
num.forEach(function (n) {
  console.log(Math.pow(2, n));
});
console.log("using map");
let numbers = num.map(function (n) {
  return Math.pow(2, n);
});
console.log(numbers);

console.log("Ex-2");
let number = [1, 2, 4, "obada"];
let evenOdd = number.map(function (n) {
  if (!isNaN(n)) {
    if (n % 2 == 0) return "even: " + n;
    else return "odd: " + n;
  } else return "N/A " + n;
});
console.log(evenOdd);

console.log("Ex-3");
let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
names.forEach(function (value) {
  console.log(value);
});
let names2 = [];
names.forEach(function (value) {
  names2.push(value);
});
console.log(names2);

console.log("Ex-4");
let fizzbuzz = [15, 3, 5, 11];
let fizzbuzz2 = fizzbuzz.map(function (value) {
  if (value % 3 == 0 && value % 5 == 0) return "fizzbuzz";
  else if (value % 3 == 0) return "fizz";
  else if (value % 5 == 0) return "buzz";
  else return value;
});
console.log(fizzbuzz2);

let arr = [];
fizzbuzz.forEach(function (value) {
  if (value % 3 == 0 && value % 5 == 0) arr.push("fizzbuzz");
  else if (value % 3 == 0) arr.push("fizz");
  else if (value % 5 == 0) arr.push("buzz");
  else arr.push(value);
});
console.log(arr);

function fizzbuzzFunction() {
  let arr = [];
  fizzbuzz.forEach(function (value) {
    if (value % 3 == 0 && value % 5 == 0) arr.push("fizzbuzz");
    else if (value % 3 == 0) arr.push("fizz");
    else if (value % 5 == 0) arr.push("buzz");
    else arr.push(value);
  });
  return arr;
}
console.log(fizzbuzzFunction());
