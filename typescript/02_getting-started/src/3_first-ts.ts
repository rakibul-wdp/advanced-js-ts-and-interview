// function render(document: unknow) {
//   // Narrowing
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
//   document.whateverWeWant();
// }

let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());
