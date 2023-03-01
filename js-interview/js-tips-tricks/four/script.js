const button = document.getElementById("button");

// debounce handler
function debounce(fn, delay) {
  return function () {
    setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 2000)
);
