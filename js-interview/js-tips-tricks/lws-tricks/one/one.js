// Remove falsy values from any array
let miscellaneous = ["apple", false, "banana", NaN, 0, undefined, "mango", null, "", "jackfruits"];

// passing Boolean to array.filter() will remove falsy values from array
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);