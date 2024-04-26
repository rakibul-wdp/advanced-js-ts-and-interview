### What are the types of function?

- Types of Functions
  - Named Function
  - Anonymous Function
  - Function Expression
  - Arrow Function
  - IIFE
  - Callback Function
  - Higher-Order Function

### What are callback function? Wha tis it use?

- A callback function is a function that is passed as an argument to another function.

```javascript
function add(x, y) {
  return x + y;
}

let a = 3,
  b = 5;
let result = add(a, b);
console.log(result); // 8

function display(x, y, operation) {
  // operation is callback function and display is higher-order function
  var result = operation(x, y);
  console.log(result);
}

display(10, 5, add);
display(10, 5, multiply);
display(10, 5, subtract);
display(10, 5, divide);
```
