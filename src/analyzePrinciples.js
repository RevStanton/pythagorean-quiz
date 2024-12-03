import questions from "./data/questions.js";

const primaryCounts = {};
const oppositeCounts = {};

// Initialize counts for all principles
const principles = [
  "Monad", "Dyad", "Triad", "Tetrad", "Pentad",
  "Hexad", "Heptad", "Octad", "Ennead", "Decad"
];

principles.forEach((principle) => {
  primaryCounts[principle] = 0;
  oppositeCounts[principle] = 0;
});

// Calculate maximum possible points per principle
questions.forEach((question) => {
  const maxPoints = Math.max(...question.options.map((opt) => opt.points));
  const minPoints = Math.min(...question.options.map((opt) => opt.points));

  // For primary principle
  primaryCounts[question.primary] += maxPoints;

  // For opposite principle
  const maxInversePoints = 6 - minPoints; // Since inversePoints = 6 - points
  oppositeCounts[question.opposite] += maxInversePoints;
});

console.log("Primary Principle Maximum Possible Scores:");
console.table(primaryCounts);

console.log("\nOpposite Principle Maximum Possible Scores:");
console.table(oppositeCounts);
