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

### What is the difference between primitive and non-primitive data types?

- Primitive data types can hold only single value.
- Primitive data types are immutable, meaning their values, once assigned, cannot be changed.

```javascript
// number
let age = 25;
age = 30;
```

- Non primitive data types can hold multiple value.
- They are mutable and their values can be changed.

```javascript
// non primitive data types

// array
let oddNumbers = [1, 3, 5];

// object
let person = {
  name: "John",
  age: 30,
  grades: ["A", "B", "C"],
  greet: function () {
    console.log(this.name);
  },
};
```

- Primitive Data Types

  - number, string, Boolean, undefined, null are primitive data types.
  - Primitive data types can hold only single value.
  - Primitive data types are immutable and their values cannot be changed.
  - Primitive data types are simple data types.

- Non-primitive Data Types
  - object, array, function, date, RegExp are non-primitive data types.
  - Non-primitive data types can hold multiple values and methods.
  - Non-primitive data types are mutable and their values can be changed.
  - Non-primitive dta types are complex data types.
