// syntax
// function declaration and function expression

function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);

const multiply = function (num1, num2) {
  return num1 * num2;
};
// console.log(multiply(5, 7));

// console.log(result);

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

const sum = (num1, num2) => num1 + num2;
const res = sum(3, 5);
// console.log(res);

// this
let user = {
  age: 45,
  getAge: function () {
    console.log("normal fun: ", this.age);
  },
  getAgeDetails: () => {
    console.log("arrow fun: ", this.age);
  },
};

const res1 = user.getAge();
const res2 = user.getAgeDetails();
