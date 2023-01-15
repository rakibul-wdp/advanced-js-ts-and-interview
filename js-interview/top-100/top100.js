// 1
// let a = [];
// let b = [];

// console.log([1] === [1]);
// console.log(a == b);
// console.log(a === b);

// memory location compare and memory location difference

// 2
// let a = [];
// let b = a;

// console.log(a == b);
// console.log(a === b);

// memory location same

// 3
// let a = [20];
// let b = [20];

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// here not compare memory location, here just compare index value

// 4
// let z = [1, 2, 3, 4];
// let a = {name: "john"};
// console.log(...z);
// spread allows iterable

// 5
// console.log(typeof NaN);
// console.log("hello" / 2);
// Not a number

// 6
// let data = 10 - -10;
// console.log(data);
/// minus minus plus (mathematical equation)

// 7
// const set = new Set([1, 1, 2, 3, 4, 4]);
// console.log(set);
// set 

// 8
let data = {name: "Omok"};
// console.log(delete data.name);
console.log(delete data);
console.log(data);
// the delete operator removes a property from an object. If the property's value is an object and there are not more references to the object, the object held by that property is eventually released automatically.