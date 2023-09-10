// what will be the output of the below code?
console.log([] + []); // ""

console.log({} + []); // [object object]

function myFunction() {
  return "Bangladesh";
}

const string = myFunction`hello `;
console.log(string);

// by document.body.contentEditable = true we can make whole website editable
