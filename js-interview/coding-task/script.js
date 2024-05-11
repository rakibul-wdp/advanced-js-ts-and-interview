/*
// 1
console.log("value of age is", age);
var age = 20;
console.log("value of age is", age);
// hoisting
*/

/*
// 2
age = 100;
console.log("value of age is", age);
let age = 30;
console.log("value of age is", age);
// temporal dead zone
*/

/*
// 3
myFun();
var myFun = function () {
  console.log("first");
};
myFun();
function myFun() {
  console.log("second");
}
myFun();
// hoisting | execution context
*/

/*
// 4
var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
console.log(variable);
var variable = 30;
console.log(variable);

// 10 -> 20 -> 20 -> 30 | error(variable same)
*/

/*
// 5
foo = 30;
console.log("foo", foo);
var foo = 100;
console.log("foo", foo);
// 30 -> 100
*/

/*
// 6
variable = 10;
() => {
  foo = 100;
  console.log(variable);
  var foo = 100;
  variable = 20;
  console.log(variable);
};
console.log(foo);
console.log(variable);
var variable = 30;
console.log(variable);
// foo is in function scope
*/
