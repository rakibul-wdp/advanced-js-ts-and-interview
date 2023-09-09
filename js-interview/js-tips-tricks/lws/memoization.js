// memoization in JavaScript

function add(...x) {
  return x.reduce((sum, curVal) => sum + curVal);
}

// higher order function
const memo = (func) => {
  let cache = {};

  return function (...x) {
    const key = JSON.stringify(x);
    console.log(key);
    if (cache[key]) {
      console.log("result from cache");
      return cache[key];
    } else {
      console.log("calculating result");
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculate = memo(add);

console.log(calculate(10, 20, 30, 40));
console.log(calculate(10, 20, 30, 40));
