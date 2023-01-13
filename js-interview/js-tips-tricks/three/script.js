// what will be the output of the below code?
console.log([] + []); // ""
// at first empty array convert empty string then compare and result will empty string.

console.log({} + []);
// first convert String({}) -> [object Object], String([]) -> ""