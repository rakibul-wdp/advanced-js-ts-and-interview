// how to flatten a multi-dimensional array
let names = ["Abul", ["Babul", "Cabul"], "Dabul", ["Ebul", "Fabul"]];

// we can use array.flat() method to flatten one level array
console.log(names.flat());

// multi level array
let names2 = ["Abul", ["babul", "cabul", ["dabul", "ebul"]], "fabul"];

// we can pass "Infinity" parameter to array.flat function
console.log(names2.flat(Infinity));
