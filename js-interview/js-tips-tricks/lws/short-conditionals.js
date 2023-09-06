// short conditionals
const captain = "Abull";

// instead of doing this
if (captain === "Abul") {
  console.log("kick");
}

// we can use &&
captain === "Abul" && console.log("kick");

// and instead of doing this
if (captain !== "Abul") {
  console.log("lang");
}

// we can use ||
captain === "Abul" || console.log("lang");
