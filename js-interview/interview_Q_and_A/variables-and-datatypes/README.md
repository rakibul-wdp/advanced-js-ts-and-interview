### What are variables? What is the difference between var, let and const?

- var creates a function-scoped variable.

```javascript
// using var
function example() {
  if (true) {
    var count = 10;
    console.log(count); // 10
  }

  console.log(count); // 10
}
```

- let creates a block-scoped variable

```javascript
// using let
function example() {
  if (true) {
    let count = 10;
    console.log(count); // 10
  }

  console.log(count);
  // Uncaught Reference Error: count is not defined
}
```

- const can be assigned only once and it's value cannot be changed afterwards.

```javascript
// using constant
const z = 10;
z = 20;

// error
console.log(z);
```

### What are data types in JS?

- A data type determines the type of variable.
- Types of Data Types
  - Primitive: Numbers, String, Booleans, Undefined and Null
  - Non-Primitive: Object, Array, Function, Date and RegExp
