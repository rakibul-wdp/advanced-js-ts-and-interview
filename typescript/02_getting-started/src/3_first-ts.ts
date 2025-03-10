let a: number = 100;
let b: string = "Coffee";
let c: boolean[] = [true, false, false];
let d: { age: number } = { age: 20 };
let e: number[] = [3];
let f: any;
let g: any[] = [];

// Property 'releaseYear' is missing in type '{ title: string; }' but required in type '{ title: string; releaseYear: number; }'
let song: {
  title: string;
  releaseYear: number;
} = { title: "My song" };

// Type 'string' is not assignable to type 'number'.
let prices = [100, 200, 300];
prices[0] = "$100";

// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
function myFunc(a: number, b: number): number {}
