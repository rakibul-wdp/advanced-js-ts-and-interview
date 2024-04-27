### What are Events? How are events triggered?

- Events are actions that happen in the browser, such as a button click, mouse movement or keyboard input.

```javascript
// get the reference of button in a variable
var button = document.getElementById("myButton");

// attach an event handler to the button
button.addEventListener("click", handleClick); // "click" is event and handleClick is event handler or callback function

// event handler function
function handleClick() {
  alert("button clicked");
}
```

### What is Event Delegation in JS?

- Event delegation in JavaScript is a technique where you attach a single event handler to a parent element to handle events on its child elements.
