// 1
// let a = [];
// let b = [];

// console.log([1] === [1]);
// console.log(a == b);
// console.log(a === b);

// memory location compare and memory location difference

// 2
// let a = [];
// let b = a;

// console.log(a == b);
// console.log(a === b);

// memory location same

// 3
// let a = [20];
// let b = [20];

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// here not compare memory location, here just compare index value

// 4
// let z = [1, 2, 3, 4];
// let a = {name: "john"};
// console.log(...z);
// spread allows iterable

// 5
// console.log(typeof NaN);
// console.log("hello" / 2);
// Not a number

// 6
// let data = 10 - -10;
// console.log(data);
/// minus minus plus (mathematical equation)

// 7
// const set = new Set([1, 1, 2, 3, 4, 4]);
// console.log(set);
// set

// 8
// let data = {name: "Omok"};
// console.log(delete data.name);
// console.log(delete data);
// console.log(data);
// the delete operator removes a property from an object. If the property's value is an object and there are not more references to the object, the object held by that property is eventually released automatically.

// 9
// const data = ["Omok", "Tomok", "Amrai"];
// const [y] = data;
// const [y, z, a] = data;
// console.log(y);
// console.log(y, z, a);

// 10
// const data = ["Omok", "Tomok", "Amrai"];
// const [,y] = data; // how to get second element
// const [,,z] = data; // how to get third element
// console.log(y, z);

// 11 how to get name property without . operator
// const data = {name: "Omok", age: 23, skill: "JS"};
// const {name} = data;
// console.log(name);

// 12 merge 2 object
// let data = {name: "Abul", age: 23, sill: "JS"};
// let info = {city: "Sherpur", mail: "abul@gmail.com"};
// const merge = {...data, ...info};
// console.log(merge);

// 13
// let data = {name: "Abul", age: 23, skill: "JS"};
// let info = {city: "Sherpur"};
// data = {data, ...info};
// console.log(data);

// 14
// let data = {name: "Abul", age: 29, skill: "JS"};
// let info = {city: "Bogra", skill: "Node"};
// data = {...data, ...info};
// console.log(data);

// 15
// const name = "Abul";
// console.log(name());

// 16
// const result = false || {} || null;
// console.log(result);

// 17
// const result = null || false || "";
// console.log(result);

// 18
// const result = [] || 0 || true;
// console.log(result);

// 19
// console.log(Promise.resolve(5));

// 20
// console.log("string" === "string");

// 21
// JSON.parse(); // what this method will do
// a. Parses JSON to a JavaScript value (ans)
// b. Parses a JavaScript object to JSON
// c. Parses any JavaScript value to JSON
// d. Parses JSON to a JavaScript object only

// 22
// let name = "Abul";

// function getName() {
//   console.log(name);
//   let name = "Babul";
// }
// let scope is block level
// getName();

// 23
// let name = "Abul";
// function getName() {
//   console.log(name);
// }
// getName();

// 24
// console.log((x => x)("I love"));
// console.log(`${(x => x)("I love")} to programming`);

// 25
// output should be 6
// function sumValues(x, y, z) {
//   return x + y + z;
// }

// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
// C: sumValues(...[1, 2, 3]) (ans)
// D: sumValues([1, 2, 3])

// 26
// const name = "code step by step";
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// operation perform left to right ! -> ===

// 27
// const name = "Chandu";
// const age = 22;

// console.log(isNaN(name)); // it's not a number -> yes/true
// console.log(isNaN(age)); // it's not a number -> no/false

// 28
// let person = {name: "Abul"};
// what can modify person object
// Object.seal(person);
// person.name = "Babul";
// person.age = 23;
// console.log(person);

// 29
// let data = [2, 9, 0, 10];
// remove first element
// data.shift();
// data.pop();
// console.log(data);

// 31
// check any value is odd or event
// const num = [1, 2, 3, 4, 5];
// for (each of num) {
//   each % 2 == 0
//     ? console.log(each + " " + "even")
//     : console.log(each + " " + "odd");
// }


// 32
// let data = {
//   name: "Abul"
// }
// delete data.name;
// console.log(data);

// 33
// let data = "true";
// convert data to boolean false value
// console.log(!Boolean(data));
// console.log(typeof !Boolean(data));
// console.log(typeof !data);

// 34
// let data = "true";
// convert data to boolean true value
// console.log(typeof !!data);

// 35
// difference between map and forEach function
/*
> The map() method returns a new array, whereas the forEach() method does not return a new array.
> The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
> The map() method can be used with other array methods, such as the filter() method. whereas the forEach method cannot be used with other array methods.
*/

// 36
let data = ["Abul", "Babul", "Cabul"];
delete data[1];
console.log(data.length);