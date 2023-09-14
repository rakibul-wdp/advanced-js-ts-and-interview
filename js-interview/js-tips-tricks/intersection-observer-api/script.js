const circle = document.getElementById("circle");

const observer = new IntersectionObserver((items) => {
  console.log(items);
});

observer.observe(circle);
