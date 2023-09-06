// Remove falsy values from any array

let miscellaneous = [
  "apple",
  false,
  "orange",
  NaN,
  0,
  undefined,
  "chilli",
  null,
  "",
  "mango",
];

// passing boolean to array.filter() will remove falsy values from array
let fruits = miscellaneous.filter(Boolean);

console.log(fruits);

// explanation
// Boolean(expression) is JS return true/false
Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean("JavaScript"); // true
Boolean(""); // false

// array example
let miscellaneous2 = ["apple", false, "orange", NaN];
let fruits2 = miscellaneous2.filter(function (element) {
  return false;
});
let fruits3 = miscellaneous2.filter(Boolean);

console.log(fruits2, fruits3);
