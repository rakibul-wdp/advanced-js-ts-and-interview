function show(name, age) {
  console.log("hello", name, age);
}

function firstFun(name, age, callback) {
  console.log("from first fun: ", name, age);
  setTimeout(() => {
    callback(name, age);
  }, 1000);
}

firstFun("abul", 15, show);

const numbers = [2, 3, 5, 7, 9];
numbers.map((item, index) => console.log(item, "index", index));
