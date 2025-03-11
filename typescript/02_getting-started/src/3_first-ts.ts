// function render(document: unknow) {
//   // Narrowing
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
//   document.whateverWeWant();
// }

// Birds fly. Fish swim. A pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;
