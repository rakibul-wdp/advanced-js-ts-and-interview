// reverse words in a string

// input
const str = "Hello World!";

function reverseWords(data) {
  const dataAsArray = data.split(" ");

  const result = dataAsArray.map((d) => {
    return d.split("").reverse().join("");
  });

  return result.join(" ");
}

console.log(reverseWords(str));
