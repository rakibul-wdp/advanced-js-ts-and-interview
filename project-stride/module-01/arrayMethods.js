// forEach, map, find , filter, reducer

const numbers = [2, 3, 5, 7, 9];

const numbersOfForEach = numbers.forEach((item) => item);
console.log("numbersOfForEach: ", numbersOfForEach);

const numbersOfMap = numbers.map((item) => item + 1);
console.log("numbersOfMap: ", numbersOfMap);

const numbersOfFind = numbers.find((item) => item === 7);
console.log(numbersOfFind);

const numbersOfFilter = numbers.filter((item) => item < 7);
console.log(numbersOfFilter);

const numbersOfReduce = numbers.reduce((pre, cur) => pre + cur);
console.log(numbersOfReduce);
