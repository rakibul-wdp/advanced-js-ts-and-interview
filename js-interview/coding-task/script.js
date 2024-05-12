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

/*
// 7
for (let i = 0; i < 10; i++) setTimeout(() => console.log(i), 0);
// var variable global scope & let variable local scope
*/

/*
// 8
var fullName = "Omok Tomok";

var obj = {
  fullName: "hacked full name",

  prop: {
    fullName: "inside prop",
    getFullName: function () {
      return this.fullName;
    },
  },

  getFullName: function () {
    return this.fullName;
  },

  getFullNameV2: () => this.fullName,

  getFullNameV3: (function () {
    return this.fullName;
  })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3());
*/

/*
// 9
const abul = {
  name: "abul babul",
  sayName: function () {
    console.log(this.name);
  },
};

const dabul = {
  name: "dabul ebul",
  sayName: function () {
    console.log(this.name);
  },
};

dabul.sayName.call(abul);

// abul babul | context pass by .call
*/
