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
