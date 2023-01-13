// 1
// what will be the output of the below code?
// console.log([] + []); // ""
// at first empty array convert empty string then compare and result will empty string.

// console.log({} + []);
// first convert String({}) -> [object Object], String([]) -> ""

// 2
// what will be the output of below code?
function myFunction() {
  // console.log(arguments);
  // return arguments[0] + "Bangladesh";

  return "Bangladesh";
}

const string = myFunction `hello `;
console.log(string);