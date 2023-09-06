// How to flatten a multi-dimensional array
let smileys = ["🥰", ["😄", "😃"], "😉", ["🥲", "😑"]];

// We can use array.flat() method to flatten one level array
console.log(smileys.flat());

// Multi level array
let smileys2 = ["🥰", ["😄", "😃", ["🥲", "😑"]], "😉"];

// We can  pass "infinity" parameter to array.flat function
console.log(smileys2.flat(Infinity));