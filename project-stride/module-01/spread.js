const numbers = [2, 3, 5, 7, 9];
const numbers2 = [numbers]; // reference

numbers2.push(4);

// console.log(numbers);
// console.log(numbers2);

const numbers3 = [2, 3, 5, 7];
const [n1, n2] = numbers3;
// console.log(n1, n2);

const person = {
  name: "abul",
  age: 25,
  address: "canada",
};

const person2 = { ...person };
person2.isMarried = false;
console.log(person, "\n", person2);
