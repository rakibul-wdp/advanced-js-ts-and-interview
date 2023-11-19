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

### object oriented programming

- oop is a programming paradigm.
- oop was developed to maintain a structured code base.
- we use object as model to describe real-world data or abstract feature.
- object may contain data (property) and functionality (methods).
- in oop, objects are self-contained blocks of code.
- objects can interact with one another.
- interactions happen through a public interface: methods that the code outside of the object can access.
