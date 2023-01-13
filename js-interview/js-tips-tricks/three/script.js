// 1
// what will be the output of the below code?
// console.log([] + []); // ""
// at first empty array convert empty string then compare and result will empty string.

// console.log({} + []);
// first convert String({}) -> [object Object], String([]) -> ""

/*
// 2
// what will be the output of below code?
function myFunction() {
  // console.log(arguments);
  // return arguments[0] + "Bangladesh";

  return "Bangladesh";
}

const string = myFunction `hello `;
console.log(string);
*/

// 3
// how to make all text contents of a website editable?
// by contenteditable you can do this.
// for whole website you can do this document.body.contentEditable = true

/*
// 4
// what will be the output of below code?
function b() {
  console.log(`the length is ${this.length}`);
}

let a = {
  length: 10,
  method: function(b) {
    arguments[0]();
    // console.log(arguments.length);
  }
};

a.method(b, 5);

// here b and 5 tow arguments that's why this.length is 2
*/

/*
// 5
// what will be the output of below code?
const a = "constructor";
console.log(a[a](01));
*/

/*
// 6
// what will be the output?
console.log(0.1 + 0.2); // 0.30000000000000004
// conversion procedure
*/