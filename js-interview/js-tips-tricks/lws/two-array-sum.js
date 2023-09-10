// what will be the output of the below code?
console.log([] + []); // ""

console.log({} + []); // [object object]

function myFunction() {
  return "Bangladesh";
}

const string = myFunction`hello `;
console.log(string);

// by document.body.contentEditable = true we can make whole website editable

function b() {
  console.log(`the length is ${this.length}`);
}

let a = {
  length: 10,
  method: function (b) {
    arguments[0]();
  },
};

a.method(b, 5);
