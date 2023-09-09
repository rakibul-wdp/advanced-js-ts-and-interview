// memoization in JavaScript

function add(x) {
  return 10 + x;
}

const memo = (func) => {
  let cache = {};

  return function (x) {
    if (cache[x]) {
      console.log("result from cache");
    } else {
      console.log("calculating result");
    }
  };
};

const calculate = memo(add);

console.log(calculate(10));
console.log(calculate(10));
