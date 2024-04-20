### What is JavaScript? What is the role of JavaScript engine?

- JavaScript is a programming language that is used for converting static web pages to interactive and dynamic web pages.
- A JavaScript engine is a program present in web browsers that executes JavaScript code.
- JavaScript Engines: Chrome-V8, Firefox - Spider-Monkey, Safari - JavaScript-Core and Edge - Chakra

### What are Client side and Server side?

- A client is a device, application, or software component that requests and consumes services or resources from a server.
- A server is a device, computer, or software application that provides services, resources, or functions to clients.

### What is Scope in JavaScript?

- Scope determines where variables are defined and where they can be accessed.

```javascript
// Global - accessible anywhere
let globalVariable = "global";

greet();

function greet() {
  // Function - accessible inside function only
  let functionVariable = "function";

  if (true) {
    // Block - accessible inside block only
    let blockVariables = "block";
    console.log(blockVariables); // block
    console.log(functionVariable); // function
    console.log(globalVariable); // global
  }

  console.log(functionVariable); // function
  console.log(globalVariable); // global
}

console.log(globalVariable); // global
```

### What is the type of a variable in JS when it is declared without using the var, let, or const keywords?

- "var" is the implicit type of variable when a variable is declared without var, let, or const keywords.

```javascript
if (true) {
  variable = 10;
}

console.log(variable); // 10
```
