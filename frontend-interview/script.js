let grade = 65;

if (grade >= 90) {
  console.log("Excellent! You got an A.");
} else {
  if (grade >= 80) {
    console.log("Great job! You got a B.");
  } else {
    if (grade >= 70) {
      console.log("Good effort! You got a C.");
    } else {
      if (grade >= 60) {
        console.log("You passed with a D.");
      } else {
        console.log("Unfortunately, you failed with an F.");
      }
    }
  }
}
