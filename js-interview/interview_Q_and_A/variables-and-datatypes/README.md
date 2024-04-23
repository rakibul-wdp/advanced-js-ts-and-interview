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

### What is the difference between null and undefined in JS?

- (A stand on the wall with also a paper holder) Means there is a valid variable with also a value of data type number.

```javascript
let value1 = 0;
let value2 = "";
```

- (There is just a stand on the wall) Means there is a valid variable with a value of no data type.
- null: null variables are intentionally assigned the null value
- Null can be used, when you are sure you do not have any value for the particular variable.

```javascript
let value3 = null;

let nullVariable = null; // null assigned
console.log(nullVariable); // null
```

- (There is nothing on the wall) Means variable is incomplete variable and not assigned anything.
- undefined: When a variable is declared but has not been assigned a value, it is automatically initialized with undefined.
- Undefined can be used when you don't have the value right now, but you will get it after some logic or operation.

```javascript
let value4;

let undefinedVariable; // no value assigned
console.log(undefinedVariable); // undefined
```

### What is the use of typeof operator?

- typeof operator is used to determine the type of each variable.
- Real application use -> typeof operator can be used to validate the data received from external sources(API);
