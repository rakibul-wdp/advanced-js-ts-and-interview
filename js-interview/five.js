// Short conditionals
const captain = "Chandu";

// Instead of doing this
if (captain === "Chand") {
  console.log("❤️");
}

// We can use &&
captain === "Chandu" && console.log("❤️");

// And instead of doing this
if (captain !== "Chandu") {
  console.log("😡");
}

// We can use ||
captain === "Chandu" || console.log("😡");