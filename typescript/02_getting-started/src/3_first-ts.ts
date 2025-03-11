// function render(document: unknow) {
//   // Narrowing
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
//   document.whateverWeWant();
// }
type IUser = {
  name: string;
  age: number;
  occupation?: string;
};
let users: IUser[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Muller",
    age: 28,
  },
];
