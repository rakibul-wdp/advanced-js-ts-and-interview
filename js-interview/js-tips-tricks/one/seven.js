// Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
console.log(`library1 - ${library1}`);
console.log(`library2 - ${library2}`);

// We can do this
console.log({library1});
console.log({library2});