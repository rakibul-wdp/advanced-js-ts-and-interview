### What is operator precedence?

- As per operator precedence, operators with higher precedence are evaluated first.
- BODMAS: Brackets - Order - Division - Multiplication - Addition - Subtraction

### What is the difference between unary, binary and ternary operators?

- Operators based on number of operands

```javascript
let a = 5;

// unary operator
// single operand
let b = -a;
console.log(b); // -5
console.log(++a); // 6
```

```javascript
let x = 10;
let y = 3;

// binary operator
// two operands
let z = x + y;
console.log(z); // 13
```

```javascript
// ternary operator
// three operands
let result = condition ? "Yes" : "No";

console.log(result); // 'Yes'
```

### What is short-circuit evaluation in JS?

- Short-circuit evaluation stops the execution as soon as the result can be determined without evaluating the remaining sub-expressions.

```javascript
// short-circuit evaluation with logical AND
let result1 = false && someFunction();
console.log(result1); // false

// short-circuit evaluation with logical OR
let result2 = true || someFunction();
console.log(result2); // true
```

### What is the difference between == and === ?

- Loose Equality (==) operator compares two values for equality after performing type coercion

```javascript
// loose equality
console.log(1 == "1");
console.log(true == 1); // true
```

- Strict Equality (===) operator compares two values for equality without performing type coercion.

```javascript
// strict equality
console.log(1 === "1");
console.log(true === 1); // false
```

### What is the difference between Spread and Rest operator in JS?

- The spread operator(...) is used to expand or spread elements from an iterable (such as an array, string or object) into individual elements.

```javascript
// spread operator examples
const array = [1, 2, 3];
console.log(...array); // 1, 2, 3
```

- Uses of Spread Operator

```javascript
// copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5]

// passing multiple arguments to a function
const numbers = [1, 2, 3, 4, 5];
sum(...numbers);
function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e); // 15
}
```

- The rest operator is used in function parameters to collect all remaining arguments into an array

```javascript
// rest operator example
display(1, 2, 3, 4, 5);

function display(first, second, ...restArguments) {
  console.log(first); // 1
  console.log(second); // 2

  console.log(remaining); // [3, 4, 5]
}
```
