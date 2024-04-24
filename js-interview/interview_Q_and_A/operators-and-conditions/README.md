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
