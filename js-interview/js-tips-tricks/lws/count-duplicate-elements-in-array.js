// count duplicate elements in an array

// input
const fruits = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "babul",
  "babul",
  "abul",
  "cabul",
];

function countDuplicates(data) {
  const output = {};

  // logic here
  data.map((d) => {
    output[d] = (output[d] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(fruits));
