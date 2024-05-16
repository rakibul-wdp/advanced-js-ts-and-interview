/**
 * Datatypes
 * Primitive      : String, Number, Boolean, Null, Undefined
 * Non-Primitive  : Reference Variables (Object, Array, Function)
 */

// value <- reference

let a = 5;
let b = a; // value
b = 6;

// console.log("a: ", a);
// console.log("b: ", b);

let numbers1 = [1, 2, 3];
let numbers2 = numbers1; // reference

numbers2.push(5);

console.log("numbers1: ", numbers1);
console.log("numbers2: ", numbers2);
