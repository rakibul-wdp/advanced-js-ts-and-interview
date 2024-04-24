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
