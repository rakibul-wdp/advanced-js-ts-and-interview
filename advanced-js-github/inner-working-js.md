## Inner Working of JavaScript

- Global Execution Context
- Function Execution Context

- Creation of global execution context
- Execution of top level code
- Execution of functions and callback

### this

- global -> this = global object (incase of browser it's window object)

- simple function call -> this = could be undefined or global object
- arrow function -> this = doesn't have this of its own (lexical this)
- method -> this = the object that is calling the method
- event listener -> this = DOM element
