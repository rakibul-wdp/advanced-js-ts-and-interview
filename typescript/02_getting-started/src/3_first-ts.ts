function render(document: unknow) {
  // Narrowing
  if (document instanceof WordDocument) {
    document.toUpperCase();
  }
  document.move();
  document.fly();
  document.whateverWeWant();
}
