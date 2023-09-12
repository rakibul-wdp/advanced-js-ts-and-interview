// sorting words by length in a sentence by asc order

// input
const str = "Java is a Programming language";

function sortWords(data) {
  const dataAsArray = str.split(" ");

  dataAsArray.sort((a, b) => {
    return a.length - b.length;
  });

  return dataAsArray.join(" ");
}

console.log(sortWords(str));
