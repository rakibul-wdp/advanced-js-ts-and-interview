/*
1

console.log("value of age is", age);
var age = 20;
console.log("value of age is", age);

hoisting
*/

/*
2

age = 100;
console.log("value of age is", age);
let age = 30;
console.log("value of age is", age);

temporal dead zone
*/

/*
3

myFun();
var myFun = function () {
  console.log("first");
};
myFun();
function myFun() {
  console.log("second");
}
myFun();

hoisting | execution contest
*/
