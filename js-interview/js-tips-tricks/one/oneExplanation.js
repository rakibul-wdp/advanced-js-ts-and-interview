// Boolean(expression) is JS returns true/false
Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean("JavaScript"); // true
Boolean(""); // false

// array example
let miscellaneous = ["apple", false, "banana", NaN];
let fruits = miscellaneous.filter(function(element) {return false;});
let fruit = miscellaneous.filter(Boolean);

console.log(fruit);