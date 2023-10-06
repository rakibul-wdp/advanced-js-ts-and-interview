const squares = document.querySelectorAll("div");

const observer = new IntersectionObserver((squares) => {
  console.log(squares);
  squares.forEach((square) => {
    if (square.isIntersecting) {
      square.target.classList.add("visible");
    } else {
      square.target.classList.remove("visible");
    }
  });
});

squares.forEach((square) => observer.observe(square));
